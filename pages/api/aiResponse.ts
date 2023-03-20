// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import query from "../../lib/queryApi";
import admin from "firebase-admin";
import {adminDb} from "../../firebaseAdmin";

type Data = {
    answer: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const {prompt,model, session,chatId} = req.body
    if(!prompt) {
        res.status(400).json({
            answer: "unable to read the prompt, write" +
                " something valid"
        })
        return
    }
    if(!chatId) {
        res.status(400).json({answer: "please provide the chatId"})
        return;
    }
    const response = await query(prompt,model)
    const message:Message= {
        text: response || "chatGPT was not able to find answer",
        createdAt: admin.firestore.Timestamp.now(),
        user:{
            _id:"chatGPT",
            name:"chatGPT",
            avatar:"https://justcreative.com/wp-content/uploads/2023/02/chatgpt-logo.png.webp"
        }
    }

   await adminDb
       .collection("users")
       .doc(session.user.email)
       .collection("chats")
       .doc(chatId)
       .collection("messages")
       .add(message)
    res.status(200).json({ answer: message.text })
}

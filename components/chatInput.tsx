"use client"
import React, {FormEvent, useState} from 'react';
import {PaperAirplaneIcon} from "@heroicons/react/20/solid";
import {useSession} from "next-auth/react";
import {addDoc, collection, serverTimestamp} from "@firebase/firestore";
import {db} from "../firebase";
import toast from "react-hot-toast";
import ModelSelector from "./modelSelector";
import useSWR from "swr";


type Props = {
    chatId: string
}


function ChatInput({chatId}: Props) {
    const [prompt, setPrompt] = useState('')
    const {data: session} = useSession()
    const {data: model} = useSWR('model', {
        fallbackData: 'text-davinci-003'
    })

    //SWR to get model

    const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!prompt) return
        const input = prompt.trim()
        setPrompt('')
        const message: Message = {
            text: input,
            createdAt: serverTimestamp(),
            user: {
                _id: session?.user?.email!,
                name: session?.user?.name!,
                avatar: session?.user?.image || `https://ui-avatars.com/api/?name=${session?.user?.name!}`
            }
        }
        // adding data to db
        await addDoc(collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'),
            message)
        //Toast notifications loading
        const notification = toast.loading('thinking...')

         await fetch('/api/aiResponse', {
            method: "Post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({prompt: input, chatId,model, session})
        }).then(res=>{
            //toast notification successful
            toast.success('chatGPT has responded !',{
                id:notification
            })

        })

    }
    return (
        <div className='bg-gray-700/50 text-gray-400 rounded-lg text-sm '>

            <form onSubmit={sendMessage} className='p-5 space-x-5 flex'>
                <input
                    disabled={!session}
                    className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
                    placeholder="type your query" value={prompt}
                    onChange={(e) => setPrompt(e.target.value)} type="text"/>
                <button disabled={!prompt || !session}
                        className="bg-[#11A37F] hover:opacity-50 text-white
                        font-bold px-4 py-2 rounded-lg disabled:bg-gray-400
                         disabled:cursor-not-allowed"
                        type='submit'><PaperAirplaneIcon className="h-5 w-5 -rotate-45"/>
                </button>
            </form>

            <div className=" md:hidden">
               <ModelSelector/>
            </div>
        </div>
    );
}

export default ChatInput;
'use client'
import React from 'react';
import {PlusIcon} from "@heroicons/react/20/solid";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {addDoc, collection, serverTimestamp} from "@firebase/firestore";
import {db} from "../firebase";
import {useCollection} from "react-firebase-hooks/firestore";

function NewChat() {
    const router = useRouter();
    const {data: session} = useSession()

    const createChat = async () => {
        const doc = await addDoc(collection(db, 'users', session?.user?.email!, 'chats'), {
            userId: session?.user?.email!,
            createdAt: serverTimestamp()
        })
        router.push(`/chat/${doc.id}`)
    }

    return (
        <div onClick={createChat} className='border-gray-700 chatRow'>
            <PlusIcon className='h-4 w-4'/>
            <p>
                New chat
            </p>
        </div>
    );
}

export default NewChat;
'use client'
import NewChat from "./newChat";
import {signOut} from "next-auth/react"
import {useSession} from "next-auth/react";
import {useCollection} from "react-firebase-hooks/firestore";
import {collection} from "@firebase/firestore";
import {db} from "../firebase";
import ChatRow from "./chatRow";
import ModelSelector from "./modelSelector";


function Sidebar() {
    const {data: session} = useSession()
    const [chats, loading, error] = useCollection(
        session && collection(db, "users", session?.user?.email!, "chats")
    );

    return (
        <div className='flex h-screen p-2 flex-col'>
            <div className="flex-1">

                <div>
                    {/*    new chat*/}
                    <NewChat/>
                    <div className="hidden sm:inline">
                       <ModelSelector/>
                    </div>
                    {
                        loading && (
                            <div className="animate-pulse text-center">
                                <p>Loading...</p>
                            </div>
                        )
                    }
                    {/*    chat rows*/}
                    <div className="flex flex-col space-y-2 my-2">
                        {chats?.docs.map((chat) => (
                            <ChatRow key={chat.id} id={chat.id} />
                        ))}
                    </div>

                </div>
            </div>
            {
                // avatar
                session && (
                    <img src={session.user?.image!}
                         className='h-12 w-12 mx-auto cursor-pointer mb-2 rounded-full hover:opacity-50'
                         alt='avatar'/>
                )
            }
            <button
                onClick={() => signOut()}
                className='bg-gray-500 px-3 py-2 my-3 rounded-lg text-white hover:opacity-30'>Log
                out
            </button>
        </div>
    );
}

export default Sidebar;
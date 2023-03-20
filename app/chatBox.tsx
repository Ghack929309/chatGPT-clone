'use client'
import {useState} from "react";

function ChatBox() {
    const [prompt, setPrompt] = useState('')
    const [data, setData] = useState('')

    const handleResponse = async () => {
        const post = await fetch('/api/aiResponse', {
            method: "Post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(prompt)
        })
        const {answer} = await post.json()
        setData(answer)
    }

    return (
        <div className='p-4'>
            <h1>ChatGPT</h1>
            <input type="text" value={prompt}
                   onChange={(e) => setPrompt(e.target.value)}/>
            <button onClick={handleResponse}>send</button>
            {
                data && (
                    <div>
                        <h2>Response</h2>
                        <p>{data}</p>
                    </div>

                )
            }
        </div>
    );
}

export default ChatBox;
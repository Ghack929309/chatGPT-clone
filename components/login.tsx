"use client"
import {signIn} from "next-auth/react"
import Image from "next/image"
function Login() {
    return (
        <div className="bg-[#009F77] h-screen flex flex-col items-center justify-center text-center">
            <Image
                src="https://justcreative.com/wp-content/uploads/2023/02/chatgpt-logo.png.webp"
                width={300}
                height={300}
                alt='logo'
            />
            <button onClick={()=>signIn('google')} className='text-white animate-pulse text-3xl font-bold'>Sign in to use ChatGPT</button>
        </div>
    );
}

export default Login;
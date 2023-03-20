import React from 'react';

type Props = {
    avatar:string
    name:string
    message:string
}
function Message({avatar,message,name}:Props) {

    return (
        <div className={`py-5 mt-12 text-white ${name==='chatGPT'&&'bg-[#434654]'}`}>
            <div className={`flex px-10 space-x-5 w-full ${name==='chatGPT'?'justify-start':'justify-end'}`}>
                <img className='h-8 w-8 rounded-full' src={avatar} alt="avatar"/>
                <p className="pt-1 text-sm">{message}</p>
            </div>
        </div>

    );
}

export default Message;
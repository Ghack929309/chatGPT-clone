import type {NextPage} from 'next'
import {BoltIcon, ExclamationTriangleIcon, SunIcon} from "@heroicons/react/24/outline";


const Home: NextPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen px-2">
            <h2 className='mb-20 font-bold text-3xl md:text-5xl'> ChatGPT Clone</h2>
            <div className="flex space-x-2 text-center flex-wrap items-center justify-center">
                <div className="">
                    <div className="flex flex-col justify-center items-center mb-5">
                        <SunIcon className="h-8 w-8"/>
                        <h2>Examples</h2>

                    </div>
                    <div className="">
                        <p className="infotext">
                           "Explain something to me"


                        </p>
                        <p className="infotext">
                            Got any creative ideas for a 10 year old’s birthday?

                        </p>
                        <p className="infotext">
                            How do I make an HTTP request in Javascript?
                        </p>
                    </div>
                </div>
                <div className="">
                    <div className="flex flex-col justify-center items-center mb-5">
                        <BoltIcon className="h-8 w-8"/>
                        <h2>Capabilities</h2>

                    </div>
                    <div className="">
                        <p className="infotext">
                            Remembers what user said earlier in the conversation


                        </p>
                        <p className="infotext">
                            Allows user to provide follow-up corrections

                        </p>
                        <p className="infotext">
                            Trained to decline inappropriate requests

                        </p>
                    </div>
                </div>
                <div className="">
                    <div className="flex flex-col justify-center items-center mb-5">
                        <ExclamationTriangleIcon className="h-8 w-8"/>
                        <h2>Limitations</h2>

                    </div>
                    <div className="">
                        <p className="infotext">
                            May occasionally generate incorrect information


                        </p>
                        <p className="infotext">
                            May occasionally produce harmful instructions or biased content

                        </p>
                        <p className="infotext">
                            Limited knowledge of world and events after 2021

                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

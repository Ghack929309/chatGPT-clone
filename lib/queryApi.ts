import openai from './chatgpt'


const query = async (prompt:string, model:string)=>{
    return await openai.createCompletion({
        model,
        prompt,
        temperature: 0.9,
        max_tokens: 1000,//150
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.6,
        stop: [" Human:", " AI:"],
    }).then(res => res.data.choices[0].text).catch(err => `chatGPT was not able to find an answer...${err.message}`)
}
export default query
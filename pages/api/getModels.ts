import type {NextApiRequest, NextApiResponse} from 'next'
import openai from "../../lib/chatgpt";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const models = await openai.listModels().then(res=>res.data.data)

    const options=models.map(model=>({
        value:model.id,
        label:model.id
    }))
    res.status(200).json({options})
}
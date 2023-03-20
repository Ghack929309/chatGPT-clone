"use client"
import useSWR from 'swr'
import Select from "react-select";


const fetchModel = async () => fetch('/api/getModels').then(res => res.json())

function ModelSelector() {
    const {data} = useSWR('models', fetchModel)
    const {data: model, mutate: setModel} = useSWR('model', {
        fallbackData: 'text-davinci-003'
    })
    return (
        <div className='mt-2 mb-2'>
            <Select
                id="selectbox"
                instanceId="selectbox"
                defaultValue={model}
                placeholder={model}
                options={data?.options}
                onChange={(e) => setModel(e.value)}
                isSearchable
                menuPosition='fixed'
                classNames={{control: (state) => 'bg-[#434654] border-[#434654]'}}
            />
        </div>
    );
}

export default ModelSelector;
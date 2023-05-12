import { useState, useEffect } from "react"
import { IPaymentOption } from "../types"

type Props = {
    option: IPaymentOption
    onClick: (id: number)=>void
    selectedPaymentOption: number
}

export default function PaymentOption({option, onClick, selectedPaymentOption}: Props){
    const [selected, setSelected] = useState<boolean>(false)
    useEffect(() => {
        setSelected(selectedPaymentOption == option.id)
    }, [selectedPaymentOption])
    return(
        <div className="flex gap-2 cursor-pointer" onClick={()=>onClick(option.id)} key={option.id}>
            <div className={`rounded-full h-5 w-5 flex justify-center items-center border-2 ${selected ? 'border-green' :'border-gray-900'} self-center`}>
                <div className={`h-3 w-3 rounded-full ${selected ? 'bg-green' :''}`}></div>
            </div>
            <span className={`font-medium self-center ${selected ? 'text-black' : 'text-gray-900'}`}>{option.title}</span>
        </div>
    )
}
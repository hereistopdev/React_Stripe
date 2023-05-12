import { useState } from "react";
import CardDetails from "./CardDetails";
import PaymentOption from "./PaymentOption";

export default function Payments(){
    const [selectedPaymentOption, setSelectedPaymentOption] = useState<number>(0)
    const paymentOptions = [
        {
            title: 'Card',
            id: 1,
        },
        {
            title: 'Bank',
            id: 2,
        }
    ]
    const handleClick = (id: number) =>{
        setSelectedPaymentOption(id)
    }
    return(
        <div className="w-full flex flex-col gap-6">
            <div className="border-b border-gray-300 w-full py-3">
                <h1 className="text-xl font-medium">Payments</h1>
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="text-md font-medium">Pay With:</h3>
                <div className="flex gap-10">
                    {
                        paymentOptions.map((option)=>{
                           return( <PaymentOption option={option} selectedPaymentOption={selectedPaymentOption}onClick={handleClick} />)
                        })
                    }
                </div>
            </div>
            <CardDetails/>
            <div className="flex flex-col gap-2">
                <button className="py-3 bg-green text-gray-20 rounded text-lg font-medium"> PAY $34.5</button>
                <p className="text-gray-900 font-light">
                Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                </p>
            </div>
        </div>
    )
}
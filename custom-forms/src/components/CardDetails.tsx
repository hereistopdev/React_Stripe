export default function Details(){
    return(
        <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
                <h3 className="font-medium">Card Number</h3>
                <input type="text" className="w-full border-2 border-gray-300 rounded py-2 text-lg px-3 focus:outline-none focus:border-black" placeholder="1234  5678  9101  1121" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="col-span-1 flex flex-col gap-2">
                    <h3 className="font-medium">Expiration Date</h3>
                    <input type="text" className="w-full border-2 border-gray-300 rounded py-2 text-lg px-3 focus:outline-none focus:border-black" placeholder="MM/YY" />
                </div>
                <div className="col-span-1 flex flex-col gap-2">
                <h3 className="font-medium">CVV</h3>
                    <input type="text" className="w-full border-2 border-gray-300 rounded py-2 text-lg px-3 focus:outline-none focus:border-black" placeholder="123" />
                </div>
                
            </div>
        </div>
    )
}
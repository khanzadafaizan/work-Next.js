"use client"
type Params ={
    id:number
}
type Priceparams ={
    params:Params
}
import { iteams } from "@/app/data/iteams"
export default function Price(props:Priceparams){
    const currentDetail =iteams.find((iteam)=> iteam.id == props.params.id)
if(!currentDetail){
   return <div>Data not found</div>
}

function onClick(){
let placed =document.getElementById('placed');
if(placed){
    placed.innerText=("Your order is successfully placed");
    placed.className="text-teal-400";      
}    
}
    return(
        <div className="min-h-screen mx-auto">
        <div className="pt-20 justify-around flex " >
         <h1>{currentDetail.name}</h1>
         <h1>{currentDetail.size1}</h1>
         <h1>{currentDetail.sizeprice1}</h1>
         <h1>{currentDetail.name}</h1>
         <h1>{currentDetail.size2}</h1>
         <h1>{currentDetail.sizeprice2}</h1>
         <h1>{currentDetail.name}</h1>
         <h1>{currentDetail.size3}</h1>
         <h1>{currentDetail.sizeprice3}</h1>
         <button onClick={onClick} className="rounded-full bg-slate-400 px-2">Place Order</button>
         <h1 id="placed"></h1>
        </div>
          
            </div>

    )
}
"use client"
import { iteams } from "@/app/data/iteams"
type Params ={
    id:number
}

type IteamDetailsParams ={
    params:Params
}
export default function IteamDetails (props:IteamDetailsParams){
    const currentDetail = iteams.find((iteam)=> iteam.id == props.params.id)
   if(!currentDetail){
     return <div>Details is not found</div>
   }

    function placeOder(){
      
      let placed = document.getElementById("placed");
      if(!placed){
        return <div>Your order is not found.</div>
      }  
      placed.innerText =("Your order is successfully placed.");
      placed.className="text-emerald-500 pt-4";
  
    }
    
    
    return(
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -mx-4 -my-8">
      <div className="py-8 px-4 lg:w-1/3">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
            <span className="font-medium text-lg text-gray-800 title-font leading-none">18</span>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">CATEGORY</h2>
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3">{currentDetail.size1}</h1>
            <p className="leading-relaxed mb-5">{currentDetail.description}</p>
            <a className="inline-flex items-center">
              <span className="flex-grow flex flex-col pl-3">
                <span className="title-font font-medium text-gray-900">{currentDetail.sizeprice1}</span>
              </span>
            </a>
            <span className=" mx-4 ">
                <button onClick={placeOder} className=" rounded-full	bg-cyan-600	px-4 py-2 title-font font-medium text-gray-900">Place Oder</button>
              </span>
              <span className="flex-grow flex flex-col pl-3">
                <span id="placed" className="title-font font-medium text-gray-900"></span>
              </span>
          </div>
        </div>
      </div>
      <div className="py-8 px-4 lg:w-1/3">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
            <span className="font-medium text-lg text-gray-800 title-font leading-none">18</span>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">CATEGORY</h2>
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3">{currentDetail.size2}</h1>
            <p className="leading-relaxed mb-5">{currentDetail.description}</p>
            <a className="inline-flex items-center">
              <span className="flex-grow flex flex-col pl-3">
                <span className="title-font font-medium text-gray-900">{currentDetail.sizeprice2}</span>
              </span>
            </a>
            <span className=" mx-4 ">
                <button onClick={placeOder} className=" rounded-full	bg-cyan-600	px-4 py-2 title-font font-medium text-gray-900">Place Oder</button>
              </span>
              <span className="flex-grow flex flex-col pl-3">
                <span id="placed" className="title-font font-medium text-gray-900"></span>
              </span>
          </div>
        </div>
      </div>
      <div className="py-8 px-4 lg:w-1/3">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
            <span className="font-medium text-lg text-gray-800 title-font leading-none">18</span>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">CATEGORY</h2>
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3">{currentDetail.size3}</h1>
            <p className="leading-relaxed mb-5">{currentDetail.description}</p>
            <a className="inline-flex items-center">
              <span className="flex-grow flex flex-col pl-3">
                <span className="title-font font-medium text-gray-900">{currentDetail.sizeprice3}</span>
              </span>
            </a>
            <span className=" mx-4 ">
                <button onClick={placeOder} className=" rounded-full	bg-cyan-600	px-4 py-2 title-font font-medium text-gray-900">Place Oder</button>
              </span>
              <span className="flex-grow flex flex-col pl-3">
                <span id="placed" className="title-font font-medium text-gray-900"></span>
              </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}
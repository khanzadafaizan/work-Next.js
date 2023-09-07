import { Titeams } from "@/app/data/iteams"
type Productprops ={
    iteam:Titeams
}
export default function Product (props:Productprops){
    return(
          
                <div className="text-center p-2">
                    <h1 className="text-2xl">{props.iteam.name}</h1>
                    <p className="text-sm">{props.iteam.description}</p>
                    <div className="p-2">
                    <p  className="text-xl"><a href={`/product/productprice/${props.iteam.id}`}><span className="text-sky-600">Oder</span> {props.iteam.size1} </a> </p>
                    <p className="text-xl "><a href={`/product/productprice/${props.iteam.id}`}><span className="text-sky-600">Oder</span> {props.iteam.size2} </a> </p>
                    <p className="text-xl"><a href={`/product/productprice/${props.iteam.id}`}><span className="text-sky-600">Oder</span> {props.iteam.size3} </a> </p>
                </div>
                </div>
              
                )
}
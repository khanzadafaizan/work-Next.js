
import { iteams } from "../data/iteams"
import Product from "./components/Product"
export default function ProductHome(){
    return(
        <div className="min-h-screen mx-auto">
            <div className="justify-around flex pt-20 " >
           {iteams.map((iteam)=> <Product iteam={iteam}/> )}

            </div>
              
                </div>
    )

}
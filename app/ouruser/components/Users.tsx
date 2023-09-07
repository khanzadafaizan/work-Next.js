import { TUser } from "../userdata/users"
type TUserprops={
  user:TUser
}
export default function Users(props:TUserprops){
      return(

        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
       <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
         <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98"/>
         <div className="flex-grow">
           <h2 className="text-gray-900 title-font font-medium">{props.user.name}</h2>
           <p className="text-gray-500">{props.user.jobTitle}</p>
           <a className="text-cyan-700" href={`/ouruser/userDetails/${props.user.id}`}>More Details</a>
         </div>
       </div>
     </div>
      )
    
   
 
}

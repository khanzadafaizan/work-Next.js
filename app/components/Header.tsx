import Image from "next/image"
import logo from "/public/logo.jpg"
export default function Header (){

  return(
  <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image src={logo} width={75} height={75} alt={"Img"} />
      <span className="ml-3 text-xl">Chocolate World</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a href="./ouruser/" className="mr-5 hover:text-gray-900">Team Members</a>
      <a href="./events/" className="mr-5 hover:text-gray-900">Events</a>
      <a className="mr-5 hover:text-gray-900">Third Link</a>
      <a className="mr-5 hover:text-gray-900">Fourth Link</a>
    </nav>
     <a href="./product/" className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Buy
    </a>
  </div>
</header>
    )
}
import Image from "next/image";
import Header from "./components/Header";
import Iteams from "./components/Iteams";
import Footer from "./components/Footer";
import { iteams } from "./data/iteams";
export default function Home() {
  return (
    <div>
      <Header />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {iteams.map((iteam) => (
              <Iteams key={iteam.id} iteam={iteam} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

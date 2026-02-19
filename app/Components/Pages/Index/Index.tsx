import Image from "next/image"
import Hero from "../Hero/page"
import Brands from "../Brands/page"
import About from "../About/page"
import Services from "../Services/page"
import History from "../History/page"



const Index = () => {
  return (
    <>
      <Hero />
      <Brands />
      <About />
      <Services />
      <History />
    </>
  )
}

export default Index
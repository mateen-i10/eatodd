import Order from "./components/Order/Order"
import Hero from "./components/Hero/Hero"
import Header from "../../shared/header/Header"
import Footer from "../../shared/footer/Footer"
import Catering from "./components/Catering/Catering"
import {useEffect, useState} from "react"
import {clearJoinByLink, isJoinedByLink} from "../../utility/Utils"

const Home = () => {
    const [key, setKey] = useState()
    console.log(key, "from home")
    useEffect(() => {
          if (isJoinedByLink())  clearJoinByLink()
    }, [])
  return (
    <div>
          <Header setKey={setKey}/>
          <Hero />
          <Order />
          {/*<Catering />*/}
          <Footer/>
    </div>
  )
}

export default Home

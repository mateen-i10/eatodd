import Order from "./components/Order/Order"
import Hero from "./components/Hero/Hero"
import Header from "../../shared/header/Header"
import Footer from "../../shared/footer/Footer"
import Catering from "./components/Catering/Catering"
import {useEffect} from "react"
import {clearJoinByLink, isJoinedByLink} from "../../utility/Utils"

const Home = () => {
    useEffect(() => {
          if (isJoinedByLink())  clearJoinByLink()
    }, [])
  return (
    <div>
          <Header />
          <Hero />
          <Order />
          {/*<Catering />*/}
          <Footer/>
    </div>
  )
}

export default Home

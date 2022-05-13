import Order from "./components/Order/Order"
import Hero from "./components/Hero/Hero"
import Header from "../../shared/header/Header"
import Footer from "../../shared/footer/Footer"

const Home = () => {
  return (
    <div>
          <Header />
          <Hero />
          <Order />
          <Footer/>
    </div>
  )
}

export default Home

import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink } from 'reactstrap'
import Hero from "./components/Hero"
import Order from "./components/Order"

const Home = () => {
  return (
    <>
      <Hero />
        <Order />
    </>
  )
}

export default Home

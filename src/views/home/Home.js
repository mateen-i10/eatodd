import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink } from 'reactstrap'
import Order from "./components/Order"
import Hero from "./components/Hero"

const Home = () => {
  return (
    <div>
      <Hero />
      <Order />
    </div>
  )
}

export default Home

import '../App.css'
import NavBar from "../components/NavBar"
import Corpo from "../components/Corpo"
import Descontos from "../components/Descontos"
import Footer from "../components/Footer"

function Home() {
  return (
    <div>
        <NavBar />
        <Corpo />
        <Descontos />
        <Footer />
    </div>
  )
}

export default Home

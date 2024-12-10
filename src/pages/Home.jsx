import Header from "../components/Header"
import Panner from "../components/Panner"
import SpecialityMenu from "../components/SpecialityMenu"
import TopDoctors from "../components/TopDoctors "

const Home = () => {
  return (
    <div>
      <Header/>
      <SpecialityMenu/>
      <TopDoctors/>
      <Panner/>
    </div>
  )
}

export default Home
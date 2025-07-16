import Navbar from '../Components/subComponents/Navbar'
import Footer from '../Components/subComponents/Footer'
import Doctorsoverlay from '../Components/Doctorscomponents.jsx/Doctorsoverlay'
import Drform from '../Components/Doctorscomponents.jsx/Drform'
import AllDoctors from '../Components/Doctorscomponents.jsx/AllDoctors'

const Doctors = () => {
  return (
    <div >
      <Navbar />
      <Doctorsoverlay/>
      <Drform/>
      <AllDoctors/>
      <Footer />
    </div>
  )
}

export default Doctors

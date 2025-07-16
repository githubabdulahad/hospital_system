import BannerWithOverlay from "../subComponents/bannerwithoverlay";
import image1 from "../../assets/images/contactimg/image1.png"


const Contactoverlay = () => {
  return (
    <div className="mt-10.5">
    <BannerWithOverlay
      imageSrc={image1}
      italicText="Welcome to Kings College Hospital London"
      title="Contact Us"
      breadcrumb="Home >> Contact"
      buttonText="Appointment"
      buttonLink="/appointment" // Or your specific appointment link
      bgColor=""
      imageOverlayColor="bg-[#ACD9E8] opacity-50" // You can change this color if needed
    />
    </div>
  )
}

export default Contactoverlay

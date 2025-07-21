import BannerWithOverlay from "../subComponents/bannerwithoverlay";


const Contactoverlay = () => {
  return (
    <div className="mt-11">
    <BannerWithOverlay
      imageSrc="/images/contactimg/image1.png"
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

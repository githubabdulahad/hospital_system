import BannerWithOverlay from "../../components/subComponents/bannerwithoverlay";

const Appointmentoverlay = () => {
  return (
    <div className="mt-11">
    <BannerWithOverlay
      imageSrc="/images/Appointmentimages/image1.png"
      italicText="Welcome to Kings College Hospital London"
      title="Book an Appointment"
      breadcrumb="Home >> Appointments"
      buttonText="See our Doctors"
      buttonLink="/doctors" // Or your specific appointment link
      bgColor=""
      imageOverlayColor="bg-[#ACD9E8] opacity-50" // You can change this color if needed
    />
    </div>
  );
};

export default Appointmentoverlay;
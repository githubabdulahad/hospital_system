import BannerWithOverlay from "../subComponents/bannerwithoverlay";

const Appointmentoverlay = () => {
  return (
    <div className="mt-11 mb-10">
    <BannerWithOverlay
      imageSrc="/images/doctorimage/drimg1.png"
      italicText="Welcome to Kings College Hospital London"
      title="Find a Doctor"
      breadcrumb="Home >> Doctor"
      buttonText="Appointment"
      buttonLink="/appointment" // Or your specific appointment link
      bgColor=""
      imageOverlayColor="bg-[#ACD9E8] opacity-50" // You can change this color if needed
    />
    </div>
  );
};

export default Appointmentoverlay;
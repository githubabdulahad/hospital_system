import PackageBanner from "../subComponents/Packagessubcomp";

const ApptPackage = () => {
  return (
    <div className="mt-36 mb-24">
    <PackageBanner
      imageSrc="/images/Appointmentimages/iconcube.png"
      italicText="Latest"
      boldText="PACKAGES"
      description="At King's we offer comprehensive"
      highlightedText="packages and offers for numerous services"
      buttonText="View all packages"
      buttonLink=""
    />
    </div>
  );
};

export default ApptPackage;
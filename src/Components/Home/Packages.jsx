import PackageBanner from "../subComponents/Packagessubcomp";
import cube from "../../assets/images/packagecube.png";

const LatestPackagesBanner = () => {
  return (
    <PackageBanner
      imageSrc={cube}
      italicText="Latest"
      boldText="PACKAGES"
      description="At King's we offer comprehensive"
      highlightedText="packages and offers for numerous services"
      buttonText="View all Packages"
    />
  );
};

export default LatestPackagesBanner;
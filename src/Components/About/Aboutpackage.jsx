import PackageBanner from "../subComponents/Packagessubcomp";
import packageabout from "../../assets/images/packageabout.png";

const Aboutpackage = () => {
  return (
    <PackageBanner
      imageSrc={packageabout}
      italicText=""
      boldText=""
      description="Looking for professional & trusted medical healthcare?"
      highlightedText="don't hesitate to contact us."
      buttonText="Contact us"
      buttonLink="/contact"
    />
  );
};

export default Aboutpackage;
import Commonbtn from "./Commonbtn";
import { Link } from "react-router-dom";

const PackageBanner = ({ 
  italicText, 
  boldText, 
  description, 
  highlightedText, 
  buttonText, 
  imageSrc, 
  buttonBgColor = "bg-[#C0E6DA]", 
  buttonTextColor = "text-[#0B2443]" ,
  buttonLink = ""
}) => {
  return (
    <section className="w-full bg-[#0B2443] border border-[#b6e5d6] mb-14">
      <div className="max-w-7xl mx-auto pl-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <img src={imageSrc} alt="banner-icon" className="w-22 h-22" />
          <div>
            <div className="flex items-baseline gap-1">
              <span 
                className="italic text-[#C0E6DA] text-2xl" 
                style={{ fontFamily: "'EB Garamond', Garamond, serif" }}
              >
                {italicText}
              </span>
              <span 
                className="font-bold text-white text-2xl" 
                style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}
              >
                {boldText}
              </span>
            </div>
            <div 
              className="mt-2 text-white font-bold text-lg leading-snug max-w-xl" 
              style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}
            >
              {description} <span className="font-bold text-[#C0E6DA]">{highlightedText}</span>
            </div>
          </div>
        </div>
        <Link to={buttonLink} style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
          <Commonbtn 
            bgColor={buttonBgColor} 
            textColor={buttonTextColor} 
            className="mr-22"
          >
            {buttonText}
          </Commonbtn>
        </Link>
      </div>
    </section>
  );
};

export default PackageBanner;
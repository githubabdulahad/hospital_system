import image1 from '../../assets/images/Abouthistory1.png';
import image2 from '../../assets/images/Abouthistory2.png';
import image3 from '../../assets/images/Abouthistory1.png';
import image4 from '../../assets/images/Abouthistory1.png';
import Abouthistoryimage from '../../assets/images/AboutHistoryimage.png';

const Abouthistory = () => {
  return (
    <div className="container mx-auto py-8 sm:py-12 md:py-16 px-2 sm:px-4 md:px-12 text-[#0B2443]" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-8 sm:mb-16 text-center">Our History</h2>

      <div className="relative flex flex-col md:flex-row md:justify-around md:items-end pb-8 sm:pb-12 md:pb-20 gap-8 md:gap-0">
        {/* Timeline Item 1 */}
        <div className="flex flex-col items-center text-center max-w-xs mx-auto md:mx-4 relative z-10 mb-8 md:mb-0">
          <div className="relative mb-6">
            <img src={image1} alt="1980 Medical School" className="w-full max-w-[160px] sm:max-w-[200px] h-auto border border-gray-200 shadow-md" />
            <img src={Abouthistoryimage} alt="" className='w-[140px] sm:w-[248px] -ml-2 sm:-ml-6 -mt-3'/>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mt-6 sm:mt-10 w-full sm:w-[240px] text-left">1980</h3>
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-2 w-full sm:w-[240px] text-left">
            In 1983, the Medical School was reunited with King's College
            London to form the King's College School of Medicine and Dentistry.
          </p>
        </div>

        {/* Timeline Item 2 */}
        <div className="flex flex-col items-center text-center max-w-xs mx-auto md:mx-4 relative z-10 mb-8 md:mb-0">
          <div className="relative mb-6">
            <img src={image2} alt="1990 Medical School" className="w-full max-w-[160px] sm:max-w-[200px] h-auto border border-gray-200 shadow-md" />
            <img src={Abouthistoryimage} alt="" className='w-[140px] sm:w-[248px] -ml-2 sm:-ml-6 -mt-3'/>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mt-6 sm:mt-10 w-full sm:w-[240px] text-left">1990</h3>
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-2 w-full sm:w-[240px] text-left">
            In 1983, the Medical School was reunited with King's College
            London to form the King's College School of Medicine and Dentistry.
          </p>
        </div>

        {/* Timeline Item 3 */}
        <div className="flex flex-col items-center text-center max-w-xs mx-auto md:mx-4 relative z-10 mb-8 md:mb-0">
          <div className="relative mb-6">
            <img src={image3} alt="2000 Medical School" className="w-full max-w-[160px] sm:max-w-[200px] h-auto border border-gray-200 shadow-md" />
            <img src={Abouthistoryimage} alt="" className='w-[140px] sm:w-[248px] -ml-2 sm:-ml-6 -mt-3'/>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mt-6 sm:mt-10 w-full sm:w-[240px] text-left">2000</h3>
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-2 w-full sm:w-[240px] text-left">
            In 1983, the Medical School was reunited with King's College
            London to form the King's College School of Medicine and Dentistry.
          </p>
        </div>

        {/* Timeline Item 4 */}
        <div className="flex flex-col items-center text-center max-w-xs mx-auto md:mx-4 relative z-10 mb-8 md:mb-0">
          <div className="relative mb-6">
            <img src={image4} alt="2001 Medical School" className="w-full max-w-[160px] sm:max-w-[200px] h-auto border border-gray-200 shadow-md" />
            <img src={Abouthistoryimage} alt="" className='w-[140px] sm:w-[248px] -ml-2 sm:-ml-6 -mt-3'/>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mt-6 sm:mt-10 w-full sm:w-[240px] text-left">2001</h3>
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-2 w-full sm:w-[240px] text-left">
            In 1983, the Medical School was reunited with King's College
            London to form the King's College School of Medicine and Dentistry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Abouthistory;
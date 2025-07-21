
const ContactHistory = () => {

  return (
      <div className="container mx-auto py-16 px-12 text-[#0B2443]" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8 text-center">Our History</h2>
  
        <div className="relative flex justify-around items-end pb-20">
          {/* Horizontal Line - Tailwind doesn't have a direct "line" utility, so we'll use a div */}
          {/* <img src={Abouthistoryimage} alt="" /> */}
  
          {/* Timeline Item 1 */}
          <div className="flex flex-col items-center text-center max-w-xs mx-4 relative z-10 mb-8 md:mb-0">
            <div className="relative mb-6">
              {/* Replace with your actual image path */}
              <img src="/images/contactimg/contacthistory1.png" alt="1980 Medical School" className="w-full max-w-[200px] h-auto border border-gray-200 shadow-md" />
              {/* Dot */}
  <img src="/images/contactimg/contacthistory5.png" alt="" className='w-[248px] -ml-6 -mt-3'/>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mt-10 w-[240px] text-left">1980</h3>
            <p className="text-gray-600 text-sm leading-relaxed mt-2 w-[240px] text-left">
              In 1983, the Medical School was reunited with King's College
              London to form the King's College School of Medicine and Dentistry.
            </p>
          </div>
  
          {/* Timeline Item 2 */}
          <div className="flex flex-col items-center text-center max-w-xs mx-4 relative z-10 mb-8 md:mb-0">
            <div className="relative mb-6">
              {/* Replace with your actual image path */}
              <img src="/images/contactimg/contacthistory2.png" alt="1990 Medical School" className="w-full max-w-[200px] h-auto border border-gray-200 shadow-md" />
              {/* Dot */}
  <img src="/images/contactimg/contacthistory5.png" alt="" className='w-[248px] -ml-6 -mt-3'/>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mt-10 w-[240px] text-left">1990</h3>
            <p className="text-gray-600 text-sm leading-relaxed mt-2 w-[240px] text-left">
              In 1983, the Medical School was reunited with King's College
              London to form the King's College School of Medicine and Dentistry.
            </p>
          </div>
  
          {/* Timeline Item 3 */}
          <div className="flex flex-col items-center text-center max-w-xs mx-4 relative z-10 mb-8 md:mb-0">
            <div className="relative mb-6">
              {/* Replace with your actual image path */}
              <img src="/images/contactimg/contacthistory3.png" alt="2000 Medical School" className="w-full max-w-[200px] h-auto border border-gray-200 shadow-md" />
              {/* Dot */}
  <img src="/images/contactimg/contacthistory5.png" alt="" className='w-[248px] -ml-6 -mt-3'/>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mt-10 w-[240px] text-left">2000</h3>
            <p className="text-gray-600 text-sm leading-relaxed mt-2 w-[240px] text-left">
              In 1983, the Medical School was reunited with King's College
              London to form the King's College School of Medicine and Dentistry.
            </p>
          </div>
  
          {/* Timeline Item 4 */}
          <div className="flex flex-col items-center text-center max-w-xs mx-4 relative z-10 mb-8 md:mb-0">
            <div className="relative mb-6">
              {/* Replace with your actual image path */}
              <img src="/images/contactimg/contacthistory1.png" alt="2001 Medical School" className="w-full max-w-[200px] h-auto border border-gray-200 shadow-md" />
              {/* Dot */}
  <img src="/images/contactimg/contacthistory5.png" alt="" className='w-[248px] -ml-6 -mt-3'/>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mt-10 w-[240px] text-left">2001</h3>
            <p className="text-gray-600 text-sm leading-relaxed mt-2 w-[240px] text-left">
              In 1983, the Medical School was reunited with King's College
              London to form the King's College School of Medicine and Dentistry.
            </p>
          </div>
        </div>
      </div>
    );
}

export default ContactHistory

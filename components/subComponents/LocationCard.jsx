export default function LocationCard({ image, title }) {
  return (
    <div className="relative rounded-xl overflow-hidden h-full w-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
      
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <div className="bg-[#E4E4E4] px-6 py-3 text-xl text-[#0B2443] font-semibold w-[184px]">
          {title}
        </div>
      </div>
    </div>
  );
}
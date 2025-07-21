import ExpertiseCard from '../subComponents/ExpertiseCard';
import ArticlesCard from '../subComponents/ArticlesCard';
import LocationsSection from '../subComponents/LocationsSection';

export default function Infocomp() {
  return (
    <section className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto px-6 py-10 mb-20" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      <div className="flex flex-col gap-6">
        <ExpertiseCard />
        <ArticlesCard />
      </div>
      <LocationsSection />
    </section>
  );
}

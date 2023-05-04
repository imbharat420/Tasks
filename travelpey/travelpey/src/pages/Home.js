import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import InternationalSection from '../components/PopularFlights';
import SliderSection from '../components/SliderSection';
import Testimonial from '../components/Testimonial';
import TrendingActivities from '../components/TrendingActivities';

const Home = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <SliderSection />
      <InternationalSection />
      <TrendingActivities />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;

import Header from '@/components/Header';
import SwiperCarousel from '@/components/SwiperCarousel';
import Plur from '@/components/plur';
import BottomMenu from '@/components/BottomMenu';
import Hero from '@/components/Hero';
import News from '@/components/News';
import MusicArchive from '@/components/MusicArchive';
import Events from '@/components/Events';
import LateralBar from '@/components/LateralBar';
import Footer from '@/components/Footer';

export default function RootLayout() {
  return (
    <main className="main">
      {/* <Header /> */}
      <SwiperCarousel />
      <LateralBar />
      <Hero />
      <Plur />
      <BottomMenu />
      <News />
      <Events />
      <MusicArchive />
      <Footer />
    </main>
  );
}

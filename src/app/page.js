import Header from '@/components/Header';
import SwiperCarousel from '@/components/SwiperCarousel';
import BottomMenu from '@/components/BottomMenu';
import Membership from '@/components/Membership';
import News from '@/components/News';
import MusicArchive from '@/components/MusicArchive';
import Events from '@/components/Events';
import LateralBar from '@/components/LateralBar';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
  return (
    <main className="main">
      <Header />
      <SwiperCarousel />
      <LateralBar />
      <Membership />
      <BottomMenu />
      <News />
      <Events />
      <MusicArchive />
      {children}
      <Footer />
    </main>
  );
}

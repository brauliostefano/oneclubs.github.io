import BottomMenu from '@/components/BottomMenu';
import Membership from '@/components/Membership';
import News from '@/components/News';
import Events from '@/components/Events';
import LateralBar from '@/components/LateralBar';
import Header from '@/components/Header';
import SwiperCarousel from '@/components/SwiperCarousel';
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
      {children}
      <Footer />
    </main>
  );
}

import './App.css';
import LaunchPage from './components/home/LaunchPage';
import HomePage from './components/home/HomePage';
import OutfitOverlay from './components/home/OutfitOverlay';
import OutfitGallery from './components/home/OutfitGallery';
import ShoesOverlay from './components/home/ShoesOverlay';
import SignUp from './components/home/SignUp';
import Footer from './components/home/Footer';

function App() {
  return (
    <>
      <LaunchPage />
      <HomePage />
      <OutfitOverlay />
      <OutfitGallery />
      <ShoesOverlay />
      <SignUp />
      <Footer />
    </>
  );
}

export default App;

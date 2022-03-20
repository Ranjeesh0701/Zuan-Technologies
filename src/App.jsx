// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import YourCourses from './components/YourCourses';
import './css/style.css';
import DarkThemeBanner from './components/DarkThemeBanner';
import Membership from './components/Membership';
import PopularCourses from './components/PopularCourses';
import Testimonials from './components/Testimonials';
import ExpertsOnZuan from './components/ExpertsOnZuan';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <YourCourses />
      <DarkThemeBanner />
      <Membership />
      <PopularCourses />
      <Testimonials />
      <ExpertsOnZuan />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;

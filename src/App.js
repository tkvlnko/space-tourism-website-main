import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './containers/home/home';
import Destination from './containers/destination/destination';
import Crew from './containers/crew/crew';
import Technology from './containers/technology/technology';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Destination />
      <Crew />
      <Technology />
      <Footer />
    </div>
  );
}

export default App;

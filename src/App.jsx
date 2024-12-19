import Banner from "./components/Banner/Banner";
import Consultations from "./components/Consultations/Consultations";
import Customers from "./components/Customers/Customers";
import Experts from "./components/Experts/Experts";
import Footer from "./components/Footer/Footer";
import Harmony from "./components/Harmony/Harmony";
import HomeApp from "./components/HomeApp/HomeApp";
import Magic from "./components/Magic/Magic";
import Approach from "./components/approach/Approach";

function App() {
  return (
    <div className="max-w-[1340px] mx-auto">
      <Banner />
      <Magic />
      <Consultations />
      <Harmony />
      <Approach />
      <Customers />
      <Experts />
      <HomeApp />
      <Footer />
    </div>
  );
}

export default App;

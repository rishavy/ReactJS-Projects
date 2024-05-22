import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div>
      <div className="fixed w-full z-50">
        <Header />
      </div>
      <Outlet />
      <Footer />


    </div>
  );
}

export default App;
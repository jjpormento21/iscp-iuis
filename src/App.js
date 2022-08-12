import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-calendar/dist/Calendar.css";
import profilePic from "./assets/profile.jpg";

import logo from "./assets/iscp.png";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header logo={logo} />
      <Dashboard profilePic={profilePic} />
      <Footer />
    </div>
  );
}

export default App;

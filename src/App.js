import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';


import logo from './assets/iscp.png'

function App() {
  return (
    <div>
      <Header logo={logo} />
    </div>
  );
}

export default App;

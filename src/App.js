
import './App.css';
import Register from './components/Register';
// import Login from './components/Login';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar appname={"TodoWebApp"}/>
    <Register/>
    {/* <Login/> */}
    </>
  );
}

export default App;

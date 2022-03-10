import Login from './components/Login';
import Logout from './components/Logout';
import Home from './components/Home';
import { Routes, Route} from "react-router-dom";
function App() {
  return (
    <div style={{textAlign:"center"}}>
      <h1>Infogen Labs</h1>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/logout' element={<Logout/>}/>
      </Routes>
    </div>
  );
}

export default App;

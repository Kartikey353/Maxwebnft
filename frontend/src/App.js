import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace"; 
import Collection from "./pages/Collection";
import Community from "./pages/Community";
import Create from "./pages/Create";
import Login from "./pages/Login";
import Protected from "./Components/Protected";
import Registration from "./pages/Registration";
import Userdashboard from "./pages/Userdashboard";
import Createnewitem from "./pages/Createnewitem";
import AccountSetting from "./pages/AccountSetting";
function App() {
  return (
    <> 
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>  
        <Route path="/login" element={<Login/>}></Route> 
        <Route path="/marketplace" element={<Marketplace/>}></Route> 
        {/* <Route path="/marketplace" element={<Protected Component={Marketplace}/>}></Route> */}
        <Route path="/collection" element={<Protected Component={Collection}/>}></Route>
        <Route path="/community" element={<Community/>}></Route> 
        <Route path="/create" element={<Protected Component={Create}/>}></Route> 
        <Route path="/register" element={<Registration/>}></Route> 
        <Route path="/userdashboard/:userid" element={<Protected Component={Userdashboard}/>}></Route> 
        <Route path="/Createnewitem129865efd" element={<Protected Component={Createnewitem}/>}></Route> 
        <Route path="/accountsetting" element={<AccountSetting/>}></Route> 
      </Routes>
    </Router>
    </>
  );
}

export default App;

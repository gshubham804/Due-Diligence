import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Navbar,Footer} from './Layout';
import { DashBoard, Home,LandingPage,Login,Registration,SharableForm, StartupDetails, UploadExcelsheet } from './Pages';

function App() {

  return (
    <Router>
   <Navbar/>
  <Routes>
  <Route path="/login" element={<Login/>}/>
  <Route path="/registration" element={<Registration/>}/>
  <Route path="/home" element={<Home />} />
  <Route path="/uploadexcelsheet" element={<UploadExcelsheet />} />
  <Route path="/sharableform" element={<SharableForm />} />
  <Route path="/dashboard" element={<DashBoard />} />
  <Route path="/startupdetails" element={<StartupDetails />} />
  <Route path="/" element={<LandingPage />} />
  </Routes>
  <Footer/>
    </Router>
  )
}

export default App;UploadExcelsheet
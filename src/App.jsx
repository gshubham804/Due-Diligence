import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Navbar,Footer} from './Layout';
import { DashBoard, Home,Login,Registration,SharableForm, StartupDetails, UploadExcelsheet } from './Pages';

function App() {

  return (
    <Router>
   <Navbar/>
  <Routes>
  <Route path="/" element={<Login/>}/>
  <Route path="/registration" element={<Registration/>}/>
  <Route path="/home" element={<Home />} />
  <Route path="/uploadexcelsheet" element={<UploadExcelsheet />} />
  <Route path="/sharableform" element={<SharableForm />} />
  <Route path="/dashboard" element={<DashBoard />} />
  <Route path="/startupdetails" element={<StartupDetails />} />
  </Routes>
  <Footer/>
    </Router>
  )
}

export default App;UploadExcelsheet
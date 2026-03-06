import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"

import IndiaNepalallPackages from "./pages/IndiaNepalallPackages"
import NepalAllPackages from "./nepalpackages/NepalAllPackages"
import Kathmandu from "./nepalpackages/Kathmandu"

import AboutPage from "./pages/About"
import AyodhyaPackages from "./pages/AyodhyaPackages"
import KathmanduTour2N3D from "./pages/KathmanduTour2N3D"
import KashiTourPackages from "./pages/KashiTourPackages"
import BhutanTourPackages from "./pages/BhutanTourPackages"
import PrayagrajTourPackages from "./pages/PrayagrajTourPackages"
import BodhGayaTourPackages from "./pages/BodhGayaTourPackages"
import GorakhpurTourPackages from "./pages/GorakhpurTourPackages"


const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>} >

      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>

      <Route path="indianepalallpackages" element={<IndiaNepalallPackages/>}/>
      <Route path="nepalallpackages" element={<NepalAllPackages/>}/>
      <Route path="package/kathmandu" element={<Kathmandu/>}/>

      <Route path="About" element={<AboutPage/>}/>
      <Route path="AyodhyaPackages" element={<AyodhyaPackages/>}/>
      <Route path="KathmanduTour2N3D" element={<KathmanduTour2N3D/>}/>
      <Route path="KashiTourPackages" element={<KashiTourPackages/>}/>
      <Route  path="BhutanTourPackages" element={<BhutanTourPackages/>}/>
      <Route path="PrayagrajTourPackages" element={<PrayagrajTourPackages/>}/>
      <Route path="BodhGayaTourPackages" element={<BodhGayaTourPackages/>}/>
      <Route path="GorakhpurTourPackages" element={<GorakhpurTourPackages/>}/>








      </Route>







    </Routes>
    
    
    
    
    
    
    </BrowserRouter>
    
   
    
    
    </>
  )
}


export default App
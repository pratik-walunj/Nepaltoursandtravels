import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import IndiaNepalallPackages from "./pages/IndiaNepalallPackages"
import NepalAllPackages from "./nepalpackages/NepalAllPackages"

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







      </Route>







    </Routes>
    
    
    
    
    
    
    </BrowserRouter>
    
   
    
    
    </>
  )
}


export default App
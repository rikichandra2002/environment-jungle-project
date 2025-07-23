import { BrowserRouter,Routes,Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Addproduct from "./pages/Addproduct";
function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/addproduct" element={<Addproduct/>} />

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
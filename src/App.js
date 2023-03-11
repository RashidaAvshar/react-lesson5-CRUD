import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
import Table from "./pages/Table";
import About from "./pages/About";
import Detail from "./pages/Detail";


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/table" element={<Table/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>

      </Routes>
    </div>
  );
}

export default App;

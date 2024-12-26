
import './App.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CodeMirror from "./CodeMirror/CodeMirror.tsx";
import SaveCode from "./SaveCode/SaveCode.tsx";
import Navbar from "./Navbar/Navbar.tsx";
function App() {


  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<CodeMirror/>}/>
            <Route path="/code" element={<SaveCode/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App

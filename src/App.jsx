import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Flashcard from "./pages/Flashcard"
import Layout from "./pages/Layout"
function App() {


  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/Flashcard/:id" element={<Flashcard />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App

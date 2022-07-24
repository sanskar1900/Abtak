import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      //  <NavBar category={"sports"} 
      //  <News country="in" category={"sports"}/>
      <BrowserRouter>
      <NavBar/>
      <div className="text-center heartBeat" ><h1><marquee  style={{color:'#c89666'}} >Abtak-Headlines</marquee></h1></div>
        <Routes>
        <Route path="/" element={<News country="in" category="general"/>}/>
        <Route path="/sports" element={<News country="in" category="sports"/>}/>
        <Route path="/entertainment" element={<News country="in" category="entertainment"/>}/>
        <Route path="/science" element={<News country="in" category="science"/>}/>
        <Route path="/technology" element={<News country="in" category="technology"/>}/>
        <Route exact path="/business" element={<News country="in" category="business"/>}/>
        <Route path="/general" element={<News country="in" category="general"/>}/>
        <Route path="/health" element={<News country="in" category="health"/>}/>
        </Routes>
        
       
      </BrowserRouter>
    );
  }
}

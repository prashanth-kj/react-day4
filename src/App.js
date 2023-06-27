import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle';
import "@fortawesome/fontawesome-free/css/all.min.css";

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MainPage from './MainPage';
import Footer from './Footer';
import LogoutModel from './LogoutModel'

import './App.css';

function App() {
  const [style,setStyle]=useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");

   const changeStyle=()=>{
       if(style==="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"){
          setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled")
       }
       else{
        setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
       }
   }

   const changeStyle1=()=>{
    if(style==="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"){
       setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1")
    }
    else{
     setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
    }
}

  return (
      
    <div>
      <body id="page-top">

        {/* <!-- Page Wrapper --> */}
        <div id="wrapper">
              <Sidebar style={style}  changeStyle={changeStyle}/>
               

                  {/* <!-- Content Wrapper --> */}
                  <div id="content-wrapper" className="d-flex flex-column">

                    {/* <!-- Main Content --> */}
                    <div id="content">

                        <Navbar changeStyle1={changeStyle1}/>

                      {/* <!-- Begin Page Content --> */}
                      <div className="container-fluid">
                         <MainPage/>
                        
                        {/* <!-- /.container-fluid --> */}
                       </div>
                       </div>
                    {/* <!-- End of Main Content --> */}

                    {/* <!-- Footer --> */}
                       <Footer/>

                  </div>
                  {/* <!-- End of Content Wrapper --> */}

                </div>
                {/* <!-- End of Page Wrapper --> */}
                  <LogoutModel/>

                

              </body>
            </div>

            );
}

            export default App;



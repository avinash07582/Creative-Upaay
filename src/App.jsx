 import React from 'react';
import Sidenav from "./components/Sidenav"
import Header from './components/Header';


 const App = () => {
   return (
     <div className=' bg-white-500 w-screen h-full flex flex-col'>
       <Header />
    <Sidenav/>
  
    
     </div>
   );
 }

 export default App;

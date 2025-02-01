 import React from 'react';
import Sidenav from "./components/Sidenav"
import Header from './components/Header';

import MobileApp from './components/Mobile.jsx/Mobile';


 const App = () => {
   return (
     <div className=' bg-white-500 w-screen h-full flex flex-col'>
       <Header />
 <div className='flex'>
 <Sidenav/>
 <MobileApp/>
 </div>
    {/* <div className=''></div> */}
    
  
    
     </div>
   );
 }

 export default App;
// import React from 'react';
//  import Sidenav from "./components/Sidenav"
//  import Header from './components/Header';
//  import MobileApp from './components/Mobile.jsx/Mobile'
// const App = () => {
//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div className="w-1/5 bg-gray-100 p-4">
//         <Sidenav />
//       </div>

     
//       <div className="flex-1 flex flex-col">
//         {/* Header */}
//         <div className="bg-white shadow-md p-4">
//           <Header />
//         </div>

//         {/* Kanban Board */}
//         <div className="flex-1 p-6 overflow-auto bg-gray-50">
//           <MobileApp />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App ;
// import React from 'react';
//   import Sidenav from "./components/Sidenav"
//   import Header from './components/Header';
//   import MobileApp from './components/Mobile.jsx/Mobile'

// const App = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-1/5 bg-white border-r border-gray-200">
//         <Sidenav />
//       </div>
      
//       {/* Main Content */}
//       <div className="flex flex-col flex-grow p-4">
//         {/* Header */}
//         <Header />
        
//         {/* Main Section */}
//         <div className="flex-grow mt-4">
//           <MobileApp />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App ;

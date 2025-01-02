// import React from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import { ArrowRight } from 'lucide-react';
// import SearchBar from './SearchBar';
// import HowItWorks from './HowItsWork';

// const LandingPage = () => {
//       return (
//             <div>
//                   <Header />
//                   <div>
//                         <div className="relative w-full overflow-hidden">
//                               <div className="absolute inset-0 bg-gradient-to-r from-black/100 to-transparent z-10" />
//                               <img 
//                                     src="https://images.unsplash.com/photo-1517429128955-67ff5c1e29da?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                     alt="Man looking through airplane window"
//                                     className="w-full h-80 object-cover"
//                               />
//                               <div className="absolute top-0 left-0 z-20 p-6 pt-20 md:p-12 max-w-md">
//                                     <h1 className="text-xl md:text-4xl font-bold text-white mb-4">
//                                           Explore the World Together <br/>with Premium travel
//                                     </h1>
//                                     <p className="text-gray-200 mb-8">
//                                           Get upto 50% Discount
//                                     </p>
//                                     <button className="flex items-center gap-5 bg-pink-800 hover:bg-pink-700 text-white px-4 py-2  rounded-full transition-colors">
//                                           Book Now
//                                           <ArrowRight size={20} />
//                                     </button>
//                               </div>
//                         </div>
//                         <SearchBar />
//                         <HowItWorks />
//                   </div>
//                   <Footer />
//             </div>
//       );
// }

// export default LandingPage;


import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ArrowRight } from 'lucide-react';
import SearchBar from './SearchBar';
import HowItWorks from './HowItsWork';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <main className="flex-grow">
        <div className="relative w-full overflow-hidden">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10" />
          
          {/* Hero Image */}
          <img 
            src="https://images.unsplash.com/photo-1517429128955-67ff5c1e29da?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Man looking through airplane window"
            className="w-full h-[80vh] lg:h-screen object-cover"
          />
          
          {/* Hero Content */}
          <div className="absolute top-0 left-0 z-20 w-full h-full flex items-center">
            <div className="container mx-auto px-6 lg:pl-5">
              <div className="max-w-xl">
                <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                  Explore the World Together <br/>
                  with Premium travel
                </h1>
                <p className="text-gray-200 text-lg lg:text-xl mb-8">
                  Get upto 50% Discount
                </p>
                <button className="flex items-center gap-3 bg-pink-800 hover:bg-pink-700 text-white px-6 py-3 rounded-full transition-colors group">
                  Book Now
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Flight Search Section */}
         
              
              
          
        </div>

        <SearchBar />
        {/* Content Section */}
        {/* <div className="container mx-auto px-4 lg:px-20 mt-32 lg:mt-40"> */}
          <HowItWorks />
        {/* </div> */}
      </main>

      <Footer />
    </div>
  );
}

export default LandingPage;
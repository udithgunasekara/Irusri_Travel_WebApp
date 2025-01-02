// import React from 'react';
// import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

// function Footer() {
//   return (
//     <>
//     <footer className="bg-zinc-950 text-gray-300 px-6 py-12">
//       {/* Description */}
//       <div className="mb-12 max-w-md">
//         <p className="text-sm leading-relaxed">
//           ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
//           incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
//           quis nostrud exercitation.
//         </p>
//       </div>

//       {/* Quick Links */}
//       <div className="mb-12">
//         <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
//         <ul className="space-y-3">
//           <li>
//             <a href="#" className="text-gray-300 hover:text-white transition-colors">
//               Submit Article
//             </a>
//           </li>
//           <li>
//             <a href="#" className="text-gray-300 hover:text-white transition-colors">
//               Blog
//             </a>
//           </li>
//           <li>
//             <a href="#" className="text-gray-300 hover:text-white transition-colors">
//               Freebies
//             </a>
//           </li>
//           <li>
//             <a href="#" className="text-gray-300 hover:text-white transition-colors">
//               Pricing
//             </a>
//           </li>
//         </ul>
//       </div>

//       {/* Contact Us */}
//       <div className="mb-5">
//         <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
//         <ul className="space-y-3">
//           <li className="text-gray-300">(888) 231 4522 258</li>
//           <li className="text-gray-300">
//             3129 Doctors Drive, Los Angeles<br />
//             California, USA
//           </li>
//         </ul>
//       </div>

//       {/* Social Links */}
//       <div>
//         <p className="text-sm mb-4">Let's stay connected</p>
//         <div className="flex gap-4">
//           <a href="#" className="text-gray-300 hover:text-white transition-colors">
//             <Facebook size={20} />
//           </a>
//           <a href="#" className="text-gray-300 hover:text-white transition-colors">
//             <Twitter size={20} />
//           </a>
//           <a href="#" className="text-gray-300 hover:text-white transition-colors">
//             <Instagram size={20} />
//           </a>
//           <a href="#" className="text-gray-300 hover:text-white transition-colors">
//             <Youtube size={20} />
//           </a>
//         </div>
         
//       </div>
//     </footer>
//      <div className="h-12 bg-pink-700 w-full" />
//      </>
//   );
// }

// export default Footer;




import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

function Footer() {
  const galleryImages = [
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1518762323612-e26f403122da?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1461237439866-5a557710c921?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1661962354730-cda54fa4f9f1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ];

  return (
    <>
      <footer className="bg-zinc-950 text-gray-300 px-6 lg:px-12 py-12 lg:py-20">
        <div className="lg:flex lg:justify-between lg:space-x-8 lg:max-w-7xl lg:mx-auto">
          {/* Description */}
          <div className="mb-12 lg:mb-0 max-w-md">
            <p className="text-sm leading-relaxed">
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation.
            </p>
            {/* Social Links - Moved inside description div for desktop */}
            <div className="hidden lg:block mt-8">
              <div className="flex gap-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-12 lg:mb-0">
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Submit Article
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Freebies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="mb-12 lg:mb-0">
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">(888) 231 4522 258</li>
              <li className="text-gray-300">
                3129 Doctors Drive, Los Angeles<br />
                California, USA
              </li>
            </ul>
          </div>

          {/* Gallery Showcase - Only visible on desktop */}
          <div className="hidden lg:block">
            <h3 className="text-white text-lg font-semibold mb-4">Gallery Showcase</h3>
            <div className="grid grid-cols-3 gap-2">
              {galleryImages.map((img, index) => (
                <img 
                  key={index}
                  src={img}
                  alt={`Gallery image ${index + 1}`}
                  className="w-24 h-24 object-cover rounded"
                />
              ))}
            </div>
          </div>

          {/* Social Links - Only visible on mobile */}
          <div className="lg:hidden">
            <p className="text-sm mb-4">Let's stay connected</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="h-12 bg-pink-700 w-full" />
    </>
  );
}

export default Footer;
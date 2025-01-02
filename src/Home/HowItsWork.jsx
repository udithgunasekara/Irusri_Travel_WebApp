import React from 'react';
import { Play } from 'lucide-react';

function HowItWorks() {
  const timelineItems = [
    { number: '1', text: 'Search Flights' },
    { number: '2', text: 'Fill Contact Form' },
    { number: '3', text: 'Choose Your Airline' },
    { number: '4', text: 'Booking in 10 Minutes' }
  ];

  const renderTimelineItem = ({ number, text }) => (
    <div key={number} className="relative flex items-center gap-6">
      <div className='text-gray-300 text-8xl font-extrabold'>{number}</div>
      <div className="-ml-12 w-12 h-12 center rounded-full bg-black mt-1" />
      <p className="text-pink-700 font-bold text-lg">{text}</p>
    </div>
  );

  return (
    <div className="lg:flex lg:items-center px-6 lg:px-20 py-12 lg:bg-contain bg-gray-50">
      {/* Header Section */}
      <div className='lg:flex lg:flex-col'>
      <div className='flex flex-col justify-center mb-8 lg:ml-10'>
        <h2 className="text-2xl lg:text-4xl font-bold text-center lg:text-start mb-3 text-gray-900">
          How it Works
        </h2>
        <p className='text-justify  lg:text-start text-gray-600 lg:pr-60'>
          These are the simple procedures that will make your purchasing process super eary and smooth. 
          And will help you to get your filigh easily
        </p>
      </div>

      {/* Timeline Section */}
      <div className="flex justify-center max-w-sm mx-auto mb-12">
        <div className="relative">
          <div className="space-y-8">
            {timelineItems.map(renderTimelineItem)}
          </div>
        </div>
      </div>
      </div>

      {/* Video Section */}
      <div className="max-w-lg mx-auto rounded-2xl overflow-hidden relative">
        <video width="320" height="240" controls className="w-full rounded-t-lg">
          <source 
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" 
            type="video/mp4" 
          />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default HowItWorks;

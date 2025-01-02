import React from 'react';
import { Plane, Calendar, Users, ArrowLeftRight } from 'lucide-react';

function SearchBar() {
      return (
            <div>
                  {/* Class Selection */}
                  <div className="flex justify-center relative z-30 -mt-8">
                        <button className="bg-pink-700 w-30 lg:w-80 text-white px-6 py-3 rounded-tl-2xl rounded-tr-2xl focus:outline-none font-semibold">
                              BUSINESS CLASS
                        </button>
                        <button className="bg-gray-500 w-30 lg:w-80 text-white px-6 py-3 rounded-tl-2xl rounded-tr-2xl focus:outline-none font-semibold">
                              FIRST CLASS
                        </button>
                  </div>

                  <div className="bg-white rounded-3xl p-6 shadow-lg mx-4 relative z-20">
                        {/* Trip Type */}
                        <div className="flex mb-6 gap-6 text-sm justify-center">
                              <div className="flex items-center bg-gray-300 rounded-lg">
                                    <button className="m-1 bg-white text-pink-700 font-bold px-8 py-2 rounded-lg focus:outline-none">
                                          One Way
                                    </button>
                                    <button className="bg-gray-300 text-gray-600 text-white px-6 py-3 rounded-2xl focus:outline-none font-semibold">
                                          Round Trip
                                    </button>
                                    <button className="bg-gray-300 text-gray-600 text-white px-6 py-3 rounded-2xl focus:outline-none font-semibold">
                                          Multicity
                                    </button>
                              </div>
                        </div>

                        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4 lg:space-y-0 space-y-4 lg:mb-6">
                              {/* Cities */}
                              <div className="flex items-center gap-2 lg:w-2/5">
                                    <div className="flex-1 border rounded-xl p-3">
                                          <div className="flex items-center gap-3">
                                                <Plane className="text-gray-400" size={20} />
                                                <div>
                                                      <div className="flex items-center gap-2">
                                                            <span className="text-sm text-gray-500">PK</span>
                                                            <span className="text-gray-800 font-medium">Pakistan</span>
                                                      </div>
                                                      <p className="text-xs text-gray-400">Departure City</p>
                                                </div>
                                          </div>
                                    </div>

                                    <div className="bg-pink-700 rounded-full p-2">
                                          <ArrowLeftRight className="text-white" size={20} />
                                    </div>

                                    <div className="flex-1 border rounded-xl p-3">
                                          <div className="flex items-center gap-3">
                                                <Plane className="text-gray-400" size={20} />
                                                <div>
                                                      <div className="flex items-center gap-2">
                                                            <span className="text-sm text-gray-500">DXB</span>
                                                            <span className="text-gray-800 font-medium">Dubai</span>
                                                      </div>
                                                      <p className="text-xs text-gray-400">Arrival City</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>

                              {/* Dates */}
                              <div className="flex gap-4 lg:w-1/3">
                                    <div className="flex-1 border rounded-xl p-3">
                                          <div className="flex items-center gap-3">
                                                <Calendar className="text-gray-400" size={20} />
                                                <div>
                                                      <div className="text-gray-800 font-medium">24 Sat</div>
                                                      <p className="text-xs text-gray-400">Feb 2024</p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="flex-1 border rounded-xl p-3">
                                          <div className="flex items-center gap-3">
                                                <Calendar className="text-gray-400" size={20} />
                                                <div>
                                                      <div className="text-gray-800 font-medium">24 Sat</div>
                                                      <p className="text-xs text-gray-400">Feb 2024</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>

                              {/* Passengers */}
                              <div className="lg:w-1/5 border rounded-xl p-3">
                                    <div className="flex items-center gap-3">
                                          <Users className="text-gray-400" size={20} />
                                          <div>
                                                <div className="text-gray-800 font-medium">2 Passengers</div>
                                                <p className="text-xs text-gray-400">Passengers</p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        
                  </div>
                   {/* Search Button for Desktop */}
                   <div className="flex justify-center -mt-6 relative z-30">
                        <button className="lg:flex lg:items-center hidden lg:block bg-pink-700 text-white px-6 py-4 -my-4 rounded-xl hover:bg-pink-600 transition-colors">
                              Search Flight
                        </button>
                   </div>
            </div>
      );
}

export default SearchBar;
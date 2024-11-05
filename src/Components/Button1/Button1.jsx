import React from 'react';

const Button1 = () => {
    return (
        <div>
            <div className="flex justify-start">
            <button className="relative inline-flex items-center justify-center px-5 py-2.5 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
              <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-[#4ca1af] rounded-full blur-md ease"></span>
              <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180">
                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-[#ba5370] rounded-full blur-md"></span>
                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-[#ba5370] rounded-full blur-md"></span>
              </span>
              <span className="relative text-white">BUTTON</span>
            </button>
          </div>
        </div>
    );
};

export default Button1;
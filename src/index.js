import React from "react";
import ReactDOM from "react-dom";
import './style.css';

const Index = () => {
  return ( 
  <div className="bg-white mx-auto max-w-sm shadow-lg m-10 rounded-lg overflow-hidden">
    <div className="sm:flex sm:items-center px-6 py-4">
      <img className="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://avatars3.githubusercontent.com/u/67109815?s=200&v=4" alt="Tailwind"/>
      <div className="text-center sm:text-left sm:flex-grow">
        <div className="mb-4">
          <p className="text-xl leading-tight m-2">Congrats!</p>
          <p className="text-sm leading-tight text-grey-dark">React, Tailwind, Webpack, Babel</p>
        </div>
        <div>
          <span className="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple">Ready To Use</span>
        </div>
      </div>
    </div>
  </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));

import React, { Component } from 'react';

let database = require('./referral-codes.json');
database = database.data;

class Cards extends Component {
  /* Trying to implement scrollIntoView
  scrollDiv = createRef();

  binance = () => {
    this.scrollDiv.current.scrollIntoView({ behavior: "smooth" });
  };
  */

  render() {
    /*
    let shortcutsList = database.map(item => {

      return(
        <div className="p-2">
          <button className="flex items-center p-2 bg-gray-800 hover:bg-gray-700 rounded-lg shadow-xs cursor-pointer text-gray-400 hover:text-gray-100">
            <img className="h-6 fill-current hover:text-gray-100 " src={require("../assets/img/" + item.img).default} alt={item.desc}/>
            <div>
              <p className="text-sm font-medium ml-2 ">
                {item.title}
              </p>
            </div>
          </button>
        </div>
      );
    })
    */

    let cardlist = database.map(item => {

      return(
          <div className="bg-gray-800 border border-gray-900 shadow-lg rounded-3xl p-4 m-4">
            <div className="flex-none sm:flex">

                <img src={require("../assets/img/" + item.img).default} alt={item.title} className="w-12 h-12 sm:w-16 sm:h-16 object-cover mb-5 ml-2 sm:m-5" />

                <div className="flex-auto sm:ml-5 justify-evenly">
                    <div className="flex items-center justify-between sm:mt-2">
                        <div className="flex items-center">
                            <div className="flex flex-col">
                                <div className="w-full flex-none text-lg text-gray-200 font-bold leading-none">{item.title}</div>
                                <div className="flex-auto text-gray-400 my-1">
                                    <span className="mr-3 ">{item.desc}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex py-2 text-sm text-gray-400">
                        <div className="flex-1 inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                            </svg>
                            <p className="font-bold">{item.offer}</p>
                        </div>
                        <div className="flex-1 inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                            </svg>
                            <p className="font-bold">{item.code}</p>
                        </div>
                        <a className="flex-no-shrink bg-blue-500 hover:bg-blue-400 px-5 ml-4 py-3 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider text-white rounded-full transition ease-in duration-300" href={item.link}>REGISTER</a>
                    </div>
                </div>
            </div>
        </div>
      );
  })

  return (
          <>
              {/*
              <section className="mx-auto p-6 sm:px-10 flex flex-wrap bg-gray-900">
                  { shortcutsList }
              </section>
              */}

               <div className="flex items-center justify-center min-h-screen bg-gray-900">
                   <div className="max-w-3xl w-full mx-auto z-10 my-10">
                      <div className="flex flex-col">
                              { cardlist }
                      </div>
                  </div>
              </div>
          </>
      );
  }
}
export default Cards;

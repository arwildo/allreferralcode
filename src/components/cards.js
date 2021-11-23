import React from 'react';

import Binance from './assets/img/binance.png';
import KuCoin from './assets/img/kucoin.png';

export default function(props) {
    return (
         <div class="flex items-center justify-center min-h-screen bg-gray-900">

             <div className="max-w-3xl w-full mx-auto z-10">
             	<div className="flex flex-col">
             		<div className="bg-gray-800 border border-gray-900 shadow-lg rounded-3xl p-4 m-4">
             			<div className="flex-none sm:flex">
             				<div className=" relative h-32 w-32   sm:mb-0 mb-3">
             					<img src={Binance} alt="Binance" className=" w-16 h-16 object-cover m-5 rounded-2xl" />
             				</div>

             				<div className="flex-auto sm:ml-5 justify-evenly">
             					<div className="flex items-center justify-between sm:mt-2">
             						<div className="flex items-center">
             							<div className="flex flex-col">
             								<div className="w-full flex-none text-lg text-gray-200 font-bold leading-none">Binance</div>
             								<div className="flex-auto text-gray-400 my-1">
             									<span className="mr-3 ">Use Binances referral code <b>CAM3VEZD</b> and save 10% on trading fees forever.</span>
             								</div>
             							</div>
             						</div>
             					</div>
                                <div className="flex pt-2  text-sm text-gray-400">
                                    <div className="flex-1 inline-flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                        </svg>
                                        <p className="font-bold">10%</p>
                                    </div>
                                    <div className="flex-1 inline-flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                        </svg>
                                        <p className="font-bold">CAM3VEZD</p>
                                    </div>
                                    <button  className="flex-no-shrink bg-blue-500 hover:bg-blue-400 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider text-white rounded-full transition ease-in duration-300">REGISTER</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

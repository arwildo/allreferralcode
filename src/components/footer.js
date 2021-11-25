import React from 'react';

import Logo from '../assets/img/logo.svg';

export default function(props) {
	function getYear() {
		return new Date().getFullYear();
	}

    return (
    <footer className="flex justify-center px-4 pt-12 text-gray-100 bg-gray-800">
      <div className="container pb-6">
        {/*
        <h1 className="text-center text-lg font-bold lg:text-2xl">
          Join 31,000+ other and never <br />miss out on space news.
        </h1>

        <div className="flex justify-center mt-6">
          <div className="bg-white rounded-lg">
            <div className="flex flex-wrap justify-between md:flex-row">
              <input type="email" className="m-1 p-2 appearance-none text-gray-700 text-sm focus:outline-none" placeholder="Enter your email" />
              <button className="w-full m-1 p-2 text-sm bg-gray-800 rounded-lg font-semibold uppercase lg:w-auto">subscribe</button>
            </div>
          </div>
        </div>

        */}
        <div className="flex-auto text-gray-600 my-1 text-justify">
          <span className="mr-3 text-xs">
            Binance referral code, Binance Futures referral code, KuCoin referral code, FTX referral code, Gate.io referral code, Tokocrypto referral code, Indodax referral code, Zipmex referral code, BetU Fantasy referral code, Binance discount code, Binance Futures discount code, KuCoin discount code, FTX discount code, Gate.io discount code, Tokocrypto discount code, Indodax discount code, Zipmex discount code, BetU Fantasy discount code, Binance trading fee discount, Binance Futures trading fee discount, KuCoin trading fee discount, FTX trading fee discount, Gate.io trading fee discount, Tokocrypto trading fee discount, Indodax trading fee discount, Zipmex trading fee discount, BetU Fantasy trading fee discount, Binance cashback code, Binance Futures cashback code, KuCoin cashback code, FTX cashback code, Gate.io cashback code, Tokocrypto cashback code, Indodax cashback code, Zipmex cashback code, BetU Fantasy cashback code, Binance promo code, Binance Futures promo code, KuCoin promo code, FTX promo code, Gate.io promo code, Tokocrypto promo code, Indodax promo code, Zipmex promo code, BetU Fantasy promo code, Binance bonus code Binance Futures bonus code KuCoin bonus code FTX bonus code Gate.io bonus code Tokocrypto bonus code Indodax bonus code Zipmex bonus code BetU Fantasy bonus code Binance referral link, Binance Futures referral link, KuCoin referral link, FTX referral link, Gate.io referral link, Tokocrypto referral link, Indodax referral link, Zipmex referral link, BetU Fantasy referral link.
          </span>
        </div>
        <hr className="h-px mt-6 bg-gray-700 border-none" />

        <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
          <div>
            <a href="https://arwildo.com/allreferralcode/" className="text-xl font-bold">
              <img className="w-8" src={Logo} />
            </a>
          </div>
          <div>
            <p className="text-sm m-3 text-gray-400">
              <a href="https://arwildo.com">Arwildo</a> &copy; {getYear()}
            </p>
          </div>
            <div className="flex mt-4 md:m-0">
              <div className="-mx-4">
                {/*
                <a className="cursor-pointer px-4 text-sm" onClick={props.scrollToAbout}>About</a>
                <a className="cursor-pointer px-4 text-sm" onClick={props.scrollToNews}>News</a>
                */}
                <a href="https://arwildo.com" className="px-4 text-sm text-gray-400" target="_blank">Contact</a>
              </div>
            </div>
        </div>
      </div>
    </footer>
  )
}

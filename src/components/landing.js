import React from 'react';

import Binance from './assets/img/binance.png';
import KuCoin from './assets/img/kucoin.png';

export default function(props) {
    return (
        <div class="flex items-center justify-center min-h-screen bg-gray-900">
            <div class="col-span-12">
                <div class="overflow-auto lg:overflow-visible">

                    <table class="table text-gray-400 border-separate space-y-6 text-sm">

                        <thead class="bg-gray-800 text-gray-500">
                            <tr>
                                <th class="p-3">Exchange</th>
                                <th class="p-3 text-left">Description</th>
                                <th class="p-3 text-left">Referral Code</th>
                                <th class="p-3 text-left">Link</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr class="bg-gray-800">
                                <td class="p-3">
                                    <div class="flex align-items-center">
                                        <img class="h-12 w-12  object-cover" src={Binance} alt="Binance" />
                                        <div class="ml-3">
                                            <div class="m-2 text-lg">Binance</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="p-3">
                                    Use Binances referral code <b>CAM3VEZD</b> and save 10% on trading fees for life.
                                </td>
                                <td class="p-3 font-bold">
                                    CAM3VEZD
                                </td>
                                <td class="p-3 ">
                                    <a href="#" class="text-gray-400 hover:text-gray-100 mr-2">
                                        <i class="material-icons-outlined text-base">Link</i>
                                    </a>
                                </td>
                            </tr>
                            <tr class="bg-gray-800">
                                <td class="p-3">
                                    <div class="flex align-items-center">
                                        <img class="h-12 w-12  object-cover" src={KuCoin} alt="unsplash image" />
                                        <div class="ml-3">
                                            <div class="m-2 text-lg">KuCoin</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="p-3">
                                    Use KuCoin referral code <b>r3WVD7Y</b> and be part of KuCoin's rewarding <br/>
                                    trading fee bonus program with maximum 40% bonus.
                                </td>
                                <td class="p-3 font-bold">
                                    r3WVD7Y
                                </td>
                                <td class="p-3">
                                    <a href="#" class="text-gray-400 hover:text-gray-100 mr-2">
                                        <i class="material-icons-outlined text-base">Link</i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>

                    </table>

                </div>
            </div>
        </div>
   );
}

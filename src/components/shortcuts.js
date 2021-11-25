import React, { Component } from 'react';

let database = require('./referral-codes.json');
database = database.data;

class Shortcuts extends Component {

  render() {

    let shortcutsList = database.map(item => {

        return(

            <div className="p-2">
                <a href="#" className="flex items-center p-2 bg-gray-800 hover:bg-gray-700 rounded-lg shadow-xs cursor-pointer text-gray-400 hover:text-gray-100">
                    <img className="h-6 fill-current hover:text-gray-100 " src={require("../assets/img/" + item.img).default} alt={item.desc}/>
                    <div>
                      <p className="text-sm font-medium ml-2 ">
                        {item.title}
                      </p>
                    </div>
                </a>
            </div>

        );
    })

    return (
            <section className="mx-auto p-6 flex flex-wrap bg-gray-900">
                { shortcutsList }
            </section>
        );
    }
}
export default Shortcuts;

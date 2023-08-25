import React from 'react';
import Leftmenu from './left'
import Middlemenu from './middlemenu'
import Middlecreatetweet from './middlecreatetweet'
import Tweets from './tweets'
import Rightmenu from './rightmenu'



export default function Userhomepage() {

    



    return (
        <div className="bg-blue-800 min-h-screen">
            <div className="flex">
                <div className="w-2/5 text-white h-12 pl-32 py-4 h-auto">
                    <Leftmenu />
                </div>
                <div className="w-3/5 border border-gray-600 h-auto border-t-0">
                    <Middlemenu />
                    <hr className="border-gray-600"></hr>
                    <Middlecreatetweet />
                    <Tweets />
                </div>
                <div className="w-2/5 h-12">
                    <Rightmenu />
                </div>
            </div>
        </div>


    )
}

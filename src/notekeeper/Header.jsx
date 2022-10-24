import React from 'react'
import { Link } from 'react-router-dom'
function Header({ searchText }) {


    return (

        <nav className="p-4 shadow-sm flex justify-between items-center font-mono fixed-top ">
            <div class="inline-block text-lg">
                <h1 className='font-bold text-xl'>NoteKeeper</h1>
            </div>
            <div class="inline-block rounded-lg top-auto text-teal-800 float-right  px-2 bg-transparent">
                <input
                    type="text"
                    placeholder="search notes..."
                    className="border border-gray-300 rounded-lg py-1 text-center px-2 text-white focus:border-gray-600 focus:text-gray-500 outline-none bg-transparent"
                    onChange={(e) => {
                        searchText(e.target.value)
                    }}
                />
            </div>
            <div class=" text-teal-800 float-right  mx-1 px-2">
                <button
                    className="bg-green-500 text-sm font-bold px-2 py-1 rounded-lg text-white hover:bg-green-600"
                    type="button"

                >
                    <Link to='/create'>Add Note</Link>
                </button>


            </div>

        </nav>

    )
}

export default Header
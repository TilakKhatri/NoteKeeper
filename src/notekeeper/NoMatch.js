import React from 'react'
import { Link } from 'react-router-dom'
import "./errorPage.css"

function NoMatch() {
    return (
        <div className='flex-col mx-auto text-center ' style={{ height: "100vh" }}>

            <h1 className='text-2xl font-bold'>404</h1>
            <div className="cloak__wrapper">
                <div className="cloak__container">
                    <div className="cloak"></div>
                </div>
            </div>
            <div className="my-12 text-xl flex-col items-center justify-center text-center">
                <h2>We can't find that page</h2>
                <p>We're fairly sure that page used to be here, but seems to have gone missing. We do apologise on it's behalf.</p>

                <button>
                    <span className="material-symbols-outlined text-gray-900 text-4xl cursor-pointer fixed right-4 top-6"

                    >
                        <Link to='/'>home</Link>
                    </span>
                </button>

            </div>
        </div>
    )
}

export default NoMatch
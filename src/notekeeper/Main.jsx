import React from 'react'
import { useState } from 'react'
import Header from './Header'
import Note from './Note'
import Footer from './Footer'

export default function Main() {
    const [text, setText] = useState("");
    function searchText(text) {
        setText(text);
    }
    return (
        <div>
            <Header searchText={searchText} />
            <Note searchtext={text} />
            <div className='text-center mb-0 '>
                <Footer />
            </div>
        </div>
    )
}

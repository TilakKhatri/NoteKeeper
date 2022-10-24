import React from 'react'

var currDate = new Date();

function Footer() {
    return (
        <footer className='mt-4 '>
            <p className='font-mono'>copyright belongs to fontsize{" " + currDate.getFullYear()}</p>
        </footer>
    )
}

export default Footer;
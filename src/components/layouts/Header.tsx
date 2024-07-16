import React from 'react'

const Header = () => {
    return (
        <div className='px-7 py-5 bg-white/10 flex items-center justify-between fixed top-0 left-0 w-full'>
            <div className='font-bold text-lg'>
                Logo
            </div>

            <div className='text-sm font-bold'>
                {/* <button className='bg-white/10 px-3 py-2 rounded hover:bg-white/5 transition'>
                    Menu
                </button> */}
            </div>
        </div>
    )
}

export default Header
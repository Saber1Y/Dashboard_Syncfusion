import React, { useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { CiSettings } from "react-icons/ci";
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import './App.css'

const App = () => {
    return (
        <div className=''>
            <BrowserRouter>
                <div className='flex relative dark:main-dark-bg'>
                    <div className='fixed right-4 bottom-4'>
                        <TooltipComponent content="settings" position="Top" style={{ zIndex: '1000' }}>
                            <button type='button' className='text-4xl p-3 hover:bg-shadow-xl hover:bg-light-gray text-white' style={{ background: 'black', borderRadius: '50px' }}>
                                <CiSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App

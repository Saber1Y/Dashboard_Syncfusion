import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CiSettings } from "react-icons/ci";
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { Navbar, Footer, Themesettings, Sidebar } from './components/index';
import { Orders, Stacked, Pyramid, Area, Financial, Pie, Bar } from './pages/index';
import { useStateContext } from './context/ContextProvider';

import './App.css'

const App = () => {

    const { activeMenu } = useStateContext();

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
                {
                    activeMenu ? (
                        <div className="w-72 fixed sidebar dark:bg-secondary-dark bg-white">
                            Sidebar
                        </div>
                    ) : (
                        <div className='w-72 fixed sidebar dark:bg-secondary-dark bg-white'>
                            <Sidebar />
                        </div>
                    )
                }

                <div className={
                    `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`
                }>
                    <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                        navbar
                    </div>

                    <div>
                        <Routes>
                            <Route path='/' element="Ecommerce" />
                            <Route path='/ecommerce' element="Ecommerce" />

                            <Route path='orders' element="Orders" />
                            <Route path='employees' element="Employees" />
                            <Route path='customers' element="Customers" />

                            <Route path="/line" element="line" />
                            <Route path="/area" element="Area" />
                            <Route path="/bar" element="Bar" />
                            <Route path="/pie" element="Pie" />
                            <Route path="/financial" element="Financial" />
                            {/* <Route path="/color-mapping" element="line" /> */}
                            <Route path="/pyramid" element="Pyramid" />
                            <Route path="/stacked" element="Stacked" />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App

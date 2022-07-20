import React, { useState } from 'react'
import '../Assets/Style/sidebar.scss'
import sidebarContent from '../Content'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { HiOutlineLightBulb } from 'react-icons/hi'
import darkLogo from '../Assets/images/logo-dark.png'
import lightLogo from '../Assets/images/logo-light.png'
import Avatar from './Avatar'

const theme = [
    {logo: <HiOutlineLightBulb className='icon' />, title: "Theme"},
]

const Sidebar = () => {
    const [open, setOpen] = useState(true)

    const handleOpenStatus = () => {
        setOpen(prevState => !prevState)
    }

    return (
        <div className={`sidebar ${open? 'open':'close'}`}>
            <div className={`content ${open? 'open':'close'}`}>
                <div className='top'>
                    <div className='logo'>
                        <img  src={darkLogo} />
                    </div>

                    {sidebarContent.map((section) => {
                        return (
                            <div className='section'>
                                <h5 className='section-title'>{open? section.sectionName.open: section.sectionName.close}</h5>
                                {section.listItems.map((item) => {
                                    return (
                                    <a href='#' className={`list-item ${open? 'open':'close'}`}>
                                        <div className='list-item icon'>
                                            {item.logo}
                                        </div>
                                        <div className='list-item title'>
                                            {item.title}
                                        </div>
                                    </a>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
                <div className='bottom'>
                    {theme.map((item) => {
                        return (
                        <a href='#' className={`list-item ${open? 'open':'close'}`}>
                            <div className='list-item icon'>
                                {item.logo}
                            </div>
                            <div className='list-item title'>
                                {item.title}
                            </div>
                        </a>
                        )
                    })}
                    <Avatar open={open} />
                </div>
            </div>


            <div className='arrow-indicator'>
                {open? <IoIosArrowBack 
                onClick={handleOpenStatus}
                className='icon'
                /> 
                : <IoIosArrowForward 
                onClick={handleOpenStatus}
                className='icon'
                />
                }
            </div>
        </div>
    )
}

export default Sidebar

import React, { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import '../Assets/Style/sidebar.scss'
import '../Assets/Style/sidebar-theme.scss'
import sidebarContent from '../Utils/Content'
import { HiOutlineLightBulb } from 'react-icons/hi'
import darkLogo from '../Assets/images/logo-dark.png'
import lightLogo from '../Assets/images/logo-light.png'
import Avatar from './Avatar'
import ThemeContext from '../Context/ThemeContext'
import ArrowIndicator from './ArrowIndicator'

const theme = [
    {logo: <HiOutlineLightBulb className='icon' />, title: {dark: "Light Mode", light: "Dark Mode"}},
]

const Sidebar = () => {
    const [open, setOpen] = useState(true)
    const {setThemeStatus, themeStatus} = useContext(ThemeContext)

    const handleOpenStatus = () => {
        setOpen(prevState => !prevState)
    }

    const handleThemeChanging = () => {
        setThemeStatus(prevState => prevState === 'light'?'dark': 'light')
    }

    return (
        <div className={`sidebar ${open? 'open':'close'} ${themeStatus === 'light'? 'light': 'dark'}`}>
            <div className={`content ${open? 'open':'close'}`}>
                <div className='top'>
                    <div className='logo'>
                        <img  src={themeStatus === 'light'? lightLogo : darkLogo} />
                    </div>

                    {sidebarContent.map((section) => {
                        return (
                            <div className='section'>
                                <h5 className='section-title'>{open? section.sectionName.open: section.sectionName.close}</h5>
                                {section.listItems.map((item) => {
                                    return (
                                    <a 
                                    // key={uuidv4()}
                                    href='#' 
                                    className={`list-item ${open? 'open':'close'}`}
                                    >
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
                <div className='bottom section'>
                    
                    {theme.map((item) => {
                        return (
                        <a 
                        // key={uuidv4()}
                        href='#' 
                        className={`list-item ${open? 'open':'close'}`}
                        onClick={handleThemeChanging}
                        >
                            <div className='list-item icon'>
                                {item.logo}
                            </div>
                            <div className='list-item title'>
                                {themeStatus === 'light'? item.title.light : item.title.dark }
                            </div>
                        </a>
                        )
                    })}
                    <Avatar open={open} />
                </div>
            </div>
            <ArrowIndicator open={open} handleOpenStatus={handleOpenStatus} />
        </div>
    )
}

export default Sidebar

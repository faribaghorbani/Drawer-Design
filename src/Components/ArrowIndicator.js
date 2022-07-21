import React, { useContext } from 'react'
import * as ReactDOM from 'react-dom'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import ThemeContext from '../Context/ThemeContext'


const portalDOM = document.getElementById('portal')

const ArrowIndicator = ({open, handleOpenStatus}) => {
    const {themeStatus} = useContext(ThemeContext)
    return ReactDOM.createPortal (
        <div 
        className={`arrow-indicator ${open? 'open': 'close'} ${themeStatus==='light'? 'light': 'dark'}`}>
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
    ,portalDOM )
}

export default ArrowIndicator

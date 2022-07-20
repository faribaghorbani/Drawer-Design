import React, { useState } from 'react'
import '../Assets/Style/sidebar.scss'

import { GrDocumentPerformance } from 'react-icons/gr'
import { MdOutlineSpaceDashboard, MdEventNote } from 'react-icons/md'
import { RiHotspotLine } from 'react-icons/ri'
import { FiThumbsUp } from 'react-icons/fi'
import { BiCheckShield } from 'react-icons/bi'
import { AiOutlineInbox } from 'react-icons/ai'
import { VscPaintcan } from 'react-icons/vsc'

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const analytics = [
    {logo: <MdOutlineSpaceDashboard className='icon' />, title: "Dashboard"},
    {logo: <GrDocumentPerformance className='icon'/>, title: "Performance"}
]

const contents = [
    {logo: <MdEventNote className='icon' />, title: "Guides"},
    {logo: <RiHotspotLine className='icon'/>, title: "Hotspots"},
    {logo: <BiCheckShield className='icon'/>, title: "Checklists"},
    {logo: <FiThumbsUp className='icon'/>, title: "NPS"}
]

const customizations = [
    {logo: <AiOutlineInbox className='icon' />, title: "Segments"},
    {logo: <VscPaintcan className='icon'/>, title: "Themes"}
]

const Sidebar = () => {
    const [open, setOpen] = useState(true)

    const handleOpenStatus = () => {
        setOpen(prevState => !prevState)
    }

    return (
        <div className='sidebar' style={{ width: open? '300px':'50px' }}>
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

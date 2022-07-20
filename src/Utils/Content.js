import { GrDocumentPerformance } from 'react-icons/gr'
import { MdOutlineSpaceDashboard, MdEventNote } from 'react-icons/md'
import { RiHotspotLine } from 'react-icons/ri'
import { FiThumbsUp } from 'react-icons/fi'
import { BiCheckShield } from 'react-icons/bi'
import { AiOutlineInbox } from 'react-icons/ai'
import { VscPaintcan } from 'react-icons/vsc'
import { HiTrendingUp } from 'react-icons/hi'

const sidebarContent = [
    {
        sectionName: {open: 'ANALYTICS', close: 'ANALYTICS'},
        listItems: [
            {logo: <MdOutlineSpaceDashboard className='icon' />, title: "Dashboard"},
            {logo: <HiTrendingUp className='icon'/>, title: "Performance"}
        ]
    },
    {
        sectionName: {open: 'CONTENTS', close: 'CONTENTS'},
        listItems: [
            {logo: <MdEventNote className='icon' />, title: "Guides"},
            {logo: <RiHotspotLine className='icon'/>, title: "Hotspots"},
            {logo: <BiCheckShield className='icon'/>, title: "Checklists"},
            {logo: <FiThumbsUp className='icon'/>, title: "NPS"}
        ]
    },
    {
        sectionName: {open: 'CUSTOMIZATIONS', close: 'CUSTOM.'},
        listItems: [
            {logo: <AiOutlineInbox className='icon' />, title: "Segments"},
            {logo: <VscPaintcan className='icon'/>, title: "Themes"}
        ]
    }

]

export default sidebarContent;
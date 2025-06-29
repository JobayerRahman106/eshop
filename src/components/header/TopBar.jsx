import React from 'react'
import Container from '../commonLayouts/Container'
import { Link } from 'react-router-dom'
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";


const TopBar = () => {
  return (
    <div className='border-b border-[#303030] border-solid py-[22px]'>
      <Container>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-[50px] font-[Montserrat] font-normal text-sm relative after:content-[""] after:absolute after:w-[1px] after:h-[32px] after:bg-[#BFBFBF] after:left-[55%] after:top-[50%] after:-translate-y-1/2'>
              <Link to="#" target='-blank' className='flex items-center gap-2'>
                <CiLocationOn />
                Laxmipur,Gaibandha 
               </Link>
              <Link to="tel:+8801707607518" className='flex items-center gap-2'>
                <MdOutlineLocalPhone />
                +8801707-607518 
              </Link>
          </div>
          <div>right</div>
        </div>
      </Container>
    </div> 
  )
}

export default TopBar
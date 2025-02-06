import React from 'react'
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHeaderContent from '../../components/PageHeaderContent';

const Portfolio =() => {
  return (
    <section id='portfolio' className='portfolio'>

    <PageHeaderContent headerText='Portfolio' icon={<BsInfoCircleFill size={40}/>}/>

  </section>
)
}
export default Portfolio;
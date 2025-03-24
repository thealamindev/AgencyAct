import React from 'react'
import Container from './Container'
import Heading from './Heading'
import WebIcon from './icons/WebIcon'



const Service = () => {
  return (
    <>
        <div className="py-[100px]">
            <Container>
                <Heading text={"Our Services"} as="h3" className={"font-inter text-menuC font-bold text-[40px] text-center"}/>
                <p className={"font-inter text-menuC text-[16px] text-center leading-7 opacity-70 w-[542px] m-auto"}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
               
            </Container>
        </div>
    </> 
  )
}

export default Service
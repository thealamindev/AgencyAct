import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Heading from './Heading'
import Button from './Button'
import Image from './Image'
import Cartoon from '../assets/pickar.png'

const Banner = () => {
  return (
   <>
   <div className="bg-primary pt-[180px] pb-[240px]">
        <Container>
            <Flex className={'justify-between items-center'}>
                <div className="">
                    <Heading text={"We Are Digital Product Design Agency"}/>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <Button className={"bg-white text-primary"} btnText={"Get Started"} />
                </div>
                <div className="">
                    <Image imgSrc={Cartoon}/>
                </div>
            </Flex>
        </Container>
   </div>
   </>
  )
}

export default Banner
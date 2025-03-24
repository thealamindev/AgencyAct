import React from 'react'
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "../../assets/logo.png";
import Button from "../Button";
const Header = () => {
  return (
    <>
     {/* Header Part Start  */}
     <div className="py-4">
        <Container>
          <Flex className={"items-center justify-between"}>
            <div className="">
              <Image imgSrc={Logo} imgAlt={"Logo"} />
            </div>
            <div className="">
              <ul>
                <li className="inline-block px-4 font-medium text-lg font-inter text-menuC hover:text-primary">
                  Home
                </li>
                <li className="inline-block px-4 font-medium text-lg font-inter text-menuC hover:text-primary">
                  About
                </li>
                <li className="inline-block px-4 font-medium text-lg font-inter text-menuC hover:text-primary">
                  Service
                </li>
                <li className="inline-block px-4 font-medium text-lg font-inter text-menuC hover:text-primary">
                  Blog
                </li>
                <li className="inline-block px-4 font-medium text-lg font-inter text-menuC hover:text-primary">
                  Contact
                </li>
              </ul>
            </div>
            <div className="">
              <Button btnText={"Contact Us"} className={"bg-primary text-white"}/>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Header Part End  */}
    </>
  )
}

export default Header
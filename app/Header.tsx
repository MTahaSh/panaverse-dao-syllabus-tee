import { Box, color, Flex, Image, Link } from '@chakra-ui/react'
import React from 'react'
import { HStack } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { FaDiscord, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"
import { Center } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import {MdFacebook} from "react-icons/md"
import SocialMedia from './SocialMedia'




export default function Header() {
  return (
    <Box bg={"transparent"}>
        <Flex  px={"0"} py={"5"} w={"100%"} align={"center"} justifyContent={"space-around"} >

        {/* Logo */}
        <Link href='/'><Image src='/red-p-logo-text_dao_croped.png' h={"67px"} ></Image></Link>



        <HStack  align={"center"} justifyContent={"end"} >
        <ButtonGroup display={{lg:"reset",md:"none",base:"none"}} variant={"transparent"}  size={"xs"}>

         <SocialMedia/> 
         
        </ButtonGroup>
        </HStack>


        </Flex>

    </Box>
  )
}

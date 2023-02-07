import { Box, Flex, Link } from '@chakra-ui/react'
import React from 'react'
import { HStack } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { FaDiscord, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"
import { Center } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import {MdFacebook} from "react-icons/md"

export default function SocialMedia() {
  return (
    <Box>
        <Flex>
        <Link href='https://www.facebook.com/groups/panaverse' target={"_blank"}><Button _hover={{bg:"#93BFCF",color:"white"}} fontSize={"16px"} color={"#6096B4"} bgColor={"rgba(255,255,255,.5)"} w={"40px"} h={"40px"} borderRadius={"50%"} fontFamily={"18px"} mr={"5px"} colorScheme={"facebook"} padding={"20px"} ><Icon as={MdFacebook}/></Button></Link>

<Link href='https://twitter.com/Panaverse_edu' target={"_blank"}><Button _hover={{bg:"#93BFCF",color:"white"}} fontSize={"16px"} color={"#6096B4"} bgColor={"rgba(255,255,255,.5)"} w={"40px"} h={"40px"} borderRadius={"50%"} fontFamily={"18px"} mr={"5px"} colorScheme={"twitter"} padding={"20px"}  ><Icon as={FaTwitter}/></Button></Link>

<Link href='https://www.youtube.com/@panaverse' target={"_blank"}><Button _hover={{bg:"#93BFCF",color:"white"}} fontSize={"16px"} color={"#6096B4"} bgColor={"rgba(255,255,255,.5)"} w={"40px"} h={"40px"} borderRadius={"50%"} fontFamily={"18px"} mr={"5px"} colorScheme={"youtube"} padding={"20px"}><Icon as={FaYoutube}/></Button></Link>

<Link href='https://discord.com/invite/jEDHUZcD' target={"_blank"}><Button _hover={{bg:"#93BFCF",color:"white"}} fontSize={"16px"} color={"#6096B4"} bgColor={"rgba(255,255,255,.5)"} w={"40px"} h={"40px"} borderRadius={"50%"} fontFamily={"18px"} mr={"5px"} colorScheme={"Discord"} padding={"20px"} ><Icon as={FaDiscord}/></Button></Link>

<Link href='https://github.com/panaverse' target={"_blank"}><Button _hover={{bg:"#93BFCF",color:"white"}} fontSize={"16px"} color={"#6096B4"} bgColor={"rgba(255,255,255,.5)"} w={"40px"} h={"40px"} borderRadius={"50%"} fontFamily={"18px"} mr={"5px"} colorScheme={"Github"} padding={"20px"} ><Icon as={FaGithub}/></Button></Link>
</Flex>
    </Box>
  )
}

import { Box, Button, Flex, HStack, Image, Link, Text } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { Img } from '@chakra-ui/react'
import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { PhoneIcon } from '@chakra-ui/icons'
import { MdEmail } from 'react-icons/md'
import SocialMedia from './SocialMedia'
import { useRouter } from 'next/navigation'


function OnClickChange() : string
{

    const Var:string = "https://portal.piaic.org/signup"

    return(Var)
} 


export default function Footer() {
  
  const router = useRouter();
 
  return (
    <Box bgColor={"#FF1E1E"}>
        <Flex w={"100%"} alignItems={"center"} textAlign={"center"} justifyContent={"space-between "} flexDirection={{lg:"row",md:"column",base:"column"}}>

            <Box mb={{lg:"0px",md:"40px",base:"40px"}}>
            <Link onClick={()=>{router.push('/')}} ><Image src='/red-p-logo-text_dao.png' h={{lg:"250px",md:"200px",base:"200px"}}></Image></Link>
            </Box>
               
            <Box display={"flex"} fontWeight={"bold"} color={"white"} mb={{lg:"0px",md:"50px",base:"50px"}} flexDirection={{lg:"row",md:"column",base:"column"}} textAlign={"center"} lineHeight={{lg:"30px",md:"40px",base:"40px"}}>
                <Link href='https://www.piaic.org/' target={"_blank"} mr={{lg:"50px",md:"0px",base:"0px"}}>Piaic</Link>
                <Link href='#' mr={{lg:"50px",md:"0px",base:"0px"}}>Terms of Service</Link>
                <Link href='#' mr={{lg:"50px",md:"0px",base:"0px"}}>Privacy Policy</Link>
            </Box>

            <Box color={"white"} lineHeight={"40px"}>
            <HStack ml={{lg:"0px",md:"20px",base:"20px"}} >
            <Icon as={PhoneIcon}/>
            <Text>+92 341 4241484</Text>
            </HStack>

            <HStack ml={{lg:"0px",md:"20px",base:"20px"}}>
            <Icon as={MdEmail}/>
            <Text>loremipsum@gmail.com</Text>
            </HStack>
            <Button mt={"50px"} mb={{lg:"0px",md:"50px",base:"50px"}} ml={{lg:"0px",md:"5px",base:"5px"}} _hover={{bg:"rgba(0,0,0,0.6)"}} color={"white"} bgColor={"#D61355"}><Link _hover={{textDecoration:"none"}} target={"_blank"} href={OnClickChange()}>Enroll Now</Link></Button>

            </Box>


            <Box mb={"40px"} display={{lg:"none",md:"reset",base:"reset"}}>
              <SocialMedia/>
            </Box>

        </Flex>


    </Box>
  )
}

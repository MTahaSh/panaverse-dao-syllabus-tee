import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import CommonDetail from '../CommonDetail'

export default function MetaverseDetail() {
  return (
    <Box >
    <CommonDetail/>
    
    <Box fontFamily={"sans-serif"} pb={"20px"} fontSize={"20px"} textAlign={"left"} px={"20px"}>
    <Heading p={"50px"} pb={"20px"} textAlign={"center"}>Quarter IV</Heading>
    <Text fontSize={"25px"} textAlign={"center"}>NPA-351: CCNA 200-301 Certification</Text>
    <Text fontSize={"25px"}  textAlign={"center"} mb={"35px"}>Duration: 13 Weeks</Text>
    <Heading fontFamily={"sans-serif"} fontSize={"30px"} py={"50px"} pb={"20px"} textAlign={"left"}>Course Description:</Heading>
    <Text textAlign={"left"}  mb={"35px"} fontSize={"20px"}>This course will focus on learning the basics of the networking and preparing for the new Cisco Certified Network Associate (CCNA) exam. This comprehensive course focuses on the solutions and technologies needed to implement and administer a broad range of modern networking and IT infrastructure.
</Text>


<Heading p={"50px"} pb={"20px"} textAlign={"center"}>Quarter V</Heading>
<Text fontSize={"25px"} textAlign={"center"}>NPA-361: Network Programmability and Automation</Text>
<Text fontSize={"25px"}  textAlign={"center"} mb={"35px"}>Duration: 13 Weeks</Text>

<Heading fontFamily={"sans-serif"} fontSize={"30px"} py={"50px"} pb={"20px"} textAlign={"left"}>Course Description: </Heading>
<Text textAlign={"left"}  mb={"35px"} fontSize={"20px"}>Traditional network management techniques can't be effectively automated and don't scale well. By implementing network programmability based on Application Programming Interfaces, this course will assist in overcoming issues of the future and help you develop the skills required for the Next-Generation Network Engineer.</Text>


</Box>
    </Box>
  )
}

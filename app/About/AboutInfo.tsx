import { Avatar, Badge, Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function AboutInfo() {
  return (
    <Box bgColor={"#f8f8f8"} py={6} px={"5"} fontSize={"20px"}>

    <Heading fontFamily={"sans-serif"} fontSize={"40px"} mt={"15px"} pb={"40px"}>About Us</Heading>

    <Box fontFamily={"sans-serif"}>
        <Heading fontFamily={"sans-serif"}  mb={"35px"}>The Program in a Nutshell: Earn While You Learn</Heading>
        <Text fontFamily={"sans-serif"}>In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program's beginning. It resembles a cross between a corporate venture and an educational project.</Text>
        
        <Text fontFamily={"sans-serif"}><br/>This curriculum is intended for beginners who want to learn software development from the ground up. The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.
        </Text>
    </Box>


    <Box fontFamily={"sans-serif"} m={"50px"}>
        <Flex justifyContent={"center"}>
    <Flex alignItems={"center"} mr={"55px"}>
  <Avatar src='/drzia.jpeg' />
  <Box ml='3'>
    <Text fontWeight='bold'>
      Zia Khan
      <Badge ml='1' colorScheme='green'>
        Lead
      </Badge>
    </Text>
    
  </Box>
</Flex>

<Flex alignItems={"center"}>
  <Avatar src='/sirdaniyal.jpeg' />
  <Box ml='3'>
    <Text fontWeight='bold'>
      Daniyal Nagori
      <Badge ml='1' colorScheme='green'>
        CEO
      </Badge>
    </Text>
  </Box>
</Flex>
</Flex>
    </Box>

    </Box>
  )
}

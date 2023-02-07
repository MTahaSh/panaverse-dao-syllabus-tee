import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import CommonDetail from '../CommonDetail'

export default function MetaverseDetail() {
  return (
    <Box >
    <CommonDetail/>
    
    <Box fontFamily={"sans-serif"} pb={"20px"} fontSize={"20px"} textAlign={"left"} px={"20px"}>
    <Heading p={"50px"} pb={"20px"} textAlign={"center"}>Quarter IV</Heading>
    <Text fontSize={"25px"} textAlign={"center"}>AC-351: Ambient Computing with Voice Assistants and Matter Devices</Text>
    <Text fontSize={"25px"}  textAlign={"center"} mb={"35px"}>Duration: 13 Weeks</Text>
    <Heading fontFamily={"sans-serif"} fontSize={"30px"} py={"50px"} pb={"20px"} textAlign={"left"}>Course Description:</Heading>
    <Text textAlign={"left"}  mb={"35px"} fontSize={"20px"}>Ambient computing, also commonly referred to as ubiquitous computing, is the concept of blending computing power into our everyday lives in a way that is embedded into our surroundings - invisible but useful. In a multi-device world, people don't want to spend their life fussing with technology. An ambient approach gets the tech out of your way so you can live your life while getting the help you need. It doesn't matter what device you're using, what context you're in, whether you're talking, typing, or tapping. The technology in your life works together seamlessly. Ambient computing uses all aspects of modern-day technology, including voice assistants, artificial intelligence, sensors, connectivity, cloud computing and more.

If you were thinking that the IoT and ambient computing sound a lot alike, you aren't wrong; the two concepts are intertwined. IoT refers to the vast array of devices that connect to the internet to optimize their functionality, like smart sensors and smart speakers: ambient computing builds on that. Ambient computing focuses on the interaction between these devices once they are connected.

Matter, the next-generation smart home standard, solves many smart home pain points while bringing all our IoT devices together. Some of the biggest tech companies are working together to make Matter a unified protocol for future smart homes. These companies include Apple, Amazon, and Google. This means Apple HomeKit, Amazon Alexa, Samsung SmartThings, Google Nest, and Samsung SmartThings will support the Matter standard by default for all new devices.

In this course we will learn to build smart homes with Amazon Alexa and Matter protocol.

</Text>

<Heading fontFamily={"sans-serif"} fontSize={"30px"}>1. Alexa Skill Developement</Heading>
<Heading pb={"40px"} fontFamily={"sans-serif"} fontSize={"30px"}>2. Alexa with Matter Protocol</Heading>

<Heading p={"50px"} pb={"20px"} textAlign={"center"}>Quarter V</Heading>
<Text fontSize={"25px"} textAlign={"center"}>AC-361: Embedded Programming using C and Rust</Text>
<Text fontSize={"25px"}  textAlign={"center"} mb={"35px"}>Duration: 13 Weeks</Text>

<Heading fontFamily={"sans-serif"} fontSize={"30px"} py={"50px"} pb={"20px"} textAlign={"left"}>Course Description: </Heading>
<Text textAlign={"left"}  mb={"35px"} fontSize={"20px"}>This is an introductory course about using the C and Rust Programming Languages on "Bare Metal" embedded systems, such as Microcontrollers. We will start by introducing embedded systems and move on to learn the  C++ and Rust programming languages. We'll learn about basic programming concepts using C and Rust, then we will explore key concepts in electronics, microcontrollers, and embedded programming. It is a fast-paced,  thorough introduction to programming with C and Rust that will have you writing programs, solving problems, burning your code on microcontrollers,  playing with GPIOs, and making things that work in no time.</Text>

<Heading fontFamily={"sans-serif"} fontSize={"30px"}>1.Introduction to the Internet of Things and Embedded Systems (Weeks 1 and 2)</Heading>
<Heading fontFamily={"sans-serif"} fontSize={"30px"}>2. The C Reference Book: The C programming language</Heading>
<Heading mb={"40px"} fontFamily={"sans-serif"} fontSize={"30px"}>3. Introduction to Embedded systems Part 1 (Weeks 8) 
</Heading>
</Box>

    </Box>
  )
}

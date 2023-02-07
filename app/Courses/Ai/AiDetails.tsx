import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import CommonDetail from '../CommonDetail'

export default function MetaverseDetail() {
  return (
    <Box >
    <CommonDetail/>

    
    <Box fontFamily={"sans-serif"} pb={"20px"} fontSize={"20px"} textAlign={"left"} px={"20px"}>

    <Heading p={"50px"} pb={"20px"} textAlign={"center"}>Quarter IV</Heading>
    <Text fontSize={"25px"} textAlign={"center"}>AI-351: Developing Planet-Scale Intelligent APIs and Python Programming</Text>
    <Text fontSize={"25px"}  textAlign={"center"} mb={"35px"}>Duration: 13 Weeks</Text>
    <Heading fontFamily={"sans-serif"} fontSize={"30px"} py={"50px"} pb={"20px"} textAlign={"left"}>Course Description:</Heading>
    <Text textAlign={"left"}  mb={"35px"} fontSize={"20px"}>Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. The AI and Deep Learning Specialization is a foundational program that will aid in your comprehension of deep learning's potential, difficulties, and effects as well as equip you to take part in the creation of cutting-edge AI technology.

We will start this course by understanding the fundamentals and use cases for AI and move on to building next-gen intelligent apps using OpenAI’s powerful models and Next.js 13.

We'll conclude the course by learning about basic programming concepts using Python, such as lists, dictionaries, classes, functions, and loops, and practice writing clean and readable code with exercises for each topic. We'll also learn how to make your programs interactive and how to test your code safely before adding it to a project. It is a fast-paced, thorough introduction to programming with Python 3.10+ that will have you writing programs, solving problems, and making things that work in no time. In this quarter we will also learn Git, the distributed version control system. We will also review Git-based GitHub services.

</Text>

<Heading fontFamily={"sans-serif"}  pb={"40px"} fontSize={"40px"}>Course Outline:</Heading>
<Heading fontFamily={"sans-serif"} fontSize={"30px"}>1. Introduction to Machine Learning, Data Science, and AI</Heading>
<Heading fontFamily={"sans-serif"} fontSize={"30px"}>2. Building Next-Gen Intelligent Apps with OpenAI’s Powerful Models 
We will cover GPT-4, ChatGPT, etc. and Next.js 13
</Heading>
<Heading fontFamily={"sans-serif"} fontSize={"30px"}>3. Python Crash Course  for TypeScript Developers</Heading>


<Heading p={"50px"} pb={"20px"} textAlign={"center"}>Quarter V</Heading>
<Text fontSize={"25px"} textAlign={"center"}>AI-361: Deep Learning and MLOps</Text>
<Text fontSize={"25px"}  textAlign={"center"} mb={"35px"}>Duration: 13 Weeks</Text>

<Heading fontFamily={"sans-serif"} fontSize={"30px"} py={"50px"} pb={"20px"} textAlign={"left"}>Course Description: </Heading>
<Text textAlign={"left"}  mb={"35px"} fontSize={"20px"}>This course will help you understand the capabilities, challenges, and consequences of deep learning and prepare you to participate in the development of leading-edge AI technology. We will finish the program by learning how to envision, create, and maintain integrated systems that run constantly in production. Production systems must manage constantly changing data, in stark contrast to typical machine learning modeling. The production system must also operate continuously at the lowest possible cost while delivering the highest possible performance.</Text>

<Heading fontFamily={"sans-serif"} fontSize={"30px"}>1. Deep Learning with Tensorflow</Heading>
<Heading  mb={"40px"} fontFamily={"sans-serif"} fontSize={"30px"}>2. Machine Learning Engineering for Production (MLOps) using Terraform for CDK</Heading>

</Box>

    </Box>
  )
}

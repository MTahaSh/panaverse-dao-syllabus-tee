import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import {Image} from "@chakra-ui/react"

export default function Typography() {
  return (
    
    <Box>
        <Flex flexWrap={{lg:"nowrap",md:"wrap",base:"wrap"}} width={"100%"} justifyContent={"center"}>
    <Box p={"70px"} color={"white"}  >

    <Heading>Technology is best when it brings people together.</Heading>
    <Text mt={"35px"} lineHeight={"25px"} textAlign={{lg:"left",md:"left",base:"left"}}>The internet is without a doubt the most important technological development in human history. Web3, 3D Metaverse, AI, IoT, Cloud, and Edge technologies expand the internet as we know it by introducing novel features and advancements. Metaverse will make use of all aspects of modern technology, including 3D, VR, AR, AI, blockchain, cloud and edge computing, voice computing, ambient computing, and more.
</Text>

    </Box>
    
    
    <Image m={"40px"}  textAlign={"center"}  borderRadius={"20px"} src="/The-Learning-Brain.jpg" h={{lg:"240px",md:"35vw",base:"35vw"}}/>
    
    </Flex>
</Box>
    
  )
}

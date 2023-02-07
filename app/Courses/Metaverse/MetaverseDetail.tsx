import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import CommonDetail from '../CommonDetail'

export default function MetaverseDetail() {
  return (
    <Box >
    <CommonDetail/>
    
    <Box fontFamily={"sans-serif"} pb={"20px"} fontSize={"20px"} textAlign={"left"} px={"20px"}>
    <Heading p={"50px"} pb={"20px"} textAlign={"center"}>Quarter IV</Heading>
    <Text fontSize={"25px"} textAlign={"center"}>W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps</Text>
    <Text fontSize={"25px"}  textAlign={"center"} mb={"35px"}>Duration: 13 Weeks</Text>
    <Heading fontFamily={"sans-serif"} fontSize={"30px"} py={"50px"} pb={"20px"} textAlign={"left"}>Course Description:</Heading>
    <Text textAlign={"left"}  mb={"35px"} fontSize={"20px"}>In this course you will learn how to develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test them, and create user interfaces for them. We will also learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc.  Please note that in order to develop Web 3 applications you also need to build on top of Web 2.0 technologies which we have already covered in the previous quarters. <br/>
https://javascript.plainenglish.io/why-you-should-learn-web-2-0-before-getting-into-web-3-0-d251625990db
</Text>


<Heading fontFamily={"sans-serif"} fontSize={"30px"}>1. Blockchain and Metaverse Theory</Heading>
<Heading fontFamily={"sans-serif"} fontSize={"30px"}>2. Smart Contract Development in Solidity</Heading>
<Heading fontFamily={"sans-serif"} fontSize={"30px"}>3. Dapp Development using Ethers.js and Next.js 13</Heading>
<Heading fontFamily={"sans-serif"} fontSize={"30px"}>4. Tokennomics</Heading>
<Heading pb={"40px"} fontFamily={"sans-serif"} fontSize={"30px"}>5. Blockchain Project: Create a Token and Launch ICO/IEO/IDO</Heading>

<Heading p={"50px"} pb={"20px"} textAlign={"center"}>Quarter V</Heading>
<Text fontSize={"25px"} textAlign={"center"}>MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences</Text>
<Text fontSize={"25px"}  textAlign={"center"} mb={"35px"}>Duration: 13 Weeks</Text>

<Heading fontFamily={"sans-serif"} fontSize={"30px"} py={"50px"} pb={"20px"} textAlign={"left"}>Course Description: </Heading>
<Text textAlign={"left"}  mb={"35px"} fontSize={"20px"}>The Web is the Metaverse. The metaverse requires an infrastructure that connects all of the metaverses so that we can travel between them. This is only achievable with open web-based metaverses. The internet and its browsers are magical. Federated but linked experiences connect pages, people, technology, businesses, standards, and nations. It's unlike anything else. The metaverse should replicate the best qualities of the web - it should just be the web. We just have to extend online responsive design from mobile to desktop to 3D, Augmented Reality, and Virtual Reality. This course will teach you how to build the Open Social Spatial Web with WebXR and WebGPU technologies.</Text>

<Heading fontFamily={"sans-serif"} fontSize={"30px"}>1. Open Metaverse Web Development</Heading>
<Heading mb={"40px"} fontFamily={"sans-serif"} fontSize={"30px"}>2. Blender 3D asset Creation for the Metaverse (Remote Zoom Class)</Heading>

</Box>

    </Box>
  )
}

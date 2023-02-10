import { Box, Button, ButtonGroup, Divider, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'


function OnClickChange() : string
{
    const Var:string = "https://portal.piaic.org/signup"

    return(Var)
} 


export default function CoursesBlock() {
  
  const router = useRouter();
  return (
  

    <Box bgColor={"#f8f8f8"} py={"5"} px={"6"} w={"100%"}>

    <Box>
        <Flex pt={"25px"} textAlign={"center"} direction={"column"}>
        <Heading  fontSize={{lg:"4em",md:"3.5em",base:"3.5em"}} mb={"5px"} color={"red"}>Panaverse </Heading>
        <Heading size={"lg"} >Specialized Courses</Heading>
        </Flex>
    </Box>



    <Box >

    <Flex   flexWrap={{lg:"wrap",md:"nowrap",base:"nowrap"}} width={"100%"} alignItems={"center"}  justifyContent={{lg:"space-between",md:"center",base:"center"}} pt={"75px"}  pb={"100px"}  flexDirection={{lg:"row",md:"column",base:"column"}}>        

        {/* Card 1 */}
        
        <Card _hover={{ boxShadow:"0px 8px 16px 0 rgba(0,0,0,.6)"}}  m={{lg:"20px",md:"0px",base:"0px"}} mt={{lg:"0px",md:"20px",base:"20px"}}  outline={"solid black"} minH={"lg"} maxH={"lg"}  minW='xs' maxW={"xs"} >
  <CardBody  >
    
    <Stack  pb={"20px"} spacing='2'>
      <Heading  mb={"25px"} size='md'>Web 3.0 (Blockchain) and Metaverse Specialization</Heading>
      <Text>
        This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid'  _hover={{bg:"rgba(0,0,0,.7)"}} color={"white"} borderRadius={"7px"} bg={"#D61355"} >
      <Link _hover={{textDecoration:"none"}} target={"_blank"} href={OnClickChange()}>Apply Now!</Link>
      </Button>
      <Button variant='outline' colorScheme='blue' onClick={()=>{router.push('/Courses')}} >
        Learn More...
      {/* <Link _hover={{textDecoration:"none"}} href={'/Courses'}>Learn More...</Link> */}
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
        {/* Card 2 */}
        <Card _hover={{ boxShadow:"0px 8px 16px 0 rgba(0,0,0,.6)"}} m={{lg:"20px",md:"0px",base:"0px"}} mt={{lg:"0px",md:"20px",base:"20px"}} outline={"solid black"} minH={"lg"} maxH={"lg"} minW='xs' maxW={"xs"}>
  <CardBody >
    
    <Stack  pb={"70px"} spacing='2'>
      <Heading  mb={"25px"} size='md'>Artificial Intelligence (AI) and Deep Learning Specialization</Heading>
      <Text>
      The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid'  _hover={{bg:"rgba(0,0,0,.7)"}} color={"white"} borderRadius={"7px"} bg={"#D61355"} >
      <Link _hover={{textDecoration:"none"}} target={"_blank"} href={OnClickChange()}>Apply Now!</Link>
      </Button>
      <Button variant='outline' colorScheme='blue' onClick={()=>{router.push('/Courses')}}>
      {/* <Link _hover={{textDecoration:"none"}}  href={'/Courses'}>Learn More...</Link> */}
      Learn More...
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

        {/* Card 3 */}
        <Card  _hover={{ boxShadow:"0px 8px 16px 0 rgba(0,0,0,.6)"}} m={{lg:"20px",md:"0px",base:"0px"}} mt={{lg:"0px",md:"20px",base:"20px"}} outline={"solid black"} minH={"lg"} maxH={"lg"} minW='xs' maxW={"xs"}>
  <CardBody >
    
    <Stack   pb={"70px"} spacing='2'>
      <Heading mb={"25px"} size='md'>Cloud-Native Computing Specialization</Heading>
      <Text>
      The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid'  _hover={{bg:"rgba(0,0,0,.7)"}} color={"white"} borderRadius={"7px"} bg={"#D61355"} >
      <Link _hover={{textDecoration:"none"}} target={"_blank"} href={OnClickChange()}>Apply Now!</Link>
      </Button>
      <Button variant='outline' colorScheme='blue' onClick={()=>{router.push('/Courses')}}>
        Learn More...
      {/* <Link _hover={{textDecoration:"none"}} href={'/Courses'}>Learn More...</Link> */}
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

    {/* Card 4 */}
        <Card  _hover={{ boxShadow:"0px 8px 16px 0 rgba(0,0,0,.6)"}} m={{lg:"20px",md:"0px",base:"0px"}} mt={{lg:"0px",md:"20px",base:"20px"}} outline={"solid black"} minH={"lg"} maxH={"lg"} minW='xs' maxW={"xs"}>
  <CardBody >
    
    <Stack  pb={"70px"} spacing='2'>
      <Heading  mb={"25px"} size='md'>Ambient Computing and IoT Specialization</Heading>
      <Text>
      The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices. 
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid'  _hover={{bg:"rgba(0,0,0,.7)"}} color={"white"} borderRadius={"7px"} bg={"#D61355"} >
      <Link _hover={{textDecoration:"none"}} target={"_blank"} href={OnClickChange()}>Apply Now!</Link>
      </Button>
      <Button variant='outline' colorScheme='blue' onClick={()=>{router.push('/Courses')}}>
      Learn More...
      {/* <Link _hover={{textDecoration:"none"}} href={'/Courses'}>Learn More...</Link> */}
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

</Flex>
</Box>        
    </Box>
  )
}

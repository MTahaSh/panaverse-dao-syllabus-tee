import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex } from '@chakra-ui/react'
import React from 'react'

export default function NavbarItems() {
  return (
    <Box >
        <Flex  flexDirection={"column"} width={"100%"} justifyContent={{lg:"left",md:"center",base:"center"}} h={{lg:"inherit",md:"100vh",base:"100vh"}} alignItems={{lg:"center",md:"center",base:"center"}}>
        <Breadcrumb  display={"flex"} flexDirection={"column"} fontWeight={"bold"} fontSize={{lg:"17px",md:"40px",base:"40px"}} spacing={"20px"} color={{lg:"white",md:"white",base:"white"}} separator=' '>

          <Flex  lineHeight={{lg:"inherit",md:"100px",base:"100px"}} flexDirection={{lg:"row",md:"column",base:"column"}} >  
                    <BreadcrumbItem mx={"20px"} >
                        <BreadcrumbLink _hover={{textDecoration:"none"}} href='/'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem mx={"20px"}>
                        <BreadcrumbLink _hover={{textDecoration:"none"}} href='/Courses'>Courses</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem mx={"20px"}>
                        <BreadcrumbLink _hover={{textDecoration:"none"}} href='/About'>About</BreadcrumbLink>
                    </BreadcrumbItem>
                    </Flex>
                </Breadcrumb>
                
                </Flex>
    </Box>
  )
}

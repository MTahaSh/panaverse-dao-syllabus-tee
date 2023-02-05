import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import Header from './Header'
import NavBar from './Navbar'
import Typography from './Typography'


export default function Before() {
  return (
    <>
        <Box bgColor={"#a2c5cc"} w={"100%"} h={"100%"} pb={"140px"}>


        <Header/>
        <NavBar/>
        <Typography/>
        </Box>
       
       </>
  )
}
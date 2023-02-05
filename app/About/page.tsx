"use client"
import React from 'react'
import { Box, ChakraProvider } from '@chakra-ui/react'
import NavBar from '../Navbar'
import Header from '../Header'
import Footer from '../Footer'
import Copyright from '../Copyright'

export default function page() {
  return (
    <ChakraProvider>
         <Box bgColor={"#a2c5cc"} w={"100%"} h={"100%"} pb={"140px"}>
        <Header/>
        <NavBar/>
        </Box>
        <Footer/>
        <Copyright/>

    </ChakraProvider>
  )
}

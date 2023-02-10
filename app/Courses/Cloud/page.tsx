"use client"

import { Box } from '@chakra-ui/react'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import CloudDetail from './CloudDetails'
import Header from '@/app/Header'
import NavbarItems from '@/app/NavbarItems'
import NavBar from '@/app/Navbar'
import Footer from '@/app/Footer'
import Copyright from '@/app/Copyright'

export default function page() {
  return (

    <ChakraProvider>
    <Box bgColor={"#D61355"} w={"100%"} h={"100%"} pb={"140px"}>
        
        
        <Header/>
        <NavBar/>
        </Box>

        <CloudDetail/>

        <Footer/>
        <Copyright/>
        </ChakraProvider>


    
  )
}

"use client"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import {ChakraProvider} from "@chakra-ui/react"
import Header from './Header'
import NavBar from './Navbar'
import Before from './Before'
import Content from './Content'
import Stats from './Stats'
import CoursesBlock from './CoursesBlock'
import Footer from './Footer'
import Copyright from './Copyright'

// const inter = Inter({ subsets: ['latin'] })

export default function Page() {
  return (

   <ChakraProvider>
    <Before/>
    <Content/>
    <Stats/>
    <CoursesBlock/>
    <Footer/>
    <Copyright/>
   </ChakraProvider>
   
  );
}

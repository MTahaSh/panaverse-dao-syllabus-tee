import { Box, Button, Flex, Link } from '@chakra-ui/react'
import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from '@chakra-ui/react'
import NavbarItems from './NavbarItems'
import { Icon } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import DrawerComp from './DrawerComp'

  
export default function navBar() {
    return (
        <Box bg={"#b5dde1"} bgColor={"transparent"} w={"96.5%"} h={"120px"}  pb={"20px"} mx={"auto"}>
            <Flex px={"5"} py={"5"} w={"100%"} align={"center"} justifyContent={"space-between"} flexWrap={{xs:"wrap",md:"nowrap",base:"nowrap"}} >

                <Box display={{md:"none",base:"none" ,lg:"reset"}} w={"100%"} h={"100%"} p={"20px"} bgColor={"rgba(255,255,255,0.1)"}>
                {
                    <NavbarItems/>}
                </Box>

                <Box>
                    <Button  _hover={{bg:"no-effect"}} fontFamily={"timesnewroman"} color={"white"} bgColor={"#1eb2a6"} fontWeight={"bold"} borderRadius={"0px"} px={"50px"} py={"32px"} > <Link _hover={{textDecoration:"none"}} href='https://portal.piaic.org/signup'>Get Certificate </Link></Button>
                </Box>

                
                <Box display={{ md:"reset", lg:"none"}}   w={"100%"} h={"100%"} py={"9.5px"} bgColor={"rgba(255,255,255,0.1)"}>
                    <Flex  px={"5"} py={"1"} w={"100%"} align={"center"} justifyContent={"end"}>

                
                
                {/* <Icon   fontSize={"17px"} as={HamburgerIcon}/> */}
                <DrawerComp/>
                
                
                </Flex>
                </Box>
                
                    
            </Flex>

        </Box>
    )
}

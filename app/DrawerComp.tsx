import React, { useRef } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    Box,
  } from '@chakra-ui/react'
  import { Icon } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import NavbarItems from './NavbarItems';

export default function DrawerComp() {
  const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef(null);
  
    return (
      <Box>
        <Button  ref={btnRef} bgColor={"#D61355"} _hover={{bgColor:"#D61355"}} colorScheme='teal' onClick={onOpen}>
          <Icon as={HamburgerIcon}/>
        </Button>
        <Drawer
          
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            
  
            <DrawerBody bgColor={"#D61355"}>
              <NavbarItems/>
            </DrawerBody>
  
            </DrawerContent>
        </Drawer>
      </Box>
    )
}

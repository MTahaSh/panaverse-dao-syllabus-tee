import { Box, Flex, HStack, Icon, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { FaRegCopyright } from 'react-icons/fa' 

export default function Copyright() {
  return (
    <Box bgColor={"#e9e9e9"} w={"100%"} textAlign={"center"}>
    <Flex w={"100%"} py={"10"} px={"6"} justifyContent={"center"} align={"center"}>
    <HStack textAlign={"center"}>
    <Icon as={FaRegCopyright}/>
    <Link href='https://www.linkedin.com/in/taha-sheikh-a86a90194/' target={"_blank"}>Muhammad Taha Rizwan 2023</Link>
    </HStack>
    </Flex>
    </Box>
  )
}

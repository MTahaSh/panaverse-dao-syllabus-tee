import { Box, Flex, Icon } from '@chakra-ui/react'
import React from 'react'
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
} from '@chakra-ui/react'
import { MdLocationCity } from 'react-icons/md'
import { MdBook } from 'react-icons/md'
import { MdBatchPrediction } from 'react-icons/md'
import { MdOutlineImportContacts } from 'react-icons/md'
import { FaTwitter } from 'react-icons/fa'

export default function Stats() {
    return (
        <Box   bg={"#6096B4"}  p={{lg:"5",md:"10px",base:"10px"}}  mx={"auto"}>   
            <Flex   w={"100%"} h={"100%"} px={"5"} py={{lg:"5",md:"10px",base:"10px"}}   textAlign={{lg:"center",md:"left",base:"left"}} justifyContent={"space-around"} flexDirection={{md:"column",base:"column",lg:"row"}}>

            <Stat mt={{lg:"0px",md:"30px",base:"30px"}} color={"white"}>
                <Icon fontSize={"60px"} as={MdLocationCity}/>
                <StatLabel fontSize={"20px"}>Cities</StatLabel>
                <StatNumber fontSize={"40px"}>4+</StatNumber>
                
            </Stat>

            <Stat mt={{lg:"0px",md:"40px",base:"40px"}} color={"white"}>
            <Icon fontSize={"60px"} as={MdBatchPrediction}/>
                <StatLabel fontSize={"20px"}>Students Enrolled</StatLabel>
                <StatNumber fontSize={"40px"}>1000+</StatNumber>
                
            </Stat>

            <Stat mt={{lg:"0px",md:"40px",base:"40px"}} color={"white"}>
            <Icon fontSize={"60px"} as={MdOutlineImportContacts}/>
                <StatLabel fontSize={"20px"}>Courses</StatLabel>
                <StatNumber fontSize={"40px"}>5+</StatNumber>
                
            </Stat>

            <Stat mt={{lg:"0px",md:"40px",base:"40px"}} mb={{lg:"inherit",md:"25px",base:"25px"}} color={"white"}>
            <Icon fontSize={"60px"} as={FaTwitter}/>
                <StatLabel fontSize={"20px"}>Twitter Followers</StatLabel>
                <StatNumber fontSize={"40px"}>1.5k+</StatNumber>
                
            </Stat>

            </Flex>
        </Box>
    )
}

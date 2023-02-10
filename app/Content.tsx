import { Box, Button, CardBody, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Card, CardHeader, CardFooter } from '@chakra-ui/react'



export default function Content() {
    return (
        <Box bgColor={"#f8f8f8"} w={"100%"} h={"100%"} p={"50px"}>

            <Flex direction={"column"} >


                {/* Cards */}
                <Box>
                    <Heading >The Program in a Nutshell: Earn While You Learn</Heading>
                    <Text mt={"7px"}>In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program's beginning. It resembles a cross between a corporate venture and an educational project.</Text>
                </Box>

                <Box>

                    {/* Card I */}
                        <Card 
                        outline={"solid black"}
                        cursor={"pointer"}
                        _hover={{bg:"#D61355",color:"white",textDecoration:"none"}}
                        mt={"50px"}
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                    >
                        

                        <Stack >
                        <CardBody> 
                            <Link textDecoration={"none"} _hover={{textDecoration:"none"}} href='https://github.com/panaverse/panaverse.github.io#quarter-i-core' target={"_blank"} >
                                <Heading size='md'>Quarter I</Heading>

                                <Text py='2'>
                                    CS-101: Object-Oriented Programming using TypeScript
                                </Text>
                                </Link>
                            </CardBody>
                            
                        </Stack>
                        
                    </Card>

                    {/* Card II */}
                    <Card
                        outline={"solid black"}
                        cursor={"pointer"}
                        _hover={{bg:"#D61355",color:"white"}}
                        mt={"15px"}
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                    >


                        <Stack>

                            <CardBody>
                            <Link textDecoration={"none"} _hover={{textDecoration:"none"}} href='https://github.com/panaverse/panaverse.github.io#quarter-ii-core' target={"_blank"} >
                                <Heading size='md'>Quarter II</Heading>

                                <Text py='2'>
                                W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform
                                </Text>
                                </Link>
                            </CardBody>

                        </Stack>
                    </Card>

                    {/* Card III  */}
                    <Card
                        outline={"solid black"}
                        cursor={"pointer"}
                        _hover={{bg:"#D61355",color:"white"}}
                        mt={"15px"}
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                    >


                        <Stack>

                            <CardBody>
                            <Link textDecoration={"none"} _hover={{textDecoration:"none"}} href='https://github.com/panaverse/panaverse.github.io#quarter-iii-core' target={"_blank"} >
                                <Heading size='md'>Quarter III</Heading>

                                <Text py='2'>
                                $-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development
                                </Text>
                                </Link>
                            </CardBody>

                        </Stack>
                    </Card>




                </Box>
            </Flex>
        </Box>
    )
}

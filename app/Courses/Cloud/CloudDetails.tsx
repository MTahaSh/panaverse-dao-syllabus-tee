import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import CommonDetail from '../CommonDetail'

export default function MetaverseDetail() {
  return (
    <Box >
    <CommonDetail/>
    

    <Box fontFamily={"sans-serif"} pb={"20px"} fontSize={"20px"} textAlign={"left"} px={"20px"}>
    <Heading p={"50px"} pb={"20px"} textAlign={"center"}>Quarter IV</Heading>
    <Text fontSize={"25px"} textAlign={"center"}>CN-351: Certified Kubernetes Application Developer (CKAD)</Text>
    <Text fontSize={"25px"}  textAlign={"center"} mb={"35px"}>Duration: 13 Weeks</Text>
    <Heading fontFamily={"sans-serif"} fontSize={"30px"} py={"50px"} pb={"20px"} textAlign={"left"}>Course Description:</Heading>
    <Text textAlign={"left"}  mb={"35px"} fontSize={"20px"}>Cloud-native architecture and technologies are an approach to designing, constructing, and operating workloads that are built in the cloud and take full advantage of the cloud computing model. Cloud-native technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds. Containers, service meshes, microservices, immutable infrastructure, and declarative APIs exemplify this approach.

These techniques enable loosely coupled systems that are resilient, manageable, and observable. Combined with robust automation, they allow engineers to make high-impact changes frequently and predictably with minimal toil.

Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications. In this course, you will learn how to develop cloud applications using cloud-native technologies like Containers, Kubernetes, and CDK for Kubernetes.

</Text>


<Heading fontFamily={"sans-serif"} fontSize={"30px"}>1. Kubernetes: Up and Running: Dive into the Future of Infrastructure 3rd Edition</Heading>
<Heading fontFamily={"sans-serif"} fontSize={"30px"}>2. Cloud Development Kit for Kubernetes</Heading>

<Heading p={"50px"} pb={"20px"} textAlign={"center"}>Quarter V</Heading>
<Text fontSize={"25px"} textAlign={"center"} >CN-361: Developing Multi-Cloud Apps using CDK for Terraform</Text>
<Text fontSize={"25px"}  textAlign={"center"} mb={"35px"}>Duration: 13 Weeks</Text>

<Heading fontFamily={"sans-serif"} fontSize={"30px"} py={"50px"} pb={"20px"} textAlign={"left"}>Course Description: </Heading>
<Text textAlign={"left"}  mb={"35px"} fontSize={"20px"}>Terraform lets you use the same workflow to manage multiple providers and handle cross-cloud dependencies. This simplifies management and orchestration for large-scale, multi-cloud infrastructures.

Cloud Development Kit for Terraform (CDKTF) allows you to use familiar programming languages to define and provision infrastructure. This gives you access to the entire Terraform ecosystem without learning HashiCorp Configuration Language (HCL) and lets you leverage the power of your existing toolchain for testing, dependency management, etc.
</Text>

<Heading fontFamily={"sans-serif"} fontSize={"30px"}>CDK for Terraform</Heading>

</Box>
    </Box>
  )
}

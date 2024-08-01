import React from 'react';
import { Flex, Box, Image, Text, Card, CardBody, Button } from '@chakra-ui/react';

export default function About(props) {
    return (
        <Flex direction="column" align="center" p={4}>
            <Card maxW="1000px" w="90%" mt={4} overflow="hidden" align="center">
                <CardBody>
                    <Flex align="center" direction={{ base: 'column', md: 'row' }} wrap="wrap">
                        <Image
                            src="formywebsite.jpeg" // Replace with your actual image path
                            alt="About Image"
                            boxSize="200px"
                            objectFit="cover"
                            mb={{ base: 4, md: 0 }} // Margin bottom for mobile view
                            mr={{ base: 0, md: 4 }} // Margin right for desktop view
                        />
                        <Box textAlign={{ base: 'center', md: 'left' }}>
                            <Text fontSize="3xl" fontWeight="bold" mb={4}>
                                My name is Eric Chang
                            </Text>
                            <Text fontSize="lg" mb={4}>
                                I'm looking for an internship at a company and I'm a first-year student.
                                <br /> Getting an internship will give me a huge advantage later on.
                            </Text>
                            <Text fontSize="lg" mb={4}>
                                I really hope I can become successful later on.
                            </Text>
                            <Button
                                as="a"
                                href="https://www.linkedin.com/in/eric-chang12/" // Replace with your actual LinkedIn profile URL
                                target="_blank"
                                rel="noopener noreferrer"
                                colorScheme="blue"
                                size="lg"
                                mt={4}
                            >
                                Visit My LinkedIn
                            </Button>
                        </Box>
                    </Flex>
                </CardBody>
            </Card>
        </Flex>
    );
}

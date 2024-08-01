import React from 'react';
import { Flex, Box, Image, Heading } from '@chakra-ui/react';

export default function HomePage(props) {
    return (
        <>
            
            <Flex justify="center" mt={10}>
                <Box>
                    <Image mt={10}

                        src="formywebsite.jpeg" 
                        alt="Website Image"
                        maxW="600px"
                        w="100%"
                        h="auto"
                        borderRadius="md"
                        shadow="md"
                    />
                </Box>
            </Flex>
        </>
    );
}

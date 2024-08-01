import React from 'react';
import { Flex, Box, Image, Text, Heading, Stack } from '@chakra-ui/react';

// Sample data for projects
const projects = [
    {
        title: 'Personal Website',
        description: 'This is my personal website, where I will put information about myself, such as my LinkedIn profile and my hobbies',
        imageSrc: 'https://via.placeholder.com/300'
    },
    {
        title: 'Project Two',
        description: 'This is a brief description of Project Two. It highlights the key aspects and achievements of the project.',
        imageSrc: 'https://via.placeholder.com/300'
    },
    {
        title: 'Project Three',
        description: 'This is a brief description of Project Three. It outlines the scope and impact of the project.',
        imageSrc: 'https://via.placeholder.com/300'
    }
];

export default function Projects(props) {
    return (
        <Flex direction="column" align="center" p={4} mt={10}>
            <Heading mb={6}>Projects</Heading>
            <Flex 
                direction={{ base: 'column', md: 'row' }} 
                wrap="wrap" 
                justify="center" 
                spacing={4}
            >
                {projects.map((project, index) => (
                    <Box
                        key={index}
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        boxShadow="md"
                        mx={7}
                        p={4}
                        maxW={{ base: '100%', sm: '300px' }} // Adjust based on screen size
                        w="100%"
                        mb={4}
                    >
                        <Image 
                            src={project.imageSrc} 
                            alt={`${project.title} Image`} 
                            borderRadius="md" 
                            mb={4}
                            objectFit="cover"
                            boxSize="100%"
                            maxH="200px"
                        />
                        <Heading size="md" mb={2}>{project.title}</Heading>
                        <Text fontSize="lg">{project.description}</Text>
                    </Box>
                ))}
            </Flex>
        </Flex>
    );
}

// src/components/Navbar.jsx
import React from 'react';
import { Flex, Box, Heading, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Flex
      as="nav"
      bg="blue.500"
      color="white"
      p={4}
      justify="space-between"
      align="center"
    >
      <Heading size="lg">My Website</Heading>
      <Box>
        <Link as={RouterLink} to="/" p={2} color="white" _hover={{ textDecoration: 'none' }}>
          Home
        </Link>
        <Link as={RouterLink} to="/about" p={2} color="white" _hover={{ textDecoration: 'none' }}>
          About
        </Link>
        <Link as={RouterLink} to="/projects" p={2} color="white" _hover={{ textDecoration: 'none' }}>
          Projects
        </Link>
        <Link as={RouterLink} to="/fun" p={2} color="white" _hover={{ textDecoration: 'none' }}>
          Fun
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;

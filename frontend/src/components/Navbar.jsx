import React from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  useDisclosure,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        as="nav"
        bg={useColorModeValue('white', 'gray.800')} // Set background to white
        color="black" // Text color set to black for visibility
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        align={'center'}
        position="fixed"
        top={0}
        left={0}
        w="100%"
        zIndex={1000}
        justify="space-between"
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
            color="black" // Button color set to black
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={'black'} // Text color set to black
            fontSize="lg"
            fontWeight="bold"
          >
            Eric Chang
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <Button as={RouterLink} to="/signin" fontSize={'sm'} fontWeight={400} variant={'link'} color="black">
            Sign In
          </Button>
          <Button
            as={RouterLink}
            to="/signup"
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'} // Button text color set to white
            bg={'black'} // Button background color set to black
            _hover={{
              bg: 'gray.800', // Darker hover state for better visibility
            }}
          >
            Sign Up
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue('black', 'white'); // Link color set to black
  const linkHoverColor = useColorModeValue('gray.800', 'gray.300'); // Hover color set for better visibility

  return (
    <Stack direction={'row'} spacing={4}>
      <Box>
        <Box
          as={RouterLink}
          p={2}
          to="/"
          fontSize={'sm'}
          fontWeight={500}
          color={linkColor}
          _hover={{
            textDecoration: 'none',
            color: linkHoverColor,
          }}
        >
          Home
        </Box>
      </Box>
      <Box>
        <Box
          as={RouterLink}
          p={2}
          to="/about"
          fontSize={'sm'}
          fontWeight={500}
          color={linkColor}
          _hover={{
            textDecoration: 'none',
            color: linkHoverColor,
          }}
        >
          About
        </Box>
      </Box>
      <Box>
        <Box
          as={RouterLink}
          p={2}
          to="/projects"
          fontSize={'sm'}
          fontWeight={500}
          color={linkColor}
          _hover={{
            textDecoration: 'none',
            color: linkHoverColor,
          }}
        >
          Projects
        </Box>
      </Box>
      <Box>
        <Box
          as={RouterLink}
          p={2}
          to="/fun"
          fontSize={'sm'}
          fontWeight={500}
          color={linkColor}
          _hover={{
            textDecoration: 'none',
            color: linkHoverColor,
          }}
        >
          Fun
        </Box>
      </Box>
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      <MobileNavItem label="Home" href="/" />
      <MobileNavItem label="About" href="/about" />
      <MobileNavItem label="Projects" href="/projects" />
      <MobileNavItem label="Fun" href="/fun" />
    </Stack>
  );
};

const MobileNavItem = ({ label, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={onToggle}>
      <Box
        py={2}
        as={RouterLink}
        to={href}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text fontWeight={600} color={useColorModeValue('black', 'white')}>
          {label}
        </Text>
      </Box>
    </Stack>
  );
};

export default Navbar;

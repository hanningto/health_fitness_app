import React from 'react';
import { Box, Flex, HStack, IconButton,Link, useDisclosure, Stack } from '@chakra-ui/react';
import { Link as RouterLink } from "react-router-dom";

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ({isAuthenticated}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (<>
  {isAuthenticated && (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems="center">
          <Box color="white" fontWeight="bold" fontSize="lg">Health & Fitness App</Box>
          <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
            <Link as={RouterLink} to="/dashboard" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'teal.600' }} color="white" >
              Home
            </Link>
            <Link as={RouterLink} to="/set-goals" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'teal.600' }} color="white" >
              Goals
            </Link>
            <Link as={RouterLink} to="/workout" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'teal.600' }} color="white" >
              Workout Log
            </Link>
            <Link as={RouterLink} to="/meal-log" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'teal.600' }} color="white" >
              Meals
            </Link>
            <Link as={RouterLink} to="/sleep" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'teal.600' }} color="white" >
              Sleep
            </Link>
            <Link as={RouterLink} to="/log-water" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'teal.600' }} color="white" >
              Water Intake
            </Link>
          </HStack>
        </HStack>
        <Flex alignItems="center">
          <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'teal.600' }} color="white" onClick={handleLogout}>
            Logout
          </Link>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'teal.600' }} color="white" href="/">
              Home
            </Link>
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'teal.600' }} color="white" href="/goals">
              Goals
            </Link>
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'teal.600' }} color="white" href="/workout-log">
              Workout Log
            </Link>
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'teal.600' }} color="white" href="/meals">
              Meals
            </Link>
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'teal.600' }} color="white" href="/sleep">
              Sleep
            </Link>
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'teal.600' }} color="white" href="/water-intake">
              Water Intake
            </Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  )
    
  }
  
  </>
    
  );
};

export default Navbar;

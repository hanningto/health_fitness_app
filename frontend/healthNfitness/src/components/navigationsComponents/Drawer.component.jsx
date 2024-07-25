// components/NavigationDrawer.jsx
import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavigationDrawer = ({ isAuthenticated }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {isAuthenticated && (
        <Box>
          <Button onClick={onOpen}>Open Navigation</Button>
          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay>
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Navigation</DrawerHeader>
                <DrawerBody>
                  <VStack spacing={4}>
                    <Button as={Link} to="/dashboard" onClick={onClose}>
                      Dashboard
                    </Button>
                    <Button as={Link} to="/meal-log" onClick={onClose}>
                      Log Meal
                    </Button>
                    <Button as={Link} to="/log-water" onClick={onClose}>
                      Log Water Intake
                    </Button>
                    <Button as={Link} to="/sleep" onClick={onClose}>
                      Log Sleep
                    </Button>
                    <Button as={Link} to="/set-goals" onClick={onClose}>
                      Set Goals
                    </Button>
                    <Button as={Link} to="/workout" onClick={onClose}>
                      Set Workouts
                    </Button>
                  </VStack>
                </DrawerBody>
                <DrawerFooter>
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Close
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </Box>
      )}
    </>
  );
};

export default NavigationDrawer;

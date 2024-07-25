import React,{ useState } from "react";

import {
    Button,
    Portal,
    Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

import UpdateGoalComponent from "./goalsEditingBox.Component";


function InternalStateEx({goal_id}) {

  const initRef = React.useRef();
  return (
    <Popover closeOnBlur={false} placement="right" initialFocusRef={initRef}>
      {({ isOpen, onClose }) => (
        <>
          <PopoverTrigger>
            <Button color="blue"> {isOpen ? "close" : "Edit"}</Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent color="white" bg="blue.800">
              <Box align="center">
                  <PopoverHeader fontWeight="bold"  fontSize="1.23em" alignContent="center">Edit Goal</PopoverHeader>
              </Box>
              <PopoverCloseButton />
              <PopoverBody>
                <Box>
                  <UpdateGoalComponent  goalId={goal_id}/>
                  Edit Goal to fit your progress
                </Box>
                <Button
                  mt={4}
                  colorScheme="blue"
                  onClick={onClose}
                  ref={initRef}
                >
                  Confirm 
                </Button>
              </PopoverBody>
              <PopoverFooter>This is the footer</PopoverFooter>
            </PopoverContent>
          </Portal>
        </>
      )}
    </Popover>
  );
}

export default InternalStateEx;

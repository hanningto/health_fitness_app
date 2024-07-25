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
import LogProgress from "./updateProgress.component";



function ProgressUpdatePopover({goalId, userId}) {

  const initRef = React.useRef();
  console.log(goalId)
  return (
    <Popover closeOnBlur={false} placement="right" initialFocusRef={initRef}>
      {({ isOpen, onClose }) => (
        <>
          <PopoverTrigger>
            <Button color="green"> {isOpen ? "close" : "Update"}</Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent color="white" bg="blue.800">
              <Box align="center">
                  <PopoverHeader fontWeight="bold"  fontSize="1.23em" alignContent="center">Update Progress</PopoverHeader>
              </Box>
              <PopoverCloseButton />
              <PopoverBody>
                <Box>
                    <LogProgress goalId={goalId} userId={userId}/>
                  Update your progres to this goal
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

export default ProgressUpdatePopover;

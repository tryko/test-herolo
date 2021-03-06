import React from "react";
import { Box, Flex, Slide } from "@chakra-ui/react";

const Toaster = ({ hasError, msg }) => {
  return (
    <Slide direction="bottom" in={hasError}>
      <Flex justify="center">
        <Box
          background="salmon"
          h="50px"
          textAlign="center"
          p="8px"
          width="700px"
          bo="10px"
          borderTopRightRadius="10px"
          borderTopLeftRadius="10px"
          fontWeight="600"
        >
          {msg}
        </Box>
      </Flex>
    </Slide>
  );
};

export default Toaster;

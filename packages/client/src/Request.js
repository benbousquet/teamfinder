import {
  Box,
  Button,
  Heading,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
function Request({ data, setIsOpen, setCurrentId }) {
  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Heading fontSize="xl">{data.creator} is looking for teammates</Heading>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="strech"
      >
        <Text mt={4}>{data.player1 || "???"}</Text>
        <Text mt={4}>{data.player2 || "???"}</Text>
        <Text mt={4}>{data.player3 || "???"}</Text>
      </VStack>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          colorScheme="teal"
          variant="outline"
          onClick={() => {
            setCurrentId(data.id);
            setIsOpen(true);
          }}
        >
          Join
        </Button>
      </div>
    </Box>
  );
}

export default Request;

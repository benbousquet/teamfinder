import { Box, Container, Heading, Stack } from "@chakra-ui/react";
import Request from "./Request";

function HomePage() {
  return (
    <Container>
      <Box p={8}>
        <Heading style={{ textAlign: "center" }}>TeamFinder</Heading>
      </Box>
      <Box>
        <Stack spacing={8}>
          <Request
            title="Plan Money"
            desc="The future can be even brighter but a goal without a plan is just a wish"
          />
          <Request
            title="Save Money"
            desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
          />
        </Stack>
      </Box>
    </Container>
  );
}
export default HomePage;

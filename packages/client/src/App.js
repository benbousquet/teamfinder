import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./HomePage";

function App() {
  return (
    <ChakraProvider>
      <HomePage />
    </ChakraProvider>
  );
}

export default App;

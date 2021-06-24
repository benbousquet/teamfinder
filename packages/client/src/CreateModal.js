import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

function CreateModal({ isOpen, setIsOpen, currentId, retrieveOpenRequests }) {
  let [usernameInput, setUsernameInput] = useState("");

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create request</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
              value={usernameInput}
              onChange={(e) => {
                setUsernameInput(e.target.value);
              }}
              placeholder="XXxXXsuperSlay3rXXxXX"
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => {
              axios
                .post("http://localhost:3001/api/createRequest", {
                  creator: usernameInput,
                })
                .then((res) => {
                  setIsOpen(false);
                  setUsernameInput("");
                  retrieveOpenRequests();
                });
            }}
          >
            Create
          </Button>
          <Button
            onClick={() => {
              setIsOpen(false);
              setUsernameInput("");
            }}
          >
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default CreateModal;

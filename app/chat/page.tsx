"use client";
import { CSSProperties, useState } from "react";
import ImageMapper, { MapAreas } from "react-img-mapper";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  HStack,
  Box,
  Heading,
  useToast,
  Text,
} from "@chakra-ui/react";
import Chat from "../components/chat";

export default function InteractivePainting() {
  const [hoveredAreaName, setHoveredAreaName] = useState("intialized");
  const [isDarkened, setIsDarkened] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeName, setActiveName] = useState("");
  const toast = useToast();

  const athensMap = {
    name: "my-map",
    areas: [
      {
        id: "Plato",
        shape: "circle",
        coords: [1817, 1316, 70],
        preFillColor: "rgba(255, 255, 255, 0.3)",
      },
      {
        id: "Aristotle",
        shape: "circle",
        coords: [1963, 1311, 70],
        preFillColor: "rgba(255, 255, 255, 0.3)",
      },
      {
        id: "Anaximander",
        shape: "circle",
        coords: [765, 1926, 70],
        preFillColor: "rgba(255, 255, 255, 0.3)",
      },
      {
        id: "Socrates",
        shape: "circle",
        coords: [1324, 1307, 70],
        preFillColor: "rgba(255, 255, 255, 0.3)",
      },
      {
        id: "Diogenes",
        shape: "circle",
        coords: [2146, 1738, 70],
        preFillColor: "rgba(255, 255, 255, 0.3)",
      },
      {
        id: "Heraclitus",
        shape: "circle",
        coords: [1648, 1870, 70],
        preFillColor: "rgba(255, 255, 255, 0.3)",
      },
      {
        id: "Epicurus",
        shape: "circle",
        coords: [573, 1611, 70],
        preFillColor: "rgba(255, 255, 255, 0.3)",
      },
      {
        id: "Euclid",
        shape: "circle",
        coords: [2997, 1920, 70],
        preFillColor: "rgba(255, 255, 255, 0.3)",
      },
      {
        id: "Ptolemy",
        shape: "circle",
        coords: [3321, 1620, 70],
        preFillColor: "rgba(255, 255, 255, 0.3)",
      },
      {
        id: "Pythagoras",
        shape: "circle",
        coords: [948, 1846, 70],
        preFillColor: "rgba(255, 255, 255, 0.3)",
      },
      {
        id: "Zoroaster",
        shape: "circle",
        coords: [3245, 1593, 70],
        preFillColor: "rgba(255, 255, 255, 0.3)",
      },
    ],
  };

  const handleMouseEnter = (area: MapAreas) => {
    if (area.id) {
      setHoveredAreaName(area.id);
      setIsDarkened(true); // Enable darkening effect

      toast({
        title: area.id,
        duration: null,
        isClosable: true,
        position: "bottom",
      });
      // set cursor to pointer
      document.body.style.cursor = "help";
    }
  };

  const handleMouseLeave = () => {
    setHoveredAreaName("");
    setIsDarkened(false); // Disable darkening effect

    toast.closeAll();

    // set cursor to default
    document.body.style.cursor = "default";
  };

  const handleMouseClick = (area: MapAreas) => {
    if (area.id) {
      onOpen();
      setActiveName(area.id);
    }
  };

  // CSS for the overlay
  const overlayStyle: CSSProperties = {
    // position: "fixed",
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    // backgroundColor: isDarkened ? "rgba(0, 0, 0, 0.7)" : "transparent", // Apply darkening
    // transition: "background-color 0.5s", // Smooth transition for the effect
    // zIndex: isDarkened ? 6 : -1, // Ensure overlay is above everything when active
  };

  return (
    <Box style={{ width: "100%", height: "100%" }}>
      {/* <Box style={overlayStyle}></Box> Overlay */}
      <HStack
        justifyContent={"center"}
        p={6}
        m={2}
        borderBottomWidth={1}
        borderBottomColor={"gray.700"}
      >
        <Box>
          <Heading as="h1" size="2xl" pb={4} textAlign="center">
            AI School of Athens
          </Heading>
          <Text textAlign="center" fontFamily={"montserrat"}>
            Talk to your favorite philosophers
          </Text>
        </Box>
      </HStack>
      <HStack justifyContent="center">
        <ImageMapper
          src={"/athens_school.jpg"}
          map={athensMap}
          responsive={true}
          parentWidth={1000}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleMouseClick}
        />
      </HStack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader borderBottom="1px" borderColor="black">Chat with {activeName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Chat philosopher={activeName} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

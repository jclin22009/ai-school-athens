'use client'
import { useState } from 'react';
import ImageMapper, { MapAreas } from 'react-img-mapper'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, useDisclosure, Button,
  HStack,
  Input
} from '@chakra-ui/react'

export default function Home() {
  const [hoveredAreaId, setHoveredAreaId] = useState("intialized");
  const { isOpen, onOpen, onClose } = useDisclosure()

  const athensMap = {
    name: "my-map",
    areas: [
      { id: "Plato", shape: "circle", coords: [1817, 1316, 70]},
      { id: "Aristotle", shape: "circle", coords: [1963, 1311, 70]},
      { id: "Anaximander", shape: "circle", coords: [765, 1926, 70]},
      { id: "Socrates", shape: "circle", coords: [1324, 1307, 70]},
      { id: "Diogenes", shape: "circle", coords: [2146, 1738, 70]},
      { id: "Heraclitus", shape: "circle", coords: [1648, 1870, 70]},
      { id: "Epicurus", shape: "circle", coords: [573, 1611, 70]},
      { id: "Euclid", shape: "circle", coords: [2997, 1920, 70]},
      { id: "Ptolemy", shape: "circle", coords: [3321, 1620, 70]},
      { id: "Pythagoras", shape: "circle", coords: [948, 1846, 70]},
      { id: "Zoroaster", shape: "circle", coords: [3245, 1593, 70]},
    ]
  };

  const handleMouseEnter = (area: MapAreas) => {
    if (area.id) {
      setHoveredAreaId(area.id);
    }
  };

  const handleMouseLeave = () => {
    setHoveredAreaId("");
  };

  const handleMouseClick = (area: MapAreas) => {
    if (area.id) {
      onOpen();
    }
  }

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <p>Hover over a philosopher's face to talk to them!</p>
      <p>Hovering over: {hoveredAreaId}</p>
      <ImageMapper
        src={'/athens_school.jpg'}
        map={athensMap}
        responsive={true}
        natural={true}
        parentWidth={700}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleMouseClick}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Chat with x</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p> UWU  </p>
          </ModalBody>

          <ModalFooter>
            <HStack>
              <Input></Input>
              <Button variant='ghost'>Philosophize</Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}
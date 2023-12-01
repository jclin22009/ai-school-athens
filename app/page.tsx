"use client";

import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  useColorMode,
  DarkMode,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  const { colorMode } = useColorMode();
  return (
    <Box position="relative" height="100vh" width="100vw" textColor="white">
        <Heading>Current Color Mode: {colorMode}</Heading>
        <Link href="/chat">
          <Button
            position="fixed"
            right="5%"
            bottom="5%"
            variant="solid"
            colorScheme="blue"
            zIndex={1000}
          >
            Enter the Academy →
          </Button>
        </Link>

        <video
          autoPlay
          muted
          loop
          src="/vid.mp4"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(50%)",
          }}
        />
        <VStack
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
        >
          <Heading size="3xl">Welcome to the School of Athens.</Heading>
          <Text size="2xl">
            Click on any philosopher&apos;s face to engage in discussion.
          </Text>
        </VStack>
    </Box>
  );
}

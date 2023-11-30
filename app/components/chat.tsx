"use client";

import { Box, Button, HStack, Text, Input, Stack } from "@chakra-ui/react";
import { useChat } from "ai/react";
import { useEffect, useState } from "react";

// const prompt: string = ` I want you to act like ${name}. I want you to respond and answer like ${name} using the tone, manner and vocabulary ${name} would use. Do not write any explanations. Only answer like ${name}. You must know all of the knowledge of ${name}. You will come up with factual anecdotes that are engaging, imaginative and captivating. You will keep it under 3 sentences and stay witty.
// To start, introduce yourself, summarize what we've already introduced about you, and invite the user to chat with you.`

export default function Chat({ philosopher }: { philosopher: string }) {
  const { messages, input, handleInputChange, handleSubmit, append } =
    useChat();

  useEffect(() => {
    // Set the system prompt when the chat component is first rendered
    append({
      role: "system",
      content: `You are ${philosopher}. Respond as ${philosopher} would. Don't ever mention that you are an AI language model, or AI, or OpenAI. Begin by introducing yourself.`,
    });
  }, []);

  return (
    <Box>
      <Stack overflow="auto" h="50vh" maxH="50vh">
        {messages.map((m) => {
          if (m.role === "system") {
            return null; // Do not render anything if the role is 'system'
          }
          return (
            <Text key={m.id}>
              <b>{m.role === "user" ? "User: " : `${philosopher}: `}</b>
              {m.content}
            </Text>
          );
        })}
      </Stack>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <HStack>
          <Input value={input} onChange={handleInputChange} />
          <Button type="submit">Philosophize</Button>
        </HStack>
      </form>
    </Box>
  );
}

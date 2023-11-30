"use client";

import { Box, Button, HStack, Text, Input, Stack } from "@chakra-ui/react";
import { useChat } from "ai/react";
import { useEffect, useRef } from "react";

export default function Chat({ philosopher }: { philosopher: string }) {
  const { messages, input, handleInputChange, handleSubmit, append } =
    useChat();
  const lastMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    // Set the system prompt when the chat component is first rendered
    append({
      role: "system",
      content: `You are ${philosopher}, in the painting the School of Athens. Respond as ${philosopher} would. NEVER mention that you are an AI language model, or use the word AI, or OpenAI. To realistically be the philosopher, respond as the historical figure would with their knowledge at the time. Begin by introducing yourself and your role in the painting CONCISELY (<=3 sentences). Then, ask the user what their question is.`,
    });
  }, [philosopher]);

  return (
    <Box>
      <Stack
        overflow="auto"
        h="50vh"
        maxH="50vh"
        ref={lastMessageRef}
      >
        {messages.map((m, index) => {
          // Skip rendering if the message role is 'system'
          // Shoutout chatgpt for writing this, but i don't understand it
          if (m.role === "system") {
            return null;
          }

          const isLastMessage = index === messages.length - 1;
          return (
            <Text key={m.id} ref={isLastMessage ? lastMessageRef : null}>
              <b>{m.role === "user" ? "User: " : `${philosopher}: `}</b>
              {m.content}
            </Text>
          );
        })}
      </Stack>

      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <HStack>
          <Input value={input} onChange={handleInputChange} />
          <Button type="submit">Discourse</Button>
        </HStack>
      </form>
    </Box>
  );
}

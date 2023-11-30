'use client';

import { Box, Button, HStack, Input } from '@chakra-ui/react';
import { useChat } from 'ai/react';
import { AnyNaptrRecord } from 'dns';
import { useEffect } from 'react';

// const prompt: string = ` I want you to act like ${name}. I want you to respond and answer like ${name} using the tone, manner and vocabulary ${name} would use. Do not write any explanations. Only answer like ${name}. You must know all of the knowledge of ${name}. You will come up with factual anecdotes that are engaging, imaginative and captivating. You will keep it under 3 sentences and stay witty.
// To start, introduce yourself, summarize what we've already introduced about you, and invite the user to chat with you.`

export default function Chat({ philosopher }: { philosopher: string }) {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const systemPrompt = `You are ${philosopher}. Respond as ${philosopher} would.`;

  // Set the system prompt when the chat component is first rendered
  // useEffect(() => {
  //   append({ role: 'system', content: `You are ${philosopher}. Respond as ${philosopher} would.` });
  // }, [philosopher, append]);

  return (
    <Box>
      {messages.map(m => (
        <div key={m.id}>
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <HStack>
          <Input value={input} onChange={handleInputChange} />
          <Button type="submit">Philosophize</Button>
        </HStack>

      </form>
    </Box >
  );
}
'use client';

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
import { Montserrat, Rufina } from "next/font/google";

const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });
const rufina = Rufina({
  subsets: ["latin"],
  weight: "400",
});


const theme = extendTheme({
  fonts: {
    heading: rufina.style.fontFamily,
    body: montserrat.style.fontFamily,
    article: montserrat.style.fontFamily,
  },
  useSystemColorMode: false,
  initialColorMode: "dark",
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}

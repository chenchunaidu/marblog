import "../styles/globals.css";
import { MantineProvider, Box, useMantineTheme } from "@mantine/core";

function MyApp({ Component, pageProps }) {
  const theme = useMantineTheme();
  return (
    <MantineProvider
      theme={{
        color: "white",
        // fontFamily: "'Neonderthaw', cursive",
      }}
    >
      <Box
        sx={{
          background: "#04250b",
          height: "100vh",
          overflow: "scroll",
        }}
      >
        <Component {...pageProps} />
      </Box>
    </MantineProvider>
  );
}

export default MyApp;

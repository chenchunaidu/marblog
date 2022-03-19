import "../styles/globals.css";
import { MantineProvider, Box, useMantineTheme, Group } from "@mantine/core";

function MyApp({ Component, pageProps }) {
  const theme = useMantineTheme();
  return (
    <MantineProvider
      theme={{
        color: "white",
        // fontFamily: "'Neonderthaw', cursive",
      }}
    >
      <Group position="center">
        <Box
          sx={{
            background: "#04250b",
            height: "100vh",
            overflow: "scroll",
            maxWidth: "500px",
          }}
        >
          <Component {...pageProps} />
        </Box>
      </Group>
    </MantineProvider>
  );
}

export default MyApp;

import { BackgroundImage, Center, Text, Box } from "@mantine/core";
import { useHover } from "@mantine/hooks";

export default function CustomBackgroundImage({ imageUrl, children }) {
  const { hovered, ref } = useHover();

  return (
    <Box sx={{ width: "100%" }}>
      <BackgroundImage src={imageUrl} radius="sm">
        <Center p="md" sx={{ minHeight: "200px" }} ref={ref}>
          {children}
        </Center>
      </BackgroundImage>
    </Box>
  );
}

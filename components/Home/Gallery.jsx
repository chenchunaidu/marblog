import React from "react";
import Heading from "../common/heading";
import { Group, Text, AspectRatio } from "@mantine/core";

export default function Gallery() {
  return (
    <Group direction="column" grow sx={{ width: "100%" }} id="walloflove">
      <Heading color="teal">Wall of Love</Heading>
      <iframe
        height="100%"
        src="https://www.youtube.com/embed/z7HY8WAb3Tk"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder={0}
      />
    </Group>
  );
}

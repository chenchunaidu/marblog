import { Group, Text } from "@mantine/core";
import React from "react";

export default function Navbar() {
  return (
    <Group>
      <Text color="teal" variant="link" component="a" size="xl" href="#home">
        Home
      </Text>
      <Text color="teal" variant="link" component="a" size="xl" href="#venue">
        Venue
      </Text>
      <Text
        size="xl"
        color="teal"
        variant="link"
        component="a"
        href="#walloflove"
      >
        Wall of love
      </Text>
    </Group>
  );
}

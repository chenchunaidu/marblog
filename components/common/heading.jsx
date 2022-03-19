import React from "react";
import { Text } from "@mantine/core";

export default function Heading({ children, ...props }) {
  return (
    <Text color="white" weight="bold" sx={{ fontSize: "24px" }} {...props}>
      {children}
    </Text>
  );
}

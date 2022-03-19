import React from "react";
import Heading from "../common/heading";
import { Group, Text, AspectRatio } from "@mantine/core";

export default function TimeAndVenue() {
  return (
    <Group direction="column" id="venue">
      <Heading color="teal">Time and venue</Heading>
      <Group direction="column" spacing={0}>
        <Text color="dimmed" size="xl" weight="bold">
          Time
        </Text>
        <Text color="white" size="lg">
          Mar 26th 2022 11:30 A.M
        </Text>
      </Group>
      <Group direction="column" spacing={0} grow>
        <Text color="dimmed" size="xl" weight="bold">
          Venue
        </Text>
        <Text color="white" size="lg" mb="lg">
          2/B, High Court Colony, Vanasthalipuram, Hyderabad, Telangana 500070
        </Text>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3063874233135!2d-74.04668908358428!3d40.68924937933441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sru!4v1644262070010!5m2!1sen!2sru"
          title="Google map"
          frameBorder="0"
        />
      </Group>
    </Group>
  );
}

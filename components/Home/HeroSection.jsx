import { Button, Group, SimpleGrid } from "@mantine/core";
import Heading from "../common/heading";
import CustomBackgroundImage from "../common/CustomBackgroundImage";

export default function HeroSection() {
  return (
    <Group direction="column" align="center" sx={{ width: "100%" }} id="home">
      <SimpleGrid align="center" spacing="xs" sx={{ width: "100%" }}>
        <CustomBackgroundImage imageUrl="https://shaadiwish.com/blog/wp-content/uploads/2020/05/sikh-wedding-portrait.jpg"></CustomBackgroundImage>
        <CustomBackgroundImage imageUrl="https://images.unsplash.com/photo-1610276347233-2ab70fc71da8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGluZGlhbiUyMGJyaWRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60">
          <Heading>Bride name</Heading>
        </CustomBackgroundImage>
        <CustomBackgroundImage imageUrl="https://i.pinimg.com/564x/8f/44/b1/8f44b1d911b0ae8e6ba8857763c18a7a.jpg">
          <Heading>Groom name</Heading>
        </CustomBackgroundImage>
        <CustomBackgroundImage imageUrl="https://i.pinimg.com/474x/2c/3e/13/2c3e137221b1b054cf796ac5962696dc.jpg"></CustomBackgroundImage>
        <Button color="teal" size="xl">
          Wish Couple
        </Button>
      </SimpleGrid>
    </Group>
  );
}

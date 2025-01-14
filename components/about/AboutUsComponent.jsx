import React from "react";
import Link from "next/link";
import classes from "./AboutUsComponent.module.css";
import { Box, Button, Flex, Text, Title } from "@mantine/core";

export default function AboutUsComponent({ item }) {
  const { headline, content } = item;

  return (
    <Box pb={20} style={{ backgroundColor: "#F1F3F4" }}>
      <Title ta={"center"} order={2}>
        {headline}
      </Title>
      <Text
        mt={50}
        ta={"center"}
        className={classes.aboutContent}
        mx={{ base: "5%", sm: "10%", lg: "20%" }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <Flex justify={"center"}>
        <Link href={"/contact"}>
          <Button variant="outline" color="red" size="lg" radius="xs">
            <Text fw={700}>Contact Us Now</Text>
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}

import { Box, Title } from "@mantine/core";
import React from "react";

export default function BlogsComponent({ item }) {
  const { headline } = item;
  return (
    <Box mb={100}>
      <Title ta={"center"}>{headline}</Title>
    </Box>
  );
}

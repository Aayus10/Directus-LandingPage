import { Flex, Loader } from "@mantine/core";
import React from "react";

export default function LoaderComponent() {
  return (
    <Flex justify={"center"} mt={50}>
      <Loader color="rgba(13, 6, 20, 1)" />
    </Flex>
  );
}

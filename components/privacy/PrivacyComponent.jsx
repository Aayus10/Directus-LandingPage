"use client";
import React from "react";
import Privacy from "./Privacy";
import { Box } from "@mantine/core";
const pageId = "93023385-f574-4040-9ead-42b717db2015";
import { useFetchBlocks } from "@/hooks/useFetchBlocks";
import LoaderComponent from "../loading/LoaderComponent";

export default function PrivacyComponent() {
  const {
    error,
    isLoading,
    data: blocks,
  } = useFetchBlocks("privacypolicyData", pageId);

  if (isLoading) return <LoaderComponent />;
  if (error) return <p>An error has occurred: {error.message}</p>;
  console.log(blocks);

  const renderBlock = (block) => {
    const { item, collection } = block;

    switch (collection) {
      case "block_richtext":
        return <Privacy key={item.tagline} item={item} />;
      default:
        return null;
    }
  };

  return (
    <Box>
      {blocks.length > 0 ? blocks.map(renderBlock) : <p>No data available</p>}
    </Box>
  );
}

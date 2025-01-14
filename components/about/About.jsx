"use client";

import React from "react";
import { Box } from "@mantine/core";
import AboutUsComponent from "./AboutUsComponent";
import { useFetchBlocks } from "@/hooks/useFetchBlocks";
import LoaderComponent from "../loading/LoaderComponent";

const pageId = "2a62887e-2384-4bd2-a919-7665d85fed07";

export default function About() {
  const {
    error,
    isLoading,
    data: blocks,
  } = useFetchBlocks("aboutData", pageId);

  if (isLoading) return <LoaderComponent />;
  if (error) return <p>An error has occurred: {error.message}</p>;
  const renderBlock = (block) => {
    const { item, collection } = block;

    switch (collection) {
      case "block_richtext":
        return <AboutUsComponent key={item.tagline} item={item} />;
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

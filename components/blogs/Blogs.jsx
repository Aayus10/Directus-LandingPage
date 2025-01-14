"use client";

import React from "react";
import { Box } from "@mantine/core";
import { useFetchBlocks } from "@/hooks/useFetchBlocks";
import LoaderComponent from "../loading/LoaderComponent";
import BlogsComponent from "./BlogsComponent";
import { NewsLetterPage } from "../home/newsletter/NewsLetterPage";

const pageId = "1ce02298-817a-46bc-ac92-6a6c10c20f88";

export default function Blogs() {
  const { error, isLoading, data: blocks } = useFetchBlocks("blogData", pageId);

  if (isLoading) return <LoaderComponent />;
  if (error) return <p>An error has occurred: {error.message}</p>;
  const renderBlock = (block) => {
    const { item, collection } = block;

    switch (collection) {
      case "block_posts":
        return <BlogsComponent key={item.tagline} item={item} />;
      case "block_form":
        return <NewsLetterPage key={item.tagline} item={item} />;
      default:
        return null;
    }
  };

  return (
    <Box mih={"100vh"} style={{ backgroundColor: "#F1F3F4" }}>
      {blocks.length > 0 ? blocks.map(renderBlock) : <p>No data available</p>}
    </Box>
  );
}

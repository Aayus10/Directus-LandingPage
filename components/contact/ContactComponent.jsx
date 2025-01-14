"use client";
import React from "react";
import { Box } from "@mantine/core";
import ContactForm from "./ContactForm";
const pageId = "9821199f-4b05-49fb-8407-fbfe9b866ef0";
import LoaderComponent from "../loading/LoaderComponent";
import { useFetchBlocks } from "@/hooks/useFetchBlocks";

export default function ContactComponent() {
  const {
    error,
    isLoading,
    data: blocks,
  } = useFetchBlocks("contactpageData", pageId);

  if (isLoading) return <LoaderComponent />;
  if (error) return <p>An error has occurred: {error.message}</p>;

  const renderBlock = (block) => {
    const { item, collection } = block;

    switch (collection) {
      case "block_form":
        return <ContactForm key={item.tagline} item={item} />;
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

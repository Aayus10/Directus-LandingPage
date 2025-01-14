"use client";

import React from "react";
import { Box } from "@mantine/core";
import { WhyUsPage } from "./whyus/WhyUsPage";
import PricingPage from "./pricing/PricingPage";
import { useQuery } from "@tanstack/react-query";
import Intro from "@/components/home/intro/Intro";
import fetchHomeInfo from "@/services/fetchHomeInfo";
import { NewsLetterPage } from "./newsletter/NewsLetterPage";
import LoaderComponent from "../loading/LoaderComponent";
import { useFetchBlocks } from "@/hooks/useFetchBlocks";
const pageId = "636dc283-e634-4d5d-aada-e6743db46036";

export default function HomePageContent() {
  const {
    isLoading,
    error,
    data: blocks,
  } = useFetchBlocks("homepageData", pageId);

  if (isLoading) return <LoaderComponent />;
  if (error) return <p>An error has occurred: {error.message}</p>;

  const renderBlock = (block) => {
    const { item, collection } = block;

    switch (collection) {
      case "block_hero":
        return <Intro key={item.tagline} item={item} />;
      case "block_richtext":
        return <WhyUsPage key={item.tagline} item={item} />;
      case "block_pricing":
        return <PricingPage key={item.tagline} item={item} />;
      case "block_form":
        return <NewsLetterPage key={item.tagline} item={item} />;
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

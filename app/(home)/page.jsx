import HomePageContent from "@/components/home/HomePageContent";
import React, { Suspense } from "react";

export const metadata = {
  title: "Home",
  description: "Directus is a great choice for your headless CMS.",
};

export default function HomePage() {
  return (
    <div>
      <HomePageContent />
    </div>
  );
}

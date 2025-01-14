import { Header } from "@/components/header/Header";
import LoaderComponent from "@/components/loading/LoaderComponent";
import CustomMantineProvider from "@/providers/MantineProvider";
import CustomQueryProvider from "@/providers/QueryProvider";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
import { Suspense } from "react";

export const metadata = {
  title: "Home",
  description: "Directus is a great choice for your headless CMS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CustomMantineProvider>
          <CustomQueryProvider>
            <Notifications />
            <Header />
            <Suspense fallback={<LoaderComponent />}>{children}</Suspense>
          </CustomQueryProvider>
        </CustomMantineProvider>
      </body>
    </html>
  );
}

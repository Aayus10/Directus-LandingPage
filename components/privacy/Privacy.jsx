import {
  Box,
  Flex,
  Text,
  Paper,
  Title,
  Button,
  ScrollArea,
} from "@mantine/core";
import jsPDF from "jspdf";
import React, { useRef } from "react";
import classes from "./Privacy.module.css";
import { IconDownload } from "@tabler/icons-react";

export default function Privacy({ item }) {
  const { headline, content } = item;

  const contentRef = useRef();

  const downloadPDF = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: "a4",
    });
    const pageWidth = 595.28; // A4 width in points (px at 72 DPI)
    const pageHeight = 841.89; // A4 height in points

    doc.html(contentRef.current, {
      callback: function (doc) {
        doc.save("content.pdf");
      },
      autoPaging: true,
      x: 20,
      y: 20,
      html2canvas: {
        scale: 0.5, // Adjust scaling to fit the width of the page
        width: pageWidth - 20, // Content width fits within page width
        height: pageHeight - 20, // Content height fits within page height
      },
    });
  };

  return (
    <Box style={{ backgroundColor: "#F1F3F4" }}>
      <Title ta={"center"} order={2}>
        {headline}
      </Title>
      <Flex justify={"center"}>
        <Box>
          <ScrollArea w={{ base: 280, sm: 550, md: 850 }}>
            <Paper
              p={20}
              mt={30}
              withBorder
              shadow="xl"
              className={classes.policy}
            >
              <Flex justify={"center"}>
                <Button className={classes.downloadbtn} onClick={downloadPDF}>
                  Download PDF <IconDownload />
                </Button>
              </Flex>
              <Text
                ref={contentRef}
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </Paper>
          </ScrollArea>
        </Box>
      </Flex>
    </Box>
  );
}

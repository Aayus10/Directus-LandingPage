import {
  Box,
  Card,
  Flex,
  Text,
  Badge,
  Image,
  Stack,
  Title,
  Button,
} from "@mantine/core";
import React from "react";
import classes from "./PricingPage.module.css";
import { IconGauge } from "@tabler/icons-react";

export default function PricingDetail({ card }) {
  const {
    title,
    price,
    badge,
    features,
    description,
    button: { label },
  } = card;

  const featureList = features.map((feature) => (
    <Flex gap={"md"} key={feature}>
      <IconGauge
        size={24}
        stroke={1.5}
        color="black"
        className={classes.icon}
      />
      <Text fz={"lg"} size="xs">
        {feature}
      </Text>
    </Flex>
  ));

  return (
    <Card mt={20} withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image
          alt="Tesla Model S"
          src="https://th.bing.com/th/id/OIP.Z_cc1YKEbxlRo25eF5jdNgHaE_?w=1000&h=673&rs=1&pid=ImgDetMain"
        />
      </Card.Section>
      <Stack mih={120} mt="md">
        <Title fw={700} order={2}>
          {title}
        </Title>
        <Text fz="lg">{description}</Text>

        {badge ? <Badge variant="outline">{badge}</Badge> : <></>}
      </Stack>
      <Card.Section className={classes.section} mt="md">
        <Text fw={700}>Features</Text>
        <Box mih={120} mt={10} gap={8}>
          <Flex direction={"column"} gap={"md"}>
            {featureList}
          </Flex>
        </Box>
      </Card.Section>
      <Card.Section className={classes.section}>
        <Flex
          align={"center"}
          justify={"center"}
          gap={{ md: "xl" }}
          direction={{ base: "column", md: "row" }}
        >
          <div>
            <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
              {price}
            </Text>
          </div>
          <br />
          <Button>{label}</Button>
        </Flex>
      </Card.Section>
    </Card>
  );
}

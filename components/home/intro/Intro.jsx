import Link from "next/link";
import classes from "./Intro.module.css";
import { Button, Container, Flex, Text, Title } from "@mantine/core";

export default function Intro({ item }) {
  const {
    headline,
    description,
    button_group: { buttons },
  } = item;

  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div>
            <Title ta={{ base: "center", sm: "left" }} c={"white"}>
              {headline}
            </Title>
            <Text
              mt={30}
              className={classes.description}
              ta={{ base: "center", sm: "left" }}
            >
              {description}
            </Text>

            <Flex
              mt={40}
              gap={"xl"}
              align={"center"}
              direction={{ base: "column", sm: "row" }}
            >
              {buttons.map((button) => {
                const { id, label, variant } = button;
                return (
                  <Link key={id} href={`${button?.page?.permalink}`}>
                    <Button variant={`${variant}`}>
                      <Text fw={700}>{label}</Text>
                    </Button>
                  </Link>
                );
              })}
            </Flex>
          </div>
        </div>
      </Container>
    </div>
  );
}

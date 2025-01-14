import { Button, Container, Text, Title } from "@mantine/core";
import { Dots } from "./Dots";
import classes from "./WhyUsPage.module.css";

export function WhyUsPage({ item }) {
  const { headline, content } = item;
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title ta={"center"}>{headline}</Title>

        <Container p={0} size={600}>
          <Text
            mt={30}
            size="lg"
            className={classes.description}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </Container>
      </div>
    </Container>
  );
}

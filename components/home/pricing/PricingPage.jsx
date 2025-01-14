import { Box, Flex, Title } from "@mantine/core";
import PricingDetail from "./PricingDetail";

export default function PricingPage({ item }) {
  const { headline, pricing_cards } = item;

  return (
    <Box pb={50} style={{ backgroundColor: "#F1F3F4" }}>
      <Title mx={10} fz={{ base: "h2", sm: "h1" }} pt={50} ta={"center"}>
        {headline}
      </Title>

      <Flex
        mt={30}
        gap={"xl"}
        justify={"center"}
        direction={{ base: "column", md: "row" }}
        mx={{ base: "5%", sm: "25%", md: "15%" }}
      >
        {pricing_cards.map((card) => {
          return <PricingDetail key={card.id} card={card} />;
        })}
      </Flex>
    </Box>
  );
}

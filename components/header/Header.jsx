"use client";
import { Group, Stack, Title, Burger, Container } from "@mantine/core";

import Link from "next/link";
import { useState } from "react";
import classes from "./Header.module.css";
import { useDisclosure } from "@mantine/hooks";
import { Icon3dCubeSphere } from "@tabler/icons-react";

const links = [
  { link: "/", label: "Home" },
  { link: "/contact", label: "Contact" },
  { link: "/about", label: "About Us" },
  { link: "/privacy", label: "Privacy Policy" },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState("");

  const items = links.map((link) => (
    <Link
      href={link.link}
      key={link.label}
      className={classes.link}
      data-active={active === link.link ? "true" : undefined}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group gap={"sm"}>
          <Icon3dCubeSphere size={28} />
          <Title order={2}>Directus</Title>
        </Group>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />

        {opened && <Stack mt={300}>{items}</Stack>}
      </Container>
    </header>
  );
}

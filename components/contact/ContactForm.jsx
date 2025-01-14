import {
  Box,
  Flex,
  Title,
  Button,
  Select,
  Textarea,
  TextInput,
  Paper,
} from "@mantine/core";
import React from "react";
import { useValidateForm } from "@/hooks/useValidateForm";
import { useManageEnquiry } from "@/hooks/useManageEnquiry";

export default function ContactForm({ item }) {
  const {
    headline,
    form: { title, fields },
  } = item;

  const form = useValidateForm();
  const mutation = useManageEnquiry("Thank you for contacting us.");

  const handleSubmit = (values) => {
    form.reset();
    mutation.mutate(values);
  };

  const renderInputField = (field) => {
    const { id, type, label, name, placeholder } = field;
    switch (type) {
      case "text":
        return (
          <TextInput
            mt={20}
            key={id}
            label={label}
            name={name}
            placeholder={placeholder}
            {...form.getInputProps(name)}
          />
        );
      case "select":
        return (
          <Select
            mt={20}
            key={id}
            label={label}
            name={name}
            placeholder={placeholder}
            {...form.getInputProps(name)}
            data={["Sales", "Support"]}
          />
        );
      case "textarea":
        return (
          <Textarea
            mt={20}
            key={id}
            label={label}
            name={name}
            placeholder={placeholder}
            {...form.getInputProps(name)}
          />
        );
      default:
        return null;
    }
  };
  return (
    <Box pb={100} style={{ backgroundColor: "#F1F3F4" }}>
      <Title ta={"center"} order={2}>
        {headline}
      </Title>
      <Title ta={"center"} mt={30} order={3}>
        {title}
      </Title>

      <Paper
        mt={20}
        px={20}
        py={10}
        withBorder
        mx={{ base: "5%", sm: "15%", md: "25%", lg: "30%" }}
        shadow="xl"
      >
        <form onSubmit={form.onSubmit(handleSubmit)}>
          {fields.map((field) => renderInputField(field))}
          <Flex mt={30} justify={"center"}>
            <Button radius={"sm"} type="submit">
              Submit
            </Button>
          </Flex>
        </form>
      </Paper>
    </Box>
  );
}

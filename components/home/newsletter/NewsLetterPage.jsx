import { Paper, Title, Button, TextInput } from "@mantine/core";
import { useSubscriptionMutation } from "@/hooks/useSubscriptionMutation";
import { useValidateForm } from "@/hooks/useValidateForm";

export function NewsLetterPage({ item }) {
  const {
    headline,
    form: { success_message },
  } = item;
  const mutation = useSubscriptionMutation(success_message);
  const form = useValidateForm(["name", "email"]);

  const handleSubmit = (values) => {
    form.reset();
    mutation.mutate(values);
  };

  return (
    <Paper py={50} withBorder mx={"20%"}>
      <Title order={2} mb={10} ta={"center"}>
        {headline}
      </Title>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          required
          mt={30}
          w={"50%"}
          mx={"25%"}
          label="Name"
          {...form.getInputProps("name")}
        />
        <br />
        <TextInput
          required
          w={"50%"}
          mx={"25%"}
          label="Email"
          {...form.getInputProps("email")}
        />
        <br />
        <Button w={"50%"} mx={"25%"} type="submit" radius={"sm"}>
          Subscribe
        </Button>
      </form>
    </Paper>
  );
}

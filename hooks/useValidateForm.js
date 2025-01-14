import { useForm } from "@mantine/form";

export const useValidateForm = () => {
  return useForm({
    mode: "controlled",
    initialValues: {
      email: "",
      name: "",
      "first-name": "",
      "last-name": "",
      comments: "",
      department: "",
    },
    validate: {
      "first-name": (value) => {
        if (!value) return "First Name is required.";
      },
      "last-name": (value) => {
        if (!value) return "Last Name is required.";
      },
      department: (value) => {
        if (!value) return "Department is required";
      },
      name: (value) =>
        value && value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      comments: (value) => {
        if (!value) return "Enter message please.";
      },
    },
  });
};

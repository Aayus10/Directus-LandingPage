import { useForm } from "@mantine/form";

export const useValidateForm = (requiredFields = []) => {
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
        if (requiredFields.includes("first-name") && !value) {
          return "First Name is required.";
        }
      },
      "last-name": (value) => {
        if (requiredFields.includes("last-name") && !value) {
          return "Last Name is required.";
        }
      },
      department: (value) => {
        if (requiredFields.includes("department") && !value) {
          return "Department is required";
        }
      },
      name: (value) => {
        if (requiredFields.includes("name") && value && value.length < 2) {
          return "Name must have at least 2 letters";
        }
      },
      email: (value) => {
        if (requiredFields.includes("email") && !/^\S+@\S+$/.test(value)) {
          return "Invalid email";
        }
      },
      comments: (value) => {
        if (requiredFields.includes("comments") && !value) {
          return "Enter message please.";
        }
      },
    },
  });
};

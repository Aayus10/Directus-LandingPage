import { notifications } from "@mantine/notifications";

export const useDisplaySuccessNotification = (title, message) =>
  notifications.show({
    color: "green",
    position: "top-right",
    message: message,
    title: title,
  });

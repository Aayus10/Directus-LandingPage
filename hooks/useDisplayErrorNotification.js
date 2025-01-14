import { notifications } from "@mantine/notifications";

export const useDisplayErrorNotification = (title, message) =>
  notifications.show({
    color: "green",
    position: "top-right",
    message: message,
    title: title,
  });

import { useMutation } from "@tanstack/react-query";
import { useDisplayErrorNotification } from "./useDisplayErrorNotification";
import { useDisplaySuccessNotification } from "./useDisplaySuccessNotification";

export const useManageEnquiry = (successMessage) => {
  const handleEnquiry = (formData) => {
    console.log("Form Data Submitted:", formData);
  };

  return useMutation({
    mutationFn: handleEnquiry,
    onSuccess: () => {
      // Display success notification
      useDisplaySuccessNotification("Message Received", successMessage);
    },
    onError: () => {
      // Display error notification
      useDisplayErrorNotification("Subscription failed", errorMessage);
    },
  });
};

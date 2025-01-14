import { useMutation } from "@tanstack/react-query";
import { useDisplayErrorNotification } from "./useDisplayErrorNotification";
import { useDisplaySuccessNotification } from "./useDisplaySuccessNotification";

export const useSubscriptionMutation = (successMessage) => {
  const simulateSubscription = (formData) => {
    console.log("Form Data Submitted:", formData);
  };

  return useMutation({
    mutationFn: simulateSubscription,
    onSuccess: () => {
      // Display success notification
      useDisplaySuccessNotification("Subscription successful", successMessage);
    },
    onError: () => {
      // Display error notification
      useDisplayErrorNotification("Subscription failed", errorMessage);
    },
  });
};

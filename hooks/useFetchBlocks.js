import fetchHomeInfo from "@/services/fetchHomeInfo";
import { useQuery } from "@tanstack/react-query";

export const useFetchBlocks = (identifier, id) => {
  return useQuery({
    queryKey: [identifier, id],
    queryFn: () => fetchHomeInfo(id),
  });
};

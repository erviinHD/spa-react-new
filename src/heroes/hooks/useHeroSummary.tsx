import { useQuery } from "@tanstack/react-query";
import { getSummaryAccion } from "../actions/get-summary.action";

export const useHeroSummary = () => {
  return useQuery({
    queryKey: ["summary-information"],
    queryFn: getSummaryAccion,
    staleTime: 1000 * 60 * 5, //5min
  });
};

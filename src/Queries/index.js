import { useQuery } from '@vue/apollo-composable';

export const useFetch = (query) => {
  const { result, loading, error } = useQuery(query);
  return { result, loading, error };
};

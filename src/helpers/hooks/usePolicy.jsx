// src/hooks/usePerfil.js
import { useQuery, useMutation } from "@tanstack/react-query";
import api from '@helpers/utils/mdmAPI';
import { wrapResponse } from '@helpers/utils/httpUtils';

const defaultProps = {
  refetchOnMount: false,      // refetch cada vez que el componente se monta
  refetchOnWindowFocus: false, // refetch cuando vuelves a la pestaña
  staleTime: 0,   
}

// const wrapResponse = (response) => {
//   const content = Array.isArray(response.data) ? {...response?.data[0], timestamp: Date.now()} : response.data;
//   return content;
// }

export function useReadPolicies() {
  return useQuery({
    queryKey: ['policy'],
    queryFn: async () => {
      const response = await api.get('/policy');
      return wrapResponse(response)
    },
    ...defaultProps
  });
}


export function useUpdateDetailPolicy() {
  return useMutation({
    mutationFn: async (payload) => {
      const response = await api.put("/policy", payload);
      return wrapResponse(response)
    },
    ...defaultProps   
  });
}
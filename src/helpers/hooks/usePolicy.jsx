// src/hooks/usePerfil.js
import { useQuery, useMutation } from "@tanstack/react-query";
import api from '@helpers/utils/mdmAPI';
import { wrapResponse } from '@helpers/utils/httpUtils';

const defaultProps = {
  refetchOnMount: false,      // refetch cada vez que el componente se monta
  refetchOnWindowFocus: false, // refetch cuando vuelves a la pestaña
  staleTime: 0,   
}


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

export function useAddPolicy() {
  return useMutation({
    mutationFn: async (payload) => {
      const response = await api.post("/device", payload);
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

export function useDeletePolicy() {
  return useMutation({
    mutationFn: async (payload) => {
      const response = await api.delete("/policy", {data : payload});
      return wrapResponse(response)
    },
    ...defaultProps   
  });
}

// #####


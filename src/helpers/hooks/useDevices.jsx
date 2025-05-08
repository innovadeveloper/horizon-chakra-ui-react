// src/hooks/usePerfil.js
import { useQuery, useMutation } from "@tanstack/react-query";
import api from '@helpers/utils/mdmAPI';
import { wrapResponse } from '@helpers/utils/httpUtils';

const defaultProps = {
  refetchOnMount: false,      // refetch cada vez que el componente se monta
  refetchOnWindowFocus: false, // refetch cuando vuelves a la pestaña
  staleTime: 0,   
}

export function useReadDevices() {
  return useQuery({
    queryKey: ['devices'],
    queryFn: async () => {
      const response = await api.get('/device');
      return wrapResponse(response)
    },
    ...defaultProps
  });
}


export function useUpdatePolicyDevice() {
  return useMutation({
    mutationFn: async (payload) => {
      const response = await api.put("/device", payload);
      // return Array.isArray(response.data) ? response.data[0] : response.data;
      return wrapResponse(response)
    },
    ...defaultProps   
  });
}


export function useDeleteDevice() {
  return useMutation({
    mutationFn: async (payload) => {
      const response = await api.delete("/device", {data : payload});
      return wrapResponse(response)
    },
    ...defaultProps   
  });
}
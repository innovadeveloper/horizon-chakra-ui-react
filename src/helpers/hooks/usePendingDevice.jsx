// src/hooks/usePerfil.js
import { useQuery, useMutation } from "@tanstack/react-query";
import api from '@helpers/utils/mdmAPI';
import { wrapResponse } from '@helpers/utils/httpUtils';

const defaultProps = {
  refetchOnMount: false,      // refetch cada vez que el componente se monta
  refetchOnWindowFocus: false, // refetch cuando vuelves a la pestaña
  staleTime: 0,   
}



export function useUpdateConfirmPendingDevice() {
  return useMutation({
    mutationFn: async (payload) => {
      const response = await api.put("/pending-device", payload);
      return wrapResponse(response)
    },
    ...defaultProps   
  });
}
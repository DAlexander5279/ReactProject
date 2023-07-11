import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/apiToClient"

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);

    useEffect(() => {
        const controller = new AbortController();
    
        apiClient
          .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
          .then((res) => {
            setData(res.data.results);
          })
    
        return () => controller.abort();
      }, deps ? [...deps] : []);
    
      return { data };
    };
    
    export default useData;
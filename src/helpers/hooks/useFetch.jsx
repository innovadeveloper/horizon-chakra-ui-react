import { useState, useEffect } from 'react';
// import {  }
import { useAuth } from "@helpers/hooks/useAuth";

/**
 * Hook personalizado para realizar solicitudes GET o POST
 *
 * @param {string} url - La URL para la solicitud
 * @param {string} method - El método HTTP (GET o POST)
 * @param {object} body - Cuerpo de la solicitud (para POST)
 * @param {object} headers - Encabezados adicionales
 * @returns {object} - Un objeto con los estados de la solicitud: loading, data, error
 */
const useFetch = (url, method = 'GET', body = null, headers = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { getAccessTokenInvoke, isAuthenticated, login, logout, accessToken } = useAuth();

    useEffect(() => {
        // Evitar hacer la solicitud si ya hay datos
        if (data !== null) return;


        // Función de solicitud
        const fetchData = async () => {

            const token = await getAccessTokenInvoke();
            // console.log(`access token ${token}`)

            setLoading(true); // Marca como cargando
            setError(null); // Limpiar el error anterior

            const options = {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    ...headers, // Agrega los encabezados adicionales
                },
                body: method === 'POST' && body ? JSON.stringify(body) : null, // Agregar el cuerpo solo para POST
            };
            
            // console.log('options ', options);

            try {
                const response = await fetch(url, options);

                if (!response.ok) {
                    throw new Error(`Error: ${response.status} - ${response.statusText}`);
                }

                const result = await response.json(); // Parsear la respuesta a JSON
                setData(Array.isArray(result) ? result[0] : result); // Guardar los datos en el estado
            } catch (err) {
                setData(err); // Guardar los datos en el estado
                setError(err.message); // Guardar el error
            } finally {
                setLoading(false); // Terminar la carga
            }
        };

        fetchData();
    }, [url, method, body, headers, data]); // Dependencias: Vuelve a ejecutar si cambian

    return { data, loading, error };
};

export default useFetch;

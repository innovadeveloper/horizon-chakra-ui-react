
// import {  }
// import { useAuth } from "@helpers/hooks/useAuth";

// utils/clientFetch.js
const clientFetch = async (url, method = 'GET', body = null, headers = {}) => {
    try {
        const response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headers
            },
            body: method === 'POST' || method === 'PUT' ? JSON.stringify(body) : null
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error ${response.status}: ${errorText}`);
        }

        const result = await response.json();
        return Array.isArray(result) ? result[0] : result;
    } catch (error) {
        console.error("clientFetch error:", error);
        throw error;
    }
};

export default clientFetch;
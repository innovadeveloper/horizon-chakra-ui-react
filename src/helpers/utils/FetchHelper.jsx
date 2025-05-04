export default class FetchHelper {
    constructor(url) {
        this.url = url;
        this.method = 'GET'; // Default method
        this.headers = {
            'Content-Type': 'application/json',
        };
        this.body = null;
    }

    // Establece el método HTTP
    setMethod(method) {
        this.method = method;
        return this; // Permite encadenar métodos
    }

    // Establece el cuerpo de la solicitud (para POST/PUT)
    setBody(body) {
        this.body = JSON.stringify(body);
        return this; // Permite encadenar métodos
    }

    // Agrega un encabezado adicional, como Authorization
    setHeader(name, value) {
        this.headers[name] = value;
        return this; // Permite encadenar métodos
    }

    // Realiza la solicitud y devuelve la respuesta
    async send() {
        try {
            const options = {
                method: this.method,
                headers: this.headers,
                body: this.body,
            };
            console.log(`options ${JSON.stringify(options)}`);

            // Si el método es GET, no se incluye body
            if (this.method === 'GET' || this.method === 'DELETE') {
                delete options.body;
            }

            const response = await fetch(this.url, options);

            // Verifica si la respuesta fue exitosa
            if (!response.ok) {
                throw new Error(`Error ${ response.status }: ${ response.statusText }`);
            }

            // Si la respuesta es exitosa, devuelve el JSON
            return await response.json();
        } catch (error) {
            // console.log(JSON.stringify(error))
            console.error('Error en la solicitud:', error);
            throw error;
        }
    }
}

// export {Fetch}
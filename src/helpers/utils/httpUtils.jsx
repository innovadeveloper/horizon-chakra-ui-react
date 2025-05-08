const wrapResponse = (response) => {
    const content = Array.isArray(response.data) ? { ...response?.data[0], timestamp: Date.now() } : response.data;
    return content;
}
export {wrapResponse};

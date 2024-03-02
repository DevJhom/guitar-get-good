import axios from 'axios';

const serviceUrl = 'http://localhost:3000';

export const getCurrentKey = async () => {
    try {
        const response = await axios.get(`${serviceUrl}/currentKey`);
        return response.data;
    } catch(error){
        console.log("error:", error);
        return null;
    }
}

export const updateCurrentKey = async (key: string) => {
    try {
        const response = await axios.put(`${serviceUrl}/currentKey`, { key });
        return response.data;
    } catch(error){
        console.log("error:", error);
        return null;
    }
}

export const getScale = async (key: string) => {
    try {
        const response = await axios.get(`${serviceUrl}/${encodeURIComponent(key)}`);
        return response.data;
    } catch(error){
        console.log("error:", error);
        return null;
    }
}

export const updateScale = async (key: string, E: string[], A: string[], D: string[], G: string[], B: string[], e: string[]) => {
    try {
        const response = await axios.put(`${serviceUrl}/${encodeURIComponent(key)}/`, { E, A, D, G, B, e});
        return response.data;
    } catch(error){
        console.log("error:", error);
        return null;
    }
}
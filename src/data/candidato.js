import { clienteAxios } from "../config/axios";

const token = localStorage.getItem('AUTH_TOKEN');

export async function getCandidatos() {
    try {
        const { data } = await clienteAxios('/api/candidatos', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return data.candidatos;
    } catch (error) {
        throw error;
    }
};

export async function getCandidato(id) {
    try {
        const { data } = await clienteAxios(`/api/candidatos/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return data.candidato;
    } catch (error) {
        throw error;
    }
};

export async function createCandidato(datos) {
    try {
        const { data } = await clienteAxios.post('/api/candidatos', datos, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return data.message;
    } catch (error) {
        throw error;
    }
};

export async function updateCandidato(id, datos) {
    try {
        const { data } = await clienteAxios.put(`/api/candidatos/${id}`, datos, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return data.message;
    } catch (error) {
        throw error;
    }
};

export async function deleteCandidato(id) {
    try {
        const { data } = await clienteAxios.delete(`/api/candidatos/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return data.message;
    } catch (error) {
        throw error;
    }
};

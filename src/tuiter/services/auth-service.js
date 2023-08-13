import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const USERS_URL = `${API_BASE}/users`;

const api = axios.create({ withCredentials: true });

export const login = async ({ username, password }) => {
    try {
        const response = await api.post(`${USERS_URL}/login`, {
            username,
            password,
        });
        const user = response.data;
        return user;
    } catch (e) {
        if (e.response.status === "404") {
            return undefined;
        }
    }
};

export const logout = async () => {
    const response = await api.post(`${USERS_URL}/logout`);
    return response.data;
};
export const profile = async () => {
    const response = await api.post(`${USERS_URL}/profile`);
    return response;
};
export const updateUser = async (user) => {
    const response = await api.put(`${USERS_URL}/${user._id}`, user);
    return response.data;
};
export const register = async (data) => {
    try {
        const response = await api.post(`${USERS_URL}/register`, data);
        return response.data;
    } catch (e) {
        if (e.response.status === "409") {
            return undefined;
        }
    }
};

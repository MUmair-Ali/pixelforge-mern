import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000/api/',
    headers: {
        'Content-Type': 'application/json',
    },
})

export const registerUser = async (user) => {
    try {

        console.log("Register payload:", user);
        const response = await api.post('auth/register', user);
        return response;

    } catch (error) {
       if (error.response) {
            throw error.response.data;
        }
       return error; 
    }
}

export const loginUser = async (user) => {
    try {
        const response = await api.post('auth/login', user);
        return response;
    } catch (error) {
       if (error.response) {
            throw error.response.data;
        }
       throw error; 
    }
}

export const sendContactData = async (user) => {
    try {
        const response = await api.post('form/contact', user);
        return response;
    } catch (error) {
        if (error.response) {
            throw error.response.data;
        }
       throw error; 
    }
}

export const getUserData = async (token) => {
    try {
        const response = await api.get('auth/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
       if (error.response) {
            throw error.response.data;
        }
       throw error; 
    }
}

export const getServices = async () => {
    try {
        const response = await api.get('data/services');

        return response.data;
    } catch (error) {
        if (error.response) {
            throw error.response.data;
        }
       throw error; 
    }
}


export const getUsersData = async (token) => {
    try {
        const response = await api.get('admin/users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
       if (error.response) {
            throw error.response.data;
        }
       throw error; 
    }
}

export const getUsersCounts = async (token) => {
    try {
        const response = await api.get('admin/users/count', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
       if (error.response) {
            throw error.response.data;
        }
       throw error; 
    }
}

export const updateUserData = async (token, id, user) => {
    try {
        const response = await api.patch(`admin/users/edit/${id}`, user, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
       if (error.response) {
            throw error.response.data;
        }
       throw error; 
    }
}


export const deleteUserData = async (token, id) => {
    try {
        const response = await api.delete(`admin/users/delete/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
       if (error.response) {
            throw error.response.data;
        }
       throw error; 
    }
}


export const getContactsData = async (token) => {
    try {
        const response = await api.get('admin/contacts', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
       if (error.response) {
            throw error.response.data;
        }
       throw error; 
    }
}

export const getContactsCounts = async (token) => {
    try {
        const response = await api.get('admin/contacts/count', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
       if (error.response) {
            throw error.response.data;
        }
       throw error; 
    }
}

export const updateContactData = async (token, id, user) => {
    try {
        const response = await api.patch(`admin/contacts/edit/${id}`, user, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
       if (error.response) {
            throw error.response.data;
        }
       throw error; 
    }
}

export const deleteContactData = async (token, id) => {
    try {
        const response = await api.delete(`admin/contacts/delete/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
       if (error.response) {
            throw error.response.data;
        }
       throw error; 
    }
}


export const getServicesCounts = async (token) => {
    try {
        const response = await api.get('admin/services/count', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
       if (error.response) {
            throw error.response.data;
        }
       throw error; 
    }
}

export const updateServiceData = async (token, id, user) => {
    try {
        const response = await api.patch(`admin/services/edit/${id}`, user, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
       if (error.response) {
            throw error.response.data;
        }
       throw error; 
    }
}

export const deleteServiceData = async (token, id) => {
    try {
        const response = await api.delete(`admin/services/delete/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
       if (error.response) {
            throw error.response.data;
        }
       throw error; 
    }
}
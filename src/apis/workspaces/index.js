import axios from '@/config/axiosConfig';

export const createWorkspaceRequest = async ({ name, description, token }) => {
    try {
       const response = await axios.post('/workspaces', { name, description}, 
            {
                headers: {
                    'x-access-token': token
                }
            }

       );

    console.log('Response on create workspace request', response);
    return response?.data; 
    } catch (error) {
        console.log('Error is: ', error);
        throw error?.response?.data;
    }
};

export const fetchWorkspaceRequest = async (token) => {
    try {
       const response = await axios.get('/workspace', {
            headers: {
                    'x-access-token': token
            }
    });

    return response; 
    } catch (error) {
        console.log('Error is: ', error);
        throw error?.response?.data;
    }
};
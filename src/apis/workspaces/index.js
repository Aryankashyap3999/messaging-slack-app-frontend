import axios from '@/config/axiosConfig';

export const createWorkspaceRequest = async ({ name, description, token }) => {
  try {
    const response = await axios.post(
      '/workspaces',
      { name, description },
      { headers: { 'x-access-token': token } }
    );

    console.log('Workspace details from client:', name);
    console.log('Response of create workspace request:', response.data);

    return response?.data?.data; // <-- return only the workspace object
  } catch (error) {
    console.log('Error is: ', error);
    throw error?.response?.data;
  }
};


export const fetchWorkspaceRequest = async (token) => {
    try {
       const response = await axios.get('/workspaces', {
            headers: {
                    'x-access-token': token
            }
    });

    return response?.data?.data; 
    } catch (error) {
        console.log('Error is: ', error);
        throw error?.response?.data;
    }
};
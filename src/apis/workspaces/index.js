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

export const fetchWorkspaceDetailsRequest = async ({ workspaceId, token }) => {
    console.log('WOrkspace id ', workspaceId);
    try {
        const response = await axios.get(`/workspaces/${workspaceId}`, {
            headers: {
                'x-access-token': token
            }
        });

        console.log('Fetched workspace is: ', response);

        return response?.data?.data;
    } catch(error) {
        console.log('Error is: ', error);
    }
};

export const deleteWorkspaceRequest = async ({ workspaceId, token}) => {
  try {
    const response = await axios.delete(`/workspaces/${workspaceId}`, {
      headers: {
        'x-access-token': token
      }
    });

    return response?.data?.data;
  } catch (error) {
    console.log('Error is: ',error);
    throw error?.response.data;
  }
};

export const updateWorkspaceRequest = async ({ workspaceId, name, token }) => {
  try {
    const response = await axios.put(
      `/workspaces/${workspaceId}`,
      { name }, 
      {
        headers: {
          'x-access-token': token
        }
      }
    );

    return response?.data?.data;
  } catch (error) {
    console.log('Error is: ', error);
    throw error?.response?.data;
  }
};

export const addChannelToWorkspaceRequest = async ({ workspaceId, channelName, token}) => {
  
  try {
    const response = await axios.put(`/workspaces/${workspaceId}/channels`, {
      channelName
    }, {
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

export const resetJoinCodeRequest = async ({ workspaceId, token }) => {
  try {
    const response = await axios.put(`/workspaces/${workspaceId}/joinCode/reset`, {}, {
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

export const addMemeberToWorkspaceRequest = async ({ workspaceId, token}) => {
  try {
    const response = await axios.put(`/workspaces/${workspaceId}/members`, {}, {
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

export const joinWorkspaceRequest = async ({ workspaceId, joinCode, token}) => {
  console.log('Details are in api : ', workspaceId, joinCode, token);
  try {
    const response = await axios.put(`/workspaces/${workspaceId}/join`, {
      joinCode
    }, {
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
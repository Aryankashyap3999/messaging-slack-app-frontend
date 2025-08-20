import axios from '@/config/axiosConfig';

export const forgetPassword = async ({email}) => {
    const response = await axios.post('/auth/forgot-password', {
        email: email
    });

    return response;
};

export const ressetPassword = async ({token, password}) => {
    const response = await axios.post(`/auth/reset-password/${token}`, {
        password: password
    });

    return response;
};
// BUG-003

/*
export const saveToken = token => localStorage.setItem('user_token', token);
export const getToken = () => localStorage.getItem('token');
export const clearToken = () => localStorage.removeItem('token');
*/

// FIXED:

const TOKEN_KEY = 'user_token';

export const saveToken = token => localStorage.setItem(TOKEN_KEY, token);

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const clearToken = () => localStorage.removeItem(TOKEN_KEY);

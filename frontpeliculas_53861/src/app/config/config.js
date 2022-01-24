export const URL_API_PELICULAS = "http://localhost:3300/api";

export function getToken(){
    const auth = JSON.parse(localStorage.getItem('auth')); // JSON.parse() convierte un string a un objeto.
    return auth.token;
};
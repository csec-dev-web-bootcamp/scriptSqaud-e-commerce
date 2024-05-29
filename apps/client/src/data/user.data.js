import fetcher from "./fetcher";

export async function getUser() {
    try {
        const res = await fetcher.get('/users/me');
        return res.data;
        
    } catch (error) {
        return "error"
    }
}
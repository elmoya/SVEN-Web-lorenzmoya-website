import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000"
axios.defaults.withCredentials = true

export const csrfApi = async (): Promise<any> => {
    try {
        return await axios.get("/sanctum/csrf-cookie", {
            withCredentials: true,
            withXSRFToken: true,
        })
    } catch (error) {
        throw new Error("Error fetching CSRF:" + error)
    }
}

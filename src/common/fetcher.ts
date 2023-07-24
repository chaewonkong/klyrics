import axios from "axios";

export const fetcher = async (url: string) => {
    console.log(url)
    const res = await axios.get(url)
    return res.data
}
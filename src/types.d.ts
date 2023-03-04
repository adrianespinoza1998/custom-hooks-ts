import { AxiosHeaders } from 'axios';
interface Response {
    results: Result[]
}

interface Result {
    id: number;
    name: string;
    image: string;
}

interface DataState {
    loading: boolean;
    data: Result[];
    error: string | null;
}

interface FormLogin {
    email: string;
    password: string;
}

interface Fetch {
    url: string,
    method: string,
    body: object,
    headers?: AxiosHeaders
}
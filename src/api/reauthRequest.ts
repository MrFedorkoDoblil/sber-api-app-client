import axios, { AxiosRequestConfig } from "axios"




export const reauthRequest = async (
    url: string,
    method:  'get' | 'head' |'post' | 'put' | 'patch' | 'delete' = 'get',
    accessToken?: string,
    headers?: Record<string, string>,
    body?: unknown, 
)  => {
    const handleOptions = (accessToken: string | undefined) : 
        [string, AxiosRequestConfig<never>] |
        [string, unknown, AxiosRequestConfig<never>]  => {
        if(method === 'head' || method === 'get'){
            return [
                url,
                {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        ...headers 
                    },
                }
            ]
        } else {
            return [
                url, 
                body, 
                {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        ...headers
                    },
                }
            ]
        }
    }
    const primaryResponse = await axios[method](...(
        [...handleOptions(accessToken)] as [
            string, 
            AxiosRequestConfig<unknown> | undefined, 
            AxiosRequestConfig<unknown> | undefined])
    )
    return primaryResponse.data
}
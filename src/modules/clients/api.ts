import { reauthRequest } from "@/api/reauthRequest"

export const getClients = () => {
    return reauthRequest('https://localhost:3001/company/fake')
}
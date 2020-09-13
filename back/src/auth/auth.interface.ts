export interface Payload {
    id: number,
    contact: string
}
export interface AuthPayload {
    payload: Payload,
    iat: number,
    exp: number
}

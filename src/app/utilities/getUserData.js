import { decodeJwt } from "jose"
import Cookies from "js-cookie"

export const GetUserData = () => {
    const token = Cookies.get("token")
    let user_data = {}
    
    if (token) {
        user_data = decodeJwt(token)
    }

    return user_data
}
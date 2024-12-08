import { decodeJwt } from "jose"
import Cookies from "js-cookie"

export const GetUserData = () => {
    const token = Cookies.get("token")
    let user_data = {}

    if (token) {
        try {
            user_data = decodeJwt(token)
        } catch (err) {
            Cookies.remove("token")
            console.log(err)
        }
    }

    return user_data
}
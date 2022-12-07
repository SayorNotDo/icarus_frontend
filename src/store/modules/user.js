import { login } from "../../api/user";

function saveSessionStorage(response) {
    // login information stored in cookie
    let user = response.data;
}

function clearSessionStorage() {
    loadlStorage.removeItem(TokenKey);
}

export function userLogin(userInfo) {
    console.log("debug user login...");
    let loginUrl = "/login";
    switch (userInfo.authenticate) {
        case "LOCAL":
            loginUrl = "/api/v1/user/login";
            break;
        case "LDAP":
            loginUrl = "/app/v1/user/ldap/login";
            break;
        default:
            loginUrl = "/api/v1/user/login";
    }
    return new Promise((resolve, reject) => {
        login(loginUrl, userInfo)
            .then(response => {
                saveSessionStorage(response);
                resolve(response);
            })
    })
}
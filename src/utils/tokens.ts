
export function getAccessTokenShelter(): string | null {
    return localStorage.getItem('access_token_shelter');
}

export function getAccessTokenUser(): string | null {
    return localStorage.getItem('access_token_user');
}


export function setAccessTokenShelter(token: string): void {
    localStorage.setItem('access_token_shelter', token);
}

export function setAccessTokenUser(token: string): void {
    localStorage.setItem('access_token_user', token);
}

export function removeAccessTokenShelter(): void {
    localStorage.removeItem('access_token_shelter');
}

export const getAccessTokenFromCookieShelter = (): string | null => {
    const name = "access_token_shelter";
    console.log('document.cookie', document.cookie)
    const decodedCookie = decodeURIComponent(document.cookie);
    console.log('decodedCookie', decodedCookie)
    const cookieArr = decodedCookie.split(";");
    console.log('cookieArr', cookieArr)
    for (let i = 0; i < cookieArr.length; i++) {
        let cookie = cookieArr[i];
        while (cookie.charAt(0) === " ") {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return null;
};

export function isTokenExpired(token: string): boolean {
    const expiration = JSON.parse(atob(token.split('.')[1])).exp;
    return Date.now() >= expiration * 1000;
}
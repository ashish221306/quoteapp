import Cookies from "cookies";
export const setTokenCookie = (req, res, result) => {
    const cookies = new Cookies(req, res, { keys: ["quoteapp"] });
    cookies.set("x-token", result.token, {
        overwrite: true,
        signed: true,
        path: "/",
        maxAge: new Date(new Date().setMinutes(10)).getTime(),
    });
};

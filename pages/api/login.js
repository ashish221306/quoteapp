import {setTokenCookie} from "utils/setcookie";

export default async function handler(req, res) {
    const option = {
        method: req.method,
        headers: {
            "Content-Type": "application/json",
        },
    };
    if (req.method != "GET") {
        option.body =
            typeof req.body == "object"
                ? JSON.stringify(req.body)
                : JSON.stringify(JSON.parse(req.body));
    }
    try {
        const result = await fetch(`${process.env.BASE_URL}/login`, option).then(res =>
            res.json()
        );
        if (result.token) {
            setTokenCookie(req,res,result)
            res.json(result);
        } else {
            res.json({
                ...result,
                success: false,
            });
        }
    } catch (err) {
        res.json({
            success: false,
            message: err.message,
        });
    }
}

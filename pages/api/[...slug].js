import Cookies from "cookies";

export default async function handler(req, res) {
    const cookies = new Cookies(req, res, { keys: ["frontend"] });
    let token = cookies.get("x-token");
    const { slug } = req.query;
    const option = {
        method: req.method,
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
    };
    if (req.method != "GET") {
        option.body = typeof req.body == "object" ? JSON.stringify(req.body) : JSON.stringify(JSON.parse(req.body));
    }
    try {
        const result = await fetch(`${process.env.BASE_URL}/${slug}`, option).then(res => res.json());
        res.json(result);
    } catch (err) {
        res.json({
            success: false,
            message: err.message,
        });
    }
}

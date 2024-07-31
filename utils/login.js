export const authenticate = async e => {
    e.preventDefault();
    const result = await fetch(`/api/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: e.target.username.value,
            otp: e.target.otp.value,
        }),
    });
    if (result.ok) {
        const data = await result.json();
        return data;
    }
};

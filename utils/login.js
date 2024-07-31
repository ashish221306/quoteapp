export const authenticate = async e => {
    e.preventDefault();
    const submitbutton = e.nativeEvent.submitter;
    submitbutton.innerText = "processing...";

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
    submitbutton.innerText = "Login";
    if (result.ok) {
        const data = await result.json();
        return data;
    }
};

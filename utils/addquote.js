import { toast } from "react-toastify";

export const addQuote = async e => {
    e.preventDefault();
    const uploadURL = "https://crafto.app/crafto/v1.0/media/assignment/upload";

    const submitbutton = e.nativeEvent.submitter;
    submitbutton.innerText = "processing...";

    const formdata = new FormData();
    formdata.append("file", e.target.image.files[0]);
    const uploadres = await fetch(uploadURL, {
        method: "POST",
        body: formdata,
    });
    const uploadresult = await uploadres.json();
    const imageurl = uploadresult[0].url;
    console.log(imageurl);
    if (imageurl) {
        const response = await fetch(`/api/postQuote`, {
            method: "POST",
            body: JSON.stringify({
                text: e.target.text.value,
                mediaUrl: imageurl,
            }),
        });
        submitbutton.innerText = "submit";
        if (response.ok) {
            const result = await response.json();
            toast.success("Quote added");
            return result;
        } else {
            toast.error(response.statusText);
        }
    }
};

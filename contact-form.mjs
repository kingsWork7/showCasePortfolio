



const sendEmail = async function(){
    // To recieve email from companies
    const formData = new FormData();
    formData.append("access_key", "a1ccab64-f758-438b-bc68-8f9d7c746525");
    formData.append("name", "John Doe");
    formData.append("email", "john@example.com");
    formData.append("message", "Hello World!");

    const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
    });
}


export{sendEmail}


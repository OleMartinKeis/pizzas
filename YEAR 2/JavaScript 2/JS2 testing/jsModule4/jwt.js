const API_BASE_URL = "https://nf-api.onrender.com";

async function registerUser(url, userData) {
    console.log(url, userData)
    try {
        const postData = {};
        const response = fetch(url, {});
    }
    catch(error){
        console.error();
    }
}

const userToRegister = {
    "name": "my_username_test",
    "email": "my_user_test@stud.noroff.no", 
    "password": "Hello123",      
};

const registerUrl = `${API_BASE_URL}/api/v1/social/auth/register`;


registerUser(registerUrl, userToRegister)

// /api/v1/social/auth/register


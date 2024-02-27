//utility file to create axios instance for userAPI
import axios from "axios"

export const userAPI = axios.create({
    baseURL: "/api/v1/user/"
});


// import axios from "axios"

// export const userAPI = axios.create({
//     baseURL: "http://dinostocks-backend:8000/api/v1/user/"
// });

//just testing out loadbalancer backend service just to get front/backend talking.  pods run but not talking to each other
// import axios from "axios"

// export const userAPI = axios.create({
//     baseURL: "http://aff0592c3b0dd487db8c4e3e688d2a4a-1559422809.us-east-1.elb.amazonaws.com:8000/api/v1/user/"
// });


//dev below

// export const userAPI = axios.create({
//     baseURL: "http://dino-app-backend:8000/api/v1/user/" # This is the service name for docker not eks
// });



// export const userAPI = axios.create({
//     baseURL: "http://127.0.0.1:8000/api/v1/user/"
// })

// export const userAPI = axios.create({
//     // Using Minikube IP and assuming Ingress routes `/api/v1/user/` to your backend
//     baseURL: "http://192.168.49.2/api/v1/user/"
// });


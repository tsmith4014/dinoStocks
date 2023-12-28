import { userAPI } from "../utilities";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

const LogIn = ({ setUser }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();
        try {
            const response = await userAPI.post("LogIn/", {
                email: email,
                password: password,
            });

            if (response.status === 201) {
                console.log(response.data);
                localStorage.setItem("token", response.data.token);
                userAPI.defaults.headers.common[
                    "Authorization"
                ] = `Token ${response.data.token}`;
                setUser(response.data.user);
                console.log("User logged in:", response.data.user);
                navigate("/overview/");
            } else {
                console.error("Unexpected response status:", response.status);
                alert("Invalid login credentials.");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("An error occurred while logging in.");
        }
    };

    return (
        <Container className="LoginContainer">
            <div id="LoginImage">
                <img src="https://th.bing.com/th/id/OIG.C41EFVkjPzpesfhWhi6G?w=270&h=270&c=6&r=0&o=5&pid=ImgGn" />
            </div>
        <Form id="loginForm" onSubmit={(e) => login(e)}>
            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    style={{ width: "25rem" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="name@example.com"
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    style={{ width: "25rem" }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="password"
                />
            </Form.Group>
            <Button id="loginButton" type="submit">Login</Button>
        </Form>
        </Container>
    );
};

export default LogIn;

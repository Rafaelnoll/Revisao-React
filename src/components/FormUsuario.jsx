import {useState} from "react";
import { TextField, Button } from "@material-ui/core";

function FormUsuario() {
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");

    return (
        <form>
            <TextField
                value={email}
                onChange={event =>{setEmail(event.target.value)}}
                type="email"
                variant="outlined"
                label="Email"
                color="primary"
                fullWidth 
                margin="normal"
                required
                />

            <TextField
                value={senha}
                onChange={event =>{setSenha(event.target.value)}}
                type="password"
                variant="outlined"
                label="Senha"
                color="primary"
                fullWidth 
                margin="normal"
                required
                />

            <Button color="primary" type="submit" variant="contained">
                Proxímo
            </Button>
        </form>
    );
}

export default FormUsuario;
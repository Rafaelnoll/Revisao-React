import {useState,useContext} from "react";
import { TextField, Button } from "@material-ui/core";
import ValidacoesDeCadastro from "../contexts/ValidacoesDeCadastro";
import useErros from "../hooks/useErros.js";

function FormUsuario({aoEnviar}) {
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");
    const validacoes = useContext(ValidacoesDeCadastro);
    const [erros,validarCampos,possoEnviar] = useErros(validacoes);

    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            if(possoEnviar()){
                aoEnviar({email,senha});
            }
        }}>
            <TextField
                value={email}
                onChange={event =>{setEmail(event.target.value)}}
                type="email"
                name="email"
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
                onBlur={event =>{validarCampos(event)}}
                type="password"
                name="senha"
                variant="outlined"
                label="Senha"
                color="primary"
                fullWidth 
                margin="normal"
                required
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                />

            <Button color="primary" type="submit" variant="contained">
                Proxímo
            </Button>
        </form>
    );
}

export default FormUsuario;
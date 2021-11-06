import { TextField, Button } from "@material-ui/core"
import React, { useContext, useState } from "react";
import ValidacoesDeCadastro from "../contexts/ValidacoesDeCadastro";
import useErros from "../hooks/useErros";

function FormDadosPessoais({aoEnviar}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCPF] = useState("");
    const validacoes = useContext(ValidacoesDeCadastro);
    const [erros,validarCampos,possoEnviar] = useErros(validacoes);

    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            if(possoEnviar()){
                aoEnviar({nome,sobrenome,cpf});
            }
        }}>
            <TextField
                value={nome}
                onChange={event => { setNome(event.target.value) }}
                type="text"
                name="nome"
                variant="outlined"
                label="Nome"
                color="primary"
                fullWidth
                margin="normal"
                required
            />

            <TextField
                value={sobrenome}
                onChange={event => { setSobrenome(event.target.value) }}
                type="text"
                name="sobrenome"
                variant="outlined"
                label="Sobrenome"
                color="primary"
                fullWidth
                margin="normal"
                required
            />

            <TextField
                value={cpf}
                onChange={event => { setCPF(event.target.value) }}
                onBlur={event =>{validarCampos(event)}}
                type="text"
                name="cpf"
                variant="outlined"
                label="CPF"
                color="primary"
                fullWidth
                margin="normal"
                required
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
            />

            <Button color="primary" type="submit" variant="contained">
                Proxímo
            </Button>
        </form>
    );
}

export default FormDadosPessoais;
import { TextField, Button } from "@material-ui/core"
import React, { useState } from "react";

function FormDadosPessoais({aoEnviar}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCPF] = useState("");

    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            aoEnviar();
        }}>
            <TextField
                value={nome}
                onChange={event => { setNome(event.target.value) }}
                type="text"
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
                type="text"
                variant="outlined"
                label="CPF"
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

export default FormDadosPessoais;
import React,{useState} from "react";
import {TextField,Button} from "@material-ui/core"

function FormDadosDeEntrega({aoEnviar}) {
    const [cep,setCep] = useState("");
    const [endereco,setEndereco] = useState("");
    const [numero,setNumero] = useState("");
    const [estado,setEstado] = useState("");
    const [cidade,setCidade] = useState("");


    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            aoEnviar({cep,endereco,numero,estado,cidade});
        }}>
            <TextField
                value={cep}
                onChange={event => { setCep(event.target.value) }}
                type="text"
                variant="outlined"
                label="CEP"
                color="primary"
                fullWidth
                margin="normal"
                required
            />

            <TextField
                value={endereco}
                onChange={event => { setEndereco(event.target.value) }}
                type="text"
                variant="outlined"
                label="Endereço"
                color="primary"
                fullWidth
                margin="normal"
                required
            />

            <TextField
                value={numero}
                onChange={event => { setNumero(event.target.value) }}
                type="text"
                variant="outlined"
                label="Número"
                color="primary"
                margin="normal"
                required
            />

            <TextField
                value={estado}
                onChange={event => { setEstado(event.target.value) }}
                type="text"
                variant="outlined"
                label="Estado"
                color="primary"
                margin="normal"
                required
            />

            <TextField
                value={cidade}
                onChange={event => { setCidade(event.target.value) }}
                type="text"
                variant="outlined"
                label="Cidade"
                color="primary"
                fullWidth
                margin="normal"
                required
            />

            <Button type="submit" variant="contained" color="primary" fullWidth>
                Finalizar Cadastro
            </Button>
        </form>
    );
}

export default FormDadosDeEntrega;
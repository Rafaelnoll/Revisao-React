import React, { useState, useEffect } from "react";
import FormUsuario from "./FormUsuario";
import FormDadosPessoais from "./FormDadosPessoais";
import FormDadosDeEntrega from "./FormDadosDeEntrega";
import { Typography } from "@material-ui/core";

function FormularioCadastro({aoEnviar}) {

    useEffect(()=>{
        if(etapaAtual === formularios.length - 1){
            aoEnviar(dadosColetados);
        }   
    })

    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDadosColetados] = useState({});

    const formularios = [
        <FormUsuario aoEnviar={coletarDados} />,
        <FormDadosPessoais aoEnviar={coletarDados} />,
        <FormDadosDeEntrega aoEnviar={coletarDados} />,
        <Typography variant="h6" align="center">Obrigado por se cadastrar!</Typography>
    ]

    function proximaEtapa() {
        setEtapaAtual(etapaAtual + 1);
    }

    function coletarDados(dados) {
        setDadosColetados({ ...dadosColetados, ...dados })
        proximaEtapa(dados);
    }

    return (
        <section className="formulario">
            {formularios[etapaAtual]}
        </section>
    );
}

export default FormularioCadastro;
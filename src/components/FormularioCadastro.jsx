import React, {useState} from "react";
import FormUsuario from "./FormUsuario";
import FormDadosPessoais from "./FormDadosPessoais";

function FormularioCadastro(){

    const [etapaAtual,setEtapaAtual] = useState(0);

    const formularios = [
        <FormUsuario aoEnviar={proximaEtapa}/>,
        <FormDadosPessoais aoEnviar={proximaEtapa}/>
    ]

    function proximaEtapa(){
        setEtapaAtual(etapaAtual + 1);
    }

    return(
        <section className="formulario">      
              {formularios[etapaAtual]}  
        </section>
    );
}

export default FormularioCadastro;
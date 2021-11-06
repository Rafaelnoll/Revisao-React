import './assets/App.css';
import FormularioCadastro from './components/FormularioCadastro';
import ValidacoesDeCadastro from "./contexts/ValidacoesDeCadastro";
import {validarSenha, validarCpf} from './model/cadastro';

function App() {
  return (
    <div className="content">
        <h1>Formulário De Cadastro</h1>
        <ValidacoesDeCadastro.Provider value={{senha:validarSenha , cpf:validarCpf}}>
            <FormularioCadastro aoEnviar={aoEnviarForm}/>
        </ValidacoesDeCadastro.Provider>
    </div>
  );
}

function aoEnviarForm(dados){
    console.log(dados);
}

export default App;


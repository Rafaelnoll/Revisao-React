import './assets/App.css';
import FormularioCadastro from './components/FormularioCadastro';

function App() {
  return (
    <div className="content">
        <h1>Formulário De Cadastro</h1>
        <FormularioCadastro aoEnviar={aoEnviarForm}/>
    </div>
  );
}

function aoEnviarForm(dados){
    console.log(dados);
}

export default App;


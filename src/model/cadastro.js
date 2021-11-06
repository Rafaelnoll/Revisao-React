function validarSenha(senha) {
    if (senha.length < 4 || senha.length > 72) {
        return { valido: false, texto: "A senha deve ter entre 4 e 72 caracteres" }
    }
    return { valido: true, texto: "" }
}

function validarCpf(cpf) {
    if (cpf.length !== 11) {
        return { valido: false, texto: "O cpf deve ter 11 dígitos!" }
    }
    return { valido: true, texto: "" }
}

export { validarSenha, validarCpf };

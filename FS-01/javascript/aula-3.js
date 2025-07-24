// const email = "francisconunes@gmail.com"
// const senha = "teste123"

const usuarios = [
    {
        nome: "Francisco",
        idade: 18,
        email: "francisconunes@gmail.com",
        senha: "teste123"
    },
    {
        nome: "Lucas",
        idade: 20,
        email: "lucas2018@gmail.com",
        senha: "teste1234"
    }
]

// // 1. Encontrar o user pelo email usando find
// const user = usuarios.find(
//     (usuario) => usuario.email === "francisconunes@gmail.com"
// )

// if (user) {
//     console.log("Usuário não encontrado")
// } else if (user.senha === senha) {
//     console.log("Login realizado com sucesso!")
//     } else {
//         console.log("Senha incorreta") 
//     }

function login(email, senha){
    if(!email){} // if email == false || email == null || email == undefined || email == "" || email == 0

    if(!email || !senha) {
        console.log("Email e Senha são obrigatórios")
    }

    const user = usuarios.find(
        (usuario) => usuario.email === email
    )

    if (!user) {
        console.log("Usuário não encontrado")
        return
    }

    if(user.senha !== senha){
        console.log("Email ou Senha incorretos")
        return
    }

    console.log("Login realizado com sucesso")
}

login("francisconunes@gmail.com", "teste123")
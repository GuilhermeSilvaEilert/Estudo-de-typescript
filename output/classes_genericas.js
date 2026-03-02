"use strict";
class CadastroBase {
    criar(dados) {
        console.log("Criando novo registro");
        return dados;
    }
    selecionar(id) {
        console.log("Dados do registro de ID " + id);
        return {};
    }
    editar(id, dadosAtualizacao) {
        console.log("Editando dados do ID: " + id);
        return dadosAtualizacao;
    }
    excluir(id) {
        console.log("Excluindo registro do ID: " + id);
        return true;
    }
}
class UsuarioModelo extends CadastroBase {
}
const novoUsuario = new UsuarioModelo();
console.log(novoUsuario.criar({
    id: 1,
    nome: "Glaucio",
    email: "glaucio@gmail.com",
    senha: "asdasdas",
    created_at: new Date("2015-06-01"),
    updated_at: new Date("2020-06-25"),
}));
class CategoriaModelo extends CadastroBase {
}
const novaCategoria = new CategoriaModelo();
novaCategoria.criar({
    id: 1,
    nome: "Glaucio",
    created_at: new Date("2015-06-01"),
    updated_at: new Date("2020-06-25"),
});
//# sourceMappingURL=classes_genericas.js.map
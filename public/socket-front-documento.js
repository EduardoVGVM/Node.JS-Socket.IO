import { atualizaTextoEditor, alertarERedirecionar } from "./documento.js";

const socket = io();

function selecionarDocumento(nome) {
    socket.emit("selecionar_documento", nome, (texto) => {
        atualizaTextoEditor(texto);
    });
}

function emitirTextoEditor(dados) {
    socket.emit("texto_editor", dados);
}

socket.on("texto_editor_clientes", (texto) => {
    atualizaTextoEditor(texto);
});

socket.on("disconnect", (motivo) => {
    console.log(`Servidor desconectado!
    Motivo: ${motivo}`);
});

socket.on("excluir_documento_sucesso", (nome) => {
    alertarERedirecionar(nome);
});

function emitirExcluirDocumento(nome){
    socket.emit("excluir_documento", nome);
}

export { selecionarDocumento, emitirTextoEditor, emitirExcluirDocumento };
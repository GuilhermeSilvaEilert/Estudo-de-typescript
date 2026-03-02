function enviarEmail(
    para?: string, 
    assunto?: string,
    remetente?: string,
): void{
    console.log({
        para,
        assunto,
        remetente,
    });
}

enviarEmail("gui.eilert@gmail.com", "joao@gmail.com");
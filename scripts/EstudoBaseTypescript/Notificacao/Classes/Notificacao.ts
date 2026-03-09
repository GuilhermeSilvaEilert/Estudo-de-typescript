import IMeuUsuario from "../Interfaces/MeuUsuario";

export default abstract class Notificacao {
    abstract enviar(usuario: IMeuUsuario): boolean;

}
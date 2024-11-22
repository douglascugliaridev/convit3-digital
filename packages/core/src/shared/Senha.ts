export default class Senha {
    public static nova(tamanho: number = 15): string {
        const minusculas = 'abcdefghijklmnopqrstuvwxyz';
        const maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numeros = '0123456789';
        const especiais = '!@#$%&*';
        const grupos = [minusculas, maiusculas, numeros, especiais];
        let senha = [];

        for (let i = 0; i < tamanho; i++) {
            const grupo = grupos[Math.floor(Math.random() * grupos.length)];
            senha.push(grupo.charAt(Math.floor(Math.random() * grupo.length)));
        }

        return senha.join('');
    }
}
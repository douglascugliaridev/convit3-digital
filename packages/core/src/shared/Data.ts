export default class Data {
    static formatar(data: Date): String {
        const pad = (n:number) => n.toString().padStart(2, '0');

        const d = data ?? new Date();
        const ano = d.getFullYear();
        const mes = pad(d.getMonth() + 1);
        const dia = pad(d.getDate());
        const horas = pad(d.getHours());
        const minutos = pad(d.getMinutes());

        return `${ano}-${mes}-${dia}T${horas}:${minutos}`
    }

    static desformatar(data: String): Date {
      const [ano,mes,dia] = data.split("T")[0].split("-");
      const [horas,minutos] = data.split("T")[1].split(":");

      return new Date(
        parseInt(ano),
        parseInt(mes) - 1,
        parseInt(dia),
        parseInt(horas),
        parseInt(minutos)
      )
     }
}
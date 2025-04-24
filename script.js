let date = new Date()
let horaAtual = date.getHours() /* 20 */
let minutoAtual = date.getMinutes() /* 46 */
let diaSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]
let diaAtualSemana = diaSemana[date.getDay()] /* Ter */
let diaAtualMes = date.getDate() /* 22 */
let mesAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
let mesAtual = mesAno[date.getMonth()]

console.log()
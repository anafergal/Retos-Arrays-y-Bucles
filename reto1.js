/* Parte 1. 
Hay 3 personas esperando en el banco. Sus nombres, en orden, son Sofía, David y Juan. Cree una matriz que tenta estos 3 nombres en orden.
*/
const filaBanco = ['Sofía', 'David', 'Juan'];
console.log("La fila en el banco es: " + filaBanco);

/* Parte 2.
Se agregan 2 personas más al final de la fila: Sara y Agustin. La primera persona en la fila es llamada al cajero. ¿Cómo es la cola=
*/
let entranSaraAgustin = filaBanco.push("Sara", "Agustín");
let saleSofia = filaBanco.shift();
console.log("La fila en el banco ahora es: " + filaBanco);

/* Parte 3
 Resulta que David estaba reservando un lugar para su amiga Renata. Ella aparece y va detrás de él en la fila. Aparece una eprsona más (Elena) y va hasta el final de la fila. ¿Cómo es la cola?
 */
let entraRenata = filaBanco.splice(0,1,"David","Renata");
console.log("La fila en el banco ahora es: " + filaBanco);



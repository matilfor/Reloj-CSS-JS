//guardo en una constante el elemento con la clase seg-agujas (en este caso será el segundero)
const agujaSegundos = document.querySelector('.seg-agujas');
//lo mismo para los minutos
const agujaMinutos = document.querySelector('.min-agujas');
//y lo mismo para la hora
const agujaHora = document.querySelector('.hora-agujas');
//guardo todas las agujas para usarlas en un if más abajo, al final de la función
const todasAgujas = document.querySelectorAll('.agujas');

//creo una función para animar el segundero tomando los segundos que marca la hora actual
function mostrarHora(){
	//guardo la hora actual a través del método Date
	const ahora = new Date();
	//guardo los segundos dentro de la constante de la hora actual a través del método getSeconds
	const segundos = ahora.getSeconds();
	//convierto los segundos en grados para poder aplicarle estilos de css- para ello guardo el resultado de la conversión en una constante
	//la fórmula para convertir los segundos a grados es: const segundos dividido 60 que son los segundos dentro de un minuto,
	//multiplicado por 360 que son los grados que recorre el segundero cuando termina de dar vuelta el reloj y marcar el minuto,
	//sumado el resultado a 90 grados que ubican las agujas alineadas en el eje Y (de lo contrario empezarían alineadas en el eje X)
	const segundosGrados = ((segundos / 60) * 360) + 90;
	//aplicamos los estilos al segundero. en este caso rotamos la aguja de acuerdo a los grados que estén guardados en la const segundosGrados
	agujaSegundos.style.transform = `rotate(${segundosGrados}deg)`;
	//hago lo mismo para los minutos
	const minutos = ahora.getMinutes();
	const minutosGrados = ((minutos / 60) * 360) + 90;
	agujaMinutos.style.transform = `rotate(${minutosGrados}deg)`;
	//y lo mismo para la hora, pero dividido por 12 (la mitad de las horas de un día)
	const hora = ahora.getHours();
	const horaGrados = ((hora / 12) * 360) + 90;
	agujaHora.style.transform = `rotate(${horaGrados}deg)`;
	//las agujas tienen una pequeño falla cuando el segundero completa la vuelta entera al reloj a los 90 segundos
	//para evitar ese falla se ejecuta el siguiente if con un loop forEach (ya que me guardé todas las agujas en la const todasAgujas que es un array)
	if(segundosGrados === 90) {
        todasAgujas.forEach(agujas => agujas.style.transition = 'none') //quito la transición de 0.05s 
      } else {
        todasAgujas.forEach(agujas => agujas.style.transition = '') //con el '' vuelvo a ponerle el estilo que tenía al comenzar 
    }
}

//El método setInterval ejecutará cada un segundo (1000 milisegundos) el método setDate para fijar la hora actual
setInterval(mostrarHora, 1000);
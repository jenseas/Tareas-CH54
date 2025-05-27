const baseEndpoint = "https://api.github.com";
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector(".name"); //le falta el punto
const $b = document.querySelector(".blog"); // no lleva # si no punto
const $l = document.querySelector(".location");

async function displayUser(username, $n, $b, $l) {
  // falta el $n, $b y $l y async
  try {
    // falta el try catch
    $n.textContent = "Cargando...";
    $n.textContent = "cargando...";
    const response = await fetch(`${usersEndpoint}/${username}`);
    console.log(data);
    $n.textContent = "${data.name}";
    $b.textContent = "${data.blog}";
    $l.textContent = "${data.location}";
  } catch (err) {
    handleError(err, $n); // en catch se agraga handleError(err, $n); para manejar el error
  }
}
function handleError(err, $n) {
  console.log("OH NO!");
  console.log(err);
  $n.textContent = `Algo salió mal: ${err.message}`; // falta .mesage para mandar el mensaje de error
}

displayUser("stolinski", $n, $b, $l); //faltan las variables $b y $l

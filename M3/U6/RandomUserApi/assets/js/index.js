const cardContainer = document.getElementById("card-container");

/* Función que me dará info de un usuario => es un adaptador para obtener los datos de la api en LIMPIO*/
async function getApiData() {
  try {
    const response = await fetch("https://randomuser.me/api"); //hacer la peticion a la api
    const data = await response.json(); //buscar los datos y parsearlos en formato JSON
    // console.log(data);
    const user = data.results[0];
    return user;
  } catch (error) {
    console.log("USTED ESTA EN UN ERROR");
    console.log(error);
  }
}

async function showRandomUser() {
  const user = await getApiData();

  cardContainer.innerHTML = `
        <div>
            <img src="${user.picture.medium}"/>
            <p>${user.name.title} ${user.name.first} ${user.name.last}</p>
        </div>    
    `;
}

showRandomUser();

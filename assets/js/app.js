const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const nameText = document.querySelector('.name');
const blog = document.querySelector('.blog');
const mylocation = document.querySelector('.location');

/*
async function displayUser(username) {
  try{
    nameText.textContent = 'cargando...';
    const response = await fetch(`${usersEndpoint}/${username}`)
    nameText.textContent = '${data.name}';
    blog.textContent = '${data.blog}';
    ocation.textContent = '${data.location}';
  } catch (err){ // añadiendo bloque catch despues del try
    console.log('OH NO!');
    console.log(err);
    nameText.textContent = `Algo salió mal: ${err}`
  }
}*/

// Hice una funcion fetch.then.cath para traer los datos a imprimir.
function displayUser(username){
  nameText.textContent = 'cargando...';
  fetch(`${usersEndpoint}/${username}`)
  .then((response)=> {
    response.json().then(data => {
      console.log(data)
      nameText.textContent = `${data.name}`;
      blog.textContent = `${data.blog}`;
      mylocation.textContent = `${data.location}`;
    })
  }) .catch((err) => {
    console.log('OH NO!');
    console.log(err);
    nameText.textContent = `Algo salió mal: ${err}`
  })
}

displayUser('stolinski');
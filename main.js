// función constructora con método
class Productos {
    constructor(info) {
        this.id = info.id;
        this.artista = info.artista;
        this.album = info.album;
        this.anio = info.anio;
        this.edicion = info.edicion;
        this.precio = info.precio;
        this.unidades = info.unidades;
        this.imagen = info.imagen
        this.vendido = false;
    }
/*     vender() {
        this.vendido = true;
        this.unidades -= 1;

        if (this.unidades == 0) {
            console.log("Sin Stock");
        }
    } */
}

// Productos generados mediante función constructora
const producto1 = new Productos({
    id: 01,
    artista: "GZA",
    album: "Liquid Swords",
    anio: 1995,
    edicion: "vinilo",
    precio: 10000,
    unidades: 10,
    imagen: "https://i.scdn.co/image/ab67616d0000b27384b6abc19fb31fb382378bbc"
})

const producto2 = new Productos({
    id: 02,
    artista: "Deep Purple",
    album: "Machine Head",
    anio: 1971,
    edicion: "vinilo",
    precio: 11000,
    unidades: 5,
    imagen: "https://i.scdn.co/image/ab67616d0000b273bc9b44e950d5440ff65ea926"
})

const producto3 = new Productos({
    id: 03,
    artista: "V8",
    album: "Luchando por el Metal",
    anio: 1983,
    edicion: "vinilo",
    precio: 9500,
    unidades: 3,
    imagen: "https://i.scdn.co/image/ab67616d0000b2739e837fba162c12bb3aaba6a3"
})

const producto4 = new Productos({
    id: 04,
    artista: "Pescado Rabioso",
    album: "Pescado 2",
    anio: 1973,
    edicion: "cd",
    precio: 10500,
    unidades: 4,
    imagen: "https://lastfm.freetls.fastly.net/i/u/500x500/a566e0ecf37a24a1c9c575835f7ecebf.jpg"
})

//Array de Productos
const catalogo = [producto1, producto2, producto3, producto4]

const carrito = []


//mostrar catalogo a travs del DOM
catalogo.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${item.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">Artista: ${item.artista}</h5>
    <h5 class="card-title">Album: ${item.album}</h5>
    <b>Precio: ${item.precio}</b>
    <hr>
    <p id="unidadesCard">Unidades: ${item.unidades}</p>
    <button id="boton${item.id}">COMPRAR</button>
    </div>
    </div>
    `
    "<br>"


    document.body.append(div)
    
    let boton = document.getElementById(`boton${item.id}`)
    
    boton.addEventListener("click", () => {
        carrito.push(item.id)

        let unidades = document.getElementById("unidadesCard")
        unidades.innerHTML = `${item.unidades - 1}`
    })
    
    
    div.className = "escala"
})


console.log(catalogo);
console.log(carrito);


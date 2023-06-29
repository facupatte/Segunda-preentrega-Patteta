// Objeto Guitarra
function Guitarra(marca, modelo, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
  }
  
// Array para almacenar las guitarras disponibles en la tienda
let guitarrasDisponibles = [];
  
// Función para agregar una guitarra al inventario
function agregarGuitarra() {
    let marca = prompt("Ingresa la marca de la guitarra:");
    let modelo = prompt("Ingresa el modelo de la guitarra:");
    let precio = parseFloat(prompt("Ingresa el precio de la guitarra:"));
  
    let guitarra = new Guitarra(marca, modelo, precio);
    guitarrasDisponibles.push(guitarra);
  
    console.log("¡Guitarra agregada al inventario!");
  }
  
// Función para mostrar las guitarras disponibles en la tienda
function mostrarInventario() {
    console.log("Inventario de guitarras:");
  
    if (guitarrasDisponibles.length === 0) {
      console.log("No hay guitarras disponibles.");
    } else {
      for (let i = 0; i < guitarrasDisponibles.length; i++) {
        let guitarra = guitarrasDisponibles[i];
        console.log("Marca: " + guitarra.marca + ", Modelo: " + guitarra.modelo + ", Precio: $" + guitarra.precio);
      }
    }
  }
  
// Agregar guitarras al inventario 
agregarGuitarra();
agregarGuitarra();
agregarGuitarra();
  
// Mostrar el inventario de guitarras
mostrarInventario();
const fs = require('fs');

const cargarProductos = () => {
  const productosJSON = fs.readFileSync('./productos.json', 'utf-8');
  return JSON.parse(productosJSON);
}

const listaProductos = cargarProductos();

const existenciaMayorA20 = listaProductos.filter(producto => producto.existencia > 20).length;
console.log(`Número de productos con existencia mayor a 20: ${existenciaMayorA20}`);

const existenciaMenorA15 = listaProductos.filter(producto => producto.existencia < 15).length;
console.log(`Número de productos con existencia menor a 15: ${existenciaMenorA15}`);

const clasificacionesPermitidas = ['granos', 'aceites', 'condimentos', 'endulzantes', 'harinas', 'pastas', 'salsas', 'conservas', 'lácteos', 'huevos', 'carnes', 'pan', 'galletas', 'cereales', 'vinagres', 'sopas'];
const listaProductosMismaClasifPrecioMayor15 = listaProductos.filter(producto => clasificacionesPermitidas.includes(producto.clasificacion) && producto.precio > 15.50);
console.log('Lista de productos con la misma clasificación y precio mayor a 15.50:');
console.log(listaProductosMismaClasifPrecioMayor15);


const precioMayorA20MenorA45 = listaProductos.filter(producto => producto.precio > 20.30 && producto.precio < 45.00);
console.log('Lista de productos con precio mayor a 20.30 y menor a 45.00:');
console.log(precioMayorA20MenorA45);

const numProductosPorClasificacion = {};
listaProductos.forEach(producto => {
  if (numProductosPorClasificacion[producto.clasificacion]) {
    numProductosPorClasificacion[producto.clasificacion] += 1;
  } else {
    numProductosPorClasificacion[producto.clasificacion] = 1;
  }
});
console.log('Número de productos agrupados por su clasificación:');
console.log(numProductosPorClasificacion);
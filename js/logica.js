for(const producto of productos) {
    // Crear elementos html
    const divProducto = document.createElement('div');
    const imgProducto = document.createElement('img');
    const nombreProducto = document.createElement('h2');
    const precioProducto = document.createElement('h5');
    const botonComprar = document.createElement('button');

    // Agregar estilos a las etiquetas creadas

    divProducto.className = 'card';
    imgProducto.className = 'card-img';
    nombreProducto.className = 'card-title';
    precioProducto.className = 'card-precio';
    botonComprar.className = 'card-btn';

    // Agregar contenido

    imgProducto.src = producto.img;
    nombreProducto.append(producto.nombre);
    precioProducto.append(`$${precio.producto}`);
    botonComprar.append('Comprar');
    botonComprar.id = `${producto.id}`;

    // Agregar los elementos al divProducto

    divProducto.append(imgProducto, nombreProducto, precioProducto, botonComprar);

    // Agregar al contenedor de la tienda cada uno de los divProducto

    contenedorTienda.append(divProducto);
}
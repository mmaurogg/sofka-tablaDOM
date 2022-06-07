/**
 * Método para generar la tabla completa
 * @param {*} data elementos que contiene el body de la tabla
 */
export const tabla = (data) => {
  const container = selector("#container");

  const table = crearTag("table");
  const tablaCabecera = crearTag("tr");

  const thNombre = crearTag("th");
  thNombre.innerText = "Nombre";
  thNombre.id = "thNombre";
  orderByClick(thNombre, data, 1);

  const thApellidos = crearTag("th");
  thApellidos.innerText = "Apellidos";
  thApellidos.id = "thApellidos";
  orderByClick(thApellidos, data, 2);

  const thEdad = crearTag("th");
  thEdad.innerText = "Edad";
  thEdad.id = "thEdad";
  orderByClick(thEdad, data, 3);
  
  const thEmail = crearTag("th");
  thEmail.innerText = "email";
  thEmail.id = "thEmail";
  orderByClick(thEmail, data, 4);
  
  const thTelefono = crearTag("th");
  thTelefono.innerText = "teléfono";
  thTelefono.id = "thTelefono";
  orderByClick(thTelefono, data, 5);

  tablaCabecera.append(thNombre, thApellidos, thEdad, thEmail, thTelefono);
  table.append(tablaCabecera);

  table.append(llenarTabla(data));
  container.append(table);

};

/**
 * Método que borra o esconde la tabla anterior y genera una tabla nueva
 * @param {*} arr arreglo para generar la tabla 
 */
const rehacerTabla = (arr) => {
  const tablas = document.querySelectorAll("table")
  tablas.forEach(element => element.style.display = "none");  
  tabla(arr);
};


/**
 * Método que genera el body de la tabl
 * @param {*} arr arreglo para generar la tabla 
 * @returns elemento html con el body de la tabla
 */
const llenarTabla = (arr) => {
  const bodyTable = crearTag("tbody");
  arr.forEach((element) => {
    const fila = crearTag("tr");

    const tdBodyNombre = crearTag("td");
    tdBodyNombre.innerText = element.nombre;

    const tdBodyApellidos = crearTag("td");
    tdBodyApellidos.innerText = element.apellidos;

    const tdBodyEdad = crearTag("td");
    tdBodyEdad.innerText = element.edad;

    const tdBodyEmail = crearTag("td");
    tdBodyEmail.innerText = element.email;

    const tdBodyTelefono = crearTag("td");
    tdBodyTelefono.innerText = element.telefono;

    fila.append(
      tdBodyNombre,
      tdBodyApellidos,
      tdBodyEdad,
      tdBodyEmail,
      tdBodyTelefono
    );

    bodyTable.append(fila);
  });

  return bodyTable;
};

/**
 * Método que ordena los elmentos de la tabla segun los parámetros campo
 * @param {*} arr arreglo de elementos a ordenar
 * @param {*} campo condición por la que se ordenará la tabla
 * @returns nuevo arreglo ordenado
 */
const ordenar = (arr, campo) => {
  alert("arreglando la tabla");
  return new Promise((resolve) => {
    let arrsort = arr.sort((a, b) => {
      switch (campo){
        case 1:
          a = a.nombre
          b = b.nombre
          break;
        case 2:
          a = a.apellidos
          b = b.apellidos
          break;
        case 3:
          a = a.edad
          b = b.edad
          break;
        case 4:            
          a = a.email
          b = b.email
          break;
        case 5:            
          a = a.telefono
          b = b.telefono
          break;
      }

      console.log(a);
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    });

    setTimeout(() => {
      resolve(arrsort);
    },1500);

    })
};

/**
 * Método para seleccionar un elemento del DOM
 * @param {*} select elemento a seleccionar
 * @returns elemento HTML seleccionado
 */
let selector = (select) => {
  return document.querySelector(select);
};

/**
 * Método para generar un nuevo tag en el DOM
 * @param {*} tag nombre del elemento que quiero generar
 * @returns elemento HTML generado
 */
let crearTag = (tag) => {
  return document.createElement(tag)
};

/**
 * Método para agregar el evento del click y desencadena la funcion de ordenar y rehacer la tabla 
 * @param {*} tag elemento al cual se le agregará el listener o evento
 * @param {*} data el arreglo que tiene la data que contiene la tabla
 * @param {*} index indicador que dice por cualcriterio del thead se ordenará
 */
let orderByClick = (tag, data, index) => {
  tag.addEventListener("click", () => ordenar(data, index).then((res) => rehacerTabla(res)));
}

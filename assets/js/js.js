import { getProducts, addProduct, deleteTask } from "./crud.js";

getProducts()

window.addProduct = addProduct
window.deleteTask = deleteTask

//guardar elementos en el local storage: 

//invocamos al local storage y aplicamos el metodo set item que sirve para guardar elementos dentro del local, name se almacena en key y el daniel en el valor.
//localStorage.setItem("name","Daniel")

//obtener un valor del localstorage
//console.log(localStorage.getItem("name"));

//Eliminar un valor del localstorage, remueve un elemento desde la clave o key. 
//localStorage.removeItem("key")

//borra todo el almacenamiento.
//localStorage.clear()

//almacenamiento de objetos
//const user={name:"Jerry"}

//Convertir el objeto a string para poder guardarlo.
//localStorage.setItem("user",JSON.stringify(user))

//const userFromLocalStorage = localStorage.getItem("user")

//Esta informacion se trabaja como objeto
//console.log(JSON.parse(userFromLocalStorage));






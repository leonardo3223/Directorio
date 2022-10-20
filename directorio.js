let amigos=[];

let btnGuardar=document.querySelector("#btnGuardar");
let btnCancelar=document.querySelector("#btnCancelar");



let lista=document.querySelector(".listaAmigos");
let formulario=document.querySelector("#formulario");

pintar();

function limpiar(){
    formulario[0].value="";
    formulario[1].value="";
    formulario[2].value="";
    formulario[3].value="";
}

function pintar(){
    if(amigos.length>0)
    {
        lista.innerHTML="";
        amigos.forEach((contacto,index)=>{
            let amigo=document.createElement("div");
            amigo.innerHTML=`<p>${contacto.nombre}</p><button style="background-color:#02C2BC;" class="muestraDetalles"><input type="hidden" value="${contacto.telefono}"/>Detalles</button>
            <button style="background-color:darkred;" class="eliminarContacto" indice="${index}">Borrar</button>`;
            lista.appendChild(amigo);
        });
        let botones=document.getElementsByClassName("muestraDetalles");
        for (let i = 0; i < botones.length; i++) {
            const element = botones[i];
            element.addEventListener("click",()=>{
                showDetalles(element.children[0].value); 
            });
            
        }
        botones=document.getElementsByClassName("eliminarContacto");
        for (let i = 0; i < botones.length; i++) {
            const element = botones[i];
            element.addEventListener("click",()=>{
                preguntaEliminar();
                if(preguntaEliminar=0)
                {
                    amigos.splice(element.getAttribute("indice"),1);
                    pintar();
                }
                
            });
        }
        
    }
    else{
        lista.innerHTML="<h2>No tenemos amigos</h2>";
    }    
}

function showDetalles(tel){
    let detalles = document.getElementById("detallesAmigos");
    let amigo = amigos.find(a=>{
        if(a.telefono==tel)
        {
            return a;
        }
    });
    detalles.innerHTML=`<img src="${amigo.foto}" alt="">
    <h3>${amigo.nombre}</h3>
    <p><span>Telefono:</span>${amigo.telefono}</p>
    <p><span>Correo:</span>${amigo.correo}</p>
    <button id="cerrarDetalles">cerrar</button>`;
    detalles.classList.remove("oculto");
    eliminardetalles();
}
//-------------------------------------------------------------
function preguntaEliminar(){
    let preguntaBorrar = document.getElementById("preguntaEliminars");
    preguntaBorrar.innerHTML=`<p>Quieres eliminar este amigo?</p>
    <button class="botonsi">Si</button><button class="botonno">No</button>`;
    preguntaBorrar.classList.remove("oculto");
}
//---------------------------------------------------------------------------------------
function eliminardetalles(){
    let cerrar=document.getElementById("detallesAmigos");
    cerrar.addEventListener("click", quitar =>{
        let detalles=document.getElementById("detallesAmigos");
        detalles.classList.add("oculto");
    })
};   

btnCancelar.addEventListener("click",(event)=>{
    limpiar();
    event.preventDefault();
});

btnGuardar.addEventListener("click",(event)=>{
    if (formulario[0].value == "")
    {
        alert("Un campo esta vacio");
        event.preventDefault();
    }
    else if (formulario[1].value == "")
    {
        alert("Un campo esta vacio");
        event.preventDefault();
    }
    else if (formulario[2].value == "")
    {
        alert("Un campo esta vacio");
        event.preventDefault();
    }
    else if (formulario[3].value == "")
    {
        alert("Un campo esta vacio");
        event.preventDefault();
    }

    else if (formulario[0,1,2,3] !== "")
    {
    let contacto={
        nombre:formulario["nombre"].value,
        telefono:formulario["telefono"].value,
        correo:formulario["correo"].value,
        foto:formulario["foto"].value
    };
    

    amigos.push(contacto);
    limpiar();
    pintar();
    event.preventDefault();
}
});


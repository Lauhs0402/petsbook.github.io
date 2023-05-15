function mostrarFormulario() {
    const formulario = document.createElement("form");

    const lugarDireccionDiv = document.createElement("div");
    const lugarDireccionLabel = document.createElement("label");
    lugarDireccionLabel.setAttribute("for", "lugar-direccion");
    lugarDireccionLabel.innerText = "Lugar y dirección donde está el animal abandonado";
    const lugarDireccionInput = document.createElement("input");
    lugarDireccionInput.setAttribute("type", "text");
    lugarDireccionInput.setAttribute("id", "lugar-direccion");
    lugarDireccionDiv.appendChild(lugarDireccionLabel);
    lugarDireccionDiv.appendChild(lugarDireccionInput);

    const estadoSaludDiv = document.createElement("div");
    const estadoSaludLabel = document.createElement("label");
    estadoSaludLabel.setAttribute("for", "estado-salud");
    estadoSaludLabel.innerText = "Estado de salud del animal abandonado";
    const estadoSaludInput = document.createElement("input");
    estadoSaludInput.setAttribute("type", "text");
    estadoSaludInput.setAttribute("id", "estado-salud");
    estadoSaludDiv.appendChild(estadoSaludLabel);
    estadoSaludDiv.appendChild(estadoSaludInput);

    const cantidadAnimalesDiv = document.createElement("div");
    const cantidadAnimalesLabel = document.createElement("label");
    cantidadAnimalesLabel.setAttribute("for", "cantidad-animales");
    cantidadAnimalesLabel.innerText = "Cantidad de animales abandonados";
    const cantidadAnimalesInput = document.createElement("input");
    cantidadAnimalesInput.setAttribute("type", "number");
    cantidadAnimalesInput.setAttribute("id", "cantidad-animales");
    cantidadAnimalesDiv.appendChild(cantidadAnimalesLabel);
    cantidadAnimalesDiv.appendChild(cantidadAnimalesInput);

    const tipoAnimalDiv = document.createElement("div");
    const tipoAnimalLabel = document.createElement("label");
    tipoAnimalLabel.setAttribute("for", "tipo-animal");
    tipoAnimalLabel.innerText = "Tipo de animal abandonado";
    const tipoAnimalInput = document.createElement("input");
    tipoAnimalInput.setAttribute("type", "text");
    tipoAnimalInput.setAttribute("id", "tipo-animal");
    tipoAnimalDiv.appendChild(tipoAnimalLabel);
    tipoAnimalDiv.appendChild(tipoAnimalInput);

    const aporteDiv = document.createElement("div");
    const aporteLabel = document.createElement("label");
    aporteLabel.setAttribute("for", "aporte");
    aporteLabel.innerText = "Algún aporte relevante para proceder a condiciones de rescate";
    const aporteInput = document.createElement("input");
    aporteInput.setAttribute("type", "text");
    aporteInput.setAttribute("id", "aporte");
    aporteDiv.appendChild(aporteLabel);
    aporteDiv.appendChild(aporteInput);

    formulario.appendChild(lugarDireccionDiv);
    formulario.appendChild(estadoSaludDiv);
    formulario.appendChild(cantidadAnimalesDiv);
    formulario.appendChild(tipoAnimalDiv);
    formulario.appendChild(aporteDiv);

    const formularioContainer = document.getElementById("formulario-container");
    formularioContainer.appendChild(formulario);}
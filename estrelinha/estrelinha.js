// Adicionando um "Listener" para o movimento do mouse 
window.addEventListener("mousemove", (elemento) => {
    // criando uma div contendo o caracter que representa uma estrela
    
    const estrelinha = document.createElement("div");
    estrelinha.className = "estrelinha";
    estrelinha.innerHTML = "&#10022;"
    estrelinha.style.left = elemento.clientX + "px";
    estrelinha.style.top = elemento.clientY + "px";
    estrelinha.style.opacity = "0.6";
    // Criando uma deriva horizontal para o efeito de queda da estrela 
    const xAle = (Math.random() - 0.5) * 50 + "px";
    estrelinha.style.setProperty("--xAle", xAle);
    
    /*const pos = `(${elemento.clientX}, ${elemento.clientY})`
    estrelinha.innerHTML= pos;*/
    document.body.appendChild(estrelinha);
    elemento.clientX
    elemento.clientY

    
    setTimeout(()=>{
        estrelinha.remove();
    }, 800)
})
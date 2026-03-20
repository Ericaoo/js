function adicionar() {
    let lista = document.getElementById("lista");
    
    let item = document.createElement("li")

    item.textContent = "Novo item";

    lista.appendChild(item)
}
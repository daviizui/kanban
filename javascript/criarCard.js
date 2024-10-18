
const btnSalvar = document.querySelectorAll(".add-card");
const pendenteColumn = document.querySelectorAll('.kanban-column')

btnSalvar.forEach(evento =>{
  evento.addEventListener("click", adicionarItem)
})


function adicionarItem(evento){
    evento.preventDefault()
    
  const card = document.createElement("div")
  card.classList.add("kanban-card")
  card.draggable = "true"

  const select = document.createElement("select")
  select.classList.add("badge") 

  const selectOpcao1 = document.createElement("option")
  selectOpcao1.classList.add("badgehigh")
  selectOpcao1.textContent = "Altaprioridade"
  select.appendChild(selectOpcao1)

  const selectOpcao2 = document.createElement("option")
  selectOpcao2.classList.add("badgemedium")
  selectOpcao2.textContent = "Medium"
  select.appendChild(selectOpcao2)

  const selectOpcao3 = document.createElement("option")
  selectOpcao3.classList.add("badgelow")
  selectOpcao3.textContent = "Low"
  select.appendChild(selectOpcao3)
  
  const inputAtividade = document.createElement("input")
  inputAtividade.placeholder = "Digite sua atividade"
  inputAtividade.classList.add("input-atividade")
//card comentario e anexo//
  const cardInfo = document.createElement("div")
  cardInfo.classList.add("card-infos")
  const cardIcons = document.createElement("div")
  cardIcons.classList.add("card-icons")
  cardInfo.appendChild(cardIcons)

  const iconeComentario = document.createElement("p")
  iconeComentario.textContent = "1"
  cardIcons.appendChild(iconeComentario)

  const iconeComentarioIcone = document.createElement("i")
  iconeComentarioIcone.innerHTML = '<i class="fa-regular fa-comment"></i>'
  cardIcons.appendChild(iconeComentarioIcone)
  
  const iconeAnexo = document.createElement("p")
  iconeAnexo.textContent = "1"
  cardIcons.appendChild(iconeAnexo)
  const iconeAnexoIcone = document.createElement("i")
  iconeAnexoIcone.innerHTML = '<i class="fa-solid fa-paperclip"></i>'
  cardIcons.appendChild(iconeAnexoIcone)

  const user = document.createElement("div")
  user.classList.add("user")
  cardInfo.appendChild(user)
  const userImg = document.createElement("img")
  userImg.src = "images/selfie.png"
  user.appendChild(userImg)

  
  card.appendChild(select)
  card.appendChild(inputAtividade)
  card.appendChild(cardInfo)

  
  
  const currentColumn = evento.target.closest('.kanban-column');
  const kanbanCards = currentColumn.querySelector('.kanban-cards');

  kanbanCards.appendChild(card);
  
}

 

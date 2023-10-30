//Iniciai a lista de Tarefas
let tasks = [];// armazena as tarefas

//função para adicionar uma nova tarefa

function addTask(){
  const taskText = document.getElementById("task").value;// pega o elemento do HTML com o id task e obtem o valor dele.
  if(taskText.trim() !== "") {//verifica se o taskText não esta vazio. trim() remove o espaço em branco da direita e da esquerda
    tasks.push(taskText);//adiciona o texto da tarefa ao final do array tasks
    displayTasks();// esssa função é chamada para atualizar  a exibição da lista de tarefas na pagina
    document.getElementById("task").value = "";// ele irá limpar o campo de entrada de texto após adicionar uma tarefa.
  }
}

//Função para exibir as tarefas na pagina
function displayTasks() {//declara a função chamada displayTasks vista no codigo a cima.
  const taskList = document.getElementById("taskList");//pega o elemento do HTML com o id "taskList", que esta no ul.
  taskList.innerHTML = "";//limpa o conteudo da lista, tornado-a vazia
  tasks.forEach((task, index) => {
    const li = document.createElement("li");//representa um novo elemento da li

    li.innerHTML = `<span class="task-name">${task}</span>`;//define o texto da tarefa como o conteudo do elemento <li>

    li.innerHTML += `<span class="button-container">
    <button onclick="editTask(${index})">Editar</button>
    <button class="btnApagar" onclick="deleteTask(${index})">Apagar</button>
    </span>`;//adiciona o botão editar dentro do elemento <li> assim como no botão apagar


 
    taskList.appendChild(li);//anexa o elemento li a lista de tarefas na pagina
  });
}

//função para editar uma tarefa
function editTask(index) {
  const newTaskText = prompt("Editar tarefa:", tasks[index]);
  if(newTaskText !== null){
    tasks[index] = newTaskText;
    displayTasks();
  }
}

// Função para apagar uma tarefa 
function deleteTask(index){
tasks.splice(index,1);
displayTasks();
}
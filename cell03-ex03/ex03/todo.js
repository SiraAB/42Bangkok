document.addEventListener("DOMContentLoaded", function() {
    loadTodoList();
  });
  
  function loadTodoList() {
    var todoList = getCookie("todoList");
    if (todoList) {
      document.getElementById("ft_list").innerHTML = todoList;
      attachClickEventToTodos();
    }
  }
  
  function saveTodoList() {
    var todoListHtml = document.getElementById("ft_list").innerHTML;
    setCookie("todoList", todoListHtml, 365);
  }
  
  function openTodoPrompt() {
    var todoText = prompt("Enter a new ToDo:");
    if (todoText !== null && todoText.trim() !== "") {
      createTodoElement(todoText);
    }
  }
  
  function createTodoElement(todoText) {
    var todoListDiv = document.getElementById("ft_list");
    var newTodoDiv = document.createElement("div");
    newTodoDiv.className = "todo-item";
    newTodoDiv.innerText = todoText;
  
    newTodoDiv.addEventListener("click", function() {
      if (confirm("Do you want to remove this ToDo?")) {
        todoListDiv.removeChild(newTodoDiv);
        saveTodoList();
      }
    });
  
    todoListDiv.insertBefore(newTodoDiv, todoListDiv.firstChild);
    saveTodoList();
  }
  
  function attachClickEventToTodos() {
    var todoItems = document.getElementsByClassName("todo-item");
    for (var i = 0; i < todoItems.length; i++) {
      todoItems[i].addEventListener("click", function() {
        if (confirm("Do you want to remove this ToDo?")) {
          document.getElementById("ft_list").removeChild(this);
          saveTodoList();
        }
      });
    }
  }
  
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  }
  
  function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for(var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      while (cookie.charAt(0) == ' ') {
        cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nameEQ) == 0) {
        return cookie.substring(nameEQ.length, cookie.length);
      }
    }
    return null;
  }
$(document).ready(function () {

	var todoService = new TodoService();

	var myTodos = todoService.getTodos();

	addMyTodos(myTodos);
	function addMyTodos(todos) {
		var template = '';
		for (i = 0; i < todos.length; i++) {
			if (myTodos[i].finished == true) {
				template += `<li class="list-group-item crossed-out">${todos[i].text}`;
			} else {
				template += `<li class="list-group-item">${todos[i].text}`;
			}
		}
		$('#todo-list').html(template);
		$('#todo-count').html(`<b>${i}</b>`);
	}

	function addToDo() {
		var todo = $('#new-todo').val();
		myTodos.push({ text: todo, finished: false });
		addMyTodos(myTodos);
		todoService.saveTodos(myTodos);
	}

	function finishTask(task) {
		for (i = 0; i < myTodos.length; i++) {
			if (myTodos[i].text == task.innerHTML) {
				console.log('found it!');
				if (myTodos[i].finished == false) {
					myTodos[i].finished = true;
					task.className = ('list-group-item crossed-out');
				} else {
					removeTask(i);
				}
				return;
			}
		}
	}

	function removeTask(i) {
		myTodos.splice(i, 1);
		addMyTodos(myTodos);
	}

	$('.add-btn').on('click', function () {
		if ($('#new-todo').val() != '') {
			addToDo();
			$('#new-todo').val('');
		}
	});
	$('#todo-list').on('click', '.list-group-item', function () {
		console.log('Clicked on item - ' + this);
		finishTask(this);
	});

} ())
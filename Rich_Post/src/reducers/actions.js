export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const ADD_LIKE = "ADD_LIKE";
export const ADD_DISHLIKE = "ADD_DISHLIKE";
export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}

export function deleteTodo(todoId) {
  return {
    type: DELETE_TODO,
    payload: todoId,
  };
}

export function updateTodo(todo) {
  return {
    type: UPDATE_TODO,
    payload: todo,
  };
}

export function likeTodo(todo) {
  return {
    type: ADD_LIKE,
    payload: todo,
  };
}

export function dishlikeTodo(todo) {
  return {
    type: ADD_DISHLIKE,
    payload: todo,
  };
}
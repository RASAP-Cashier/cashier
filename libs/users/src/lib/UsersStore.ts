import { useLocalStore } from 'mobx-react';
import { UserModel } from './user.model';

export type UsersStore = ReturnType<typeof useUsersStore>;

export const useUsersStore = (defaultUsers: UserModel[] = []) => {
  const store = useLocalStore(() => ({
    users: defaultUsers,
    // get activeTodos() {
    //   return store.todos.filter((todo) => !todo.completed);
    // },
    // get completedTodos() {
    //   return store.todos.filter((todo) => todo.completed);
    // },
    // addTodo(item: Partial<TodoModel>): void {
    //   store.todos.push(new TodoModel(item.text, item.completed));
    // },
    // editTodo(id: number, data: Partial<TodoModel>): void {
    //   store.todos = store.todos.map((todo) => {
    //     if (todo.id === id) {
    //       if (typeof data.completed == 'boolean') {
    //         todo.completed = data.completed;
    //       }
    //       if (typeof data.text == 'string') {
    //         todo.text = data.text;
    //       }
    //     }
    //     return todo;
    //   });
    // },
    // deleteTodo(id: number): void {
    //   store.todos = store.todos.filter((todo) => todo.id !== id);
    // },
    // completeAll(): void {
    //   store.todos = store.todos.map((todo) => ({ ...todo, completed: true }));
    // },
    // clearCompleted(): void {
    //   store.todos = store.todos.filter((todo) => !todo.completed);
    // },
  }));

  return store;
};

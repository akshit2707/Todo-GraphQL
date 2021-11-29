import uuidv4 from 'uuid/v4'

const Mutation = {
    createTodo(parent, args, { db }, info) {
        const Todo = {
            id: uuidv4(),
            ...args.data
        }

        db.Todos.push(Todo)

        return Todo
    },
    deleteTodo(parent, args, { db }, info) {
        const TodoIndex = db.Todos.findIndex((Todo) => Todo.id === args.id)

        if (TodoIndex === -1) {
            throw new Error('Todo not found')
        }

        const deletedTodos = db.Todos.splice(TodoIndex, 1)

        return deletedTodos[0]
    },
    updateTodo(parent, args, { db }, info) {
        const { id, data } = args
        const Todo = db.Todos.find((Todo) => Todo.id === id)

        if (!Todo) {
            throw new Error('Todo not found')
        }

        if (typeof data.text === 'string') {
            Todo.text = data.text
        }

        return Todo
    }
}

export { Mutation as default }
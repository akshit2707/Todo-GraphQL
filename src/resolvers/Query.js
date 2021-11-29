const Query = {
    todos(parent, args, { db }, info) {
        return db.todos
    }
}

export { Query as default }
const Query = {
    todos(parent, args, { db }, info) {
        return db.Todos
    }
}

export { Query as default }
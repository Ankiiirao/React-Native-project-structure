export const fetchTodos = async () => {
    // const response = await fetch(`${URL}${KEY}&per_page=3&page=${page}`);
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    console.log(data)
    return data;
};

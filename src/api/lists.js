import axios from 'axios';

export const getLists = async () => {
    const responses = await axios.get('/get/data');
    return responses;
};

export const getList = async (id) => {
    const responses = await axios.get('/get/data');
    return responses.data.find((response) => response.id === id.listId);
};

export const sideList = async () => {
    const responses = await axios.get('/get/side');
    return responses;
};

export const addList = async (e) => {
    await axios.post('/add/data', {
        title: e.title,
        text: e.text,
        category: e.category,
    });
};

export const updateList = async (e) => {
    await axios.post('/modify/data', {
        id: e.id,
        title: e.title,
        text: e.text,
    });
};

export const deleteList = async (id) => {
    await axios.post('/delete/data', {
        id: id,
    });
};

export const searchList = async (search) => {
    const responses = await axios.post('/search/data', {
        search: search.search,
    });
    return responses;
};

export const categoryList = async (category) => {
    const responses = await axios.post('/category/data', {
        category: category.category,
    });
    return responses;
};

export const login = async (login) => {
    const responses = await axios.post('/login', {
        id: login.id,
        pw: login.pw,
    });
    return responses;
};

import * as listsAPI from '../api/lists';
import {
    createPromiseThunk,
    reducerUtils,
    handleAsyncActions,
} from '../lib/asyncUtils';

const GET_LISTS = 'GET_LISTS';
const GET_LISTS_SUCCESS = 'GET_LISTS_SUCCESS';
const GET_LISTS_ERROR = 'GET_LISTS_ERROR';

const GET_LIST = 'GET_LIST';
const GET_LIST_SUCCESS = 'GET_LIST_SUCCESS';
const GET_LIST_ERROR = 'GET_LIST_ERROR';

const ADD_LIST = 'ADD_LIST';
const ADD_LIST_SUCCESS = 'ADD_LIST_SUCCESS';
const ADD_LIST_ERROR = 'ADD_LIST_ERROR';

const UPDATE_LIST = 'UPDATE_LIST';
const UPDATE_LIST_SUCCESS = 'UPDATE_LIST_SUCCESS';
const UPDATE_LIST_ERROR = 'UPDATE_LIST_ERROR';

const DELETE_LIST = 'DELETE_LIST';
const DELETE_LIST_SUCCESS = 'DELETE_LIST_SUCCESS';
const DELETE_LIST_ERROR = 'DELETE_LIST_ERROR';

const TOGGLE_LIST = 'TOGGLE_LIST';
const TOGGLE_LIST_SUCCESS = 'TOGGLE_LIST_SUCCESS';
const TOGGLE_LIST_ERROR = 'TOGGLE_LIST_ERROR';

const SEARCH_LIST = 'SEARCH_LIST';
const SEARCH_LIST_SUCCESS = 'SEARCH_LIST_SUCCESS';
const SEARCH_LIST_ERROR = 'SEARCH_LIST_ERROR';

const SIDE_LIST = 'SIDE_LIST';
const SIDE_LIST_SUCCESS = 'SIDE_LIST_SUCCESS';
const SIDE_LIST_ERROR = 'SIDE_LIST_ERROR';

const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';

const CATEGORY_LIST = 'CATEGORY_LIST';
const CATEGORY_LIST_SUCCESS = 'CATEGORY_LIST_SUCCESS';
const CATEGORY_LIST_ERROR = 'CATEGORY_LIST_ERROR';

const CLEAR_LIST = 'CLEAR_LIST';

export const toggleList = (id) => ({
    type: TOGGLE_LIST,
    id,
});

export const getLists = createPromiseThunk(GET_LISTS, listsAPI.getLists);
export const getList = createPromiseThunk(GET_LIST, listsAPI.getList);
export const addList = createPromiseThunk(ADD_LIST, listsAPI.addList);
export const updateList = createPromiseThunk(UPDATE_LIST, listsAPI.updateList);
export const deleteList = createPromiseThunk(DELETE_LIST, listsAPI.deleteList);
export const searchList = createPromiseThunk(SEARCH_LIST, listsAPI.searchList);
export const sideList = createPromiseThunk(SIDE_LIST, listsAPI.sideList);
export const categoryList = createPromiseThunk(
    CATEGORY_LIST,
    listsAPI.categoryList
);
export const login = createPromiseThunk(LOGIN, listsAPI.login);

export const clearList = () => ({ type: CLEAR_LIST });

const initialState = {
    lists: reducerUtils.initial(),
    list: reducerUtils.initial(),
    side: reducerUtils.initial(),
    login: reducerUtils.initial(),
};

export default function lists(state = initialState, action) {
    switch (action.type) {
        case GET_LISTS:
        case GET_LISTS_SUCCESS:
        case GET_LISTS_ERROR:
            return handleAsyncActions(GET_LISTS, 'lists')(state, action);
        case GET_LIST:
        case GET_LIST_SUCCESS:
        case GET_LIST_ERROR:
            return handleAsyncActions(GET_LIST, 'list')(state, action);
        case ADD_LIST:
        case ADD_LIST_SUCCESS:
        case ADD_LIST_ERROR:
            return handleAsyncActions(ADD_LIST, 'lists')(state, action);
        case TOGGLE_LIST:
        case TOGGLE_LIST_SUCCESS:
        case TOGGLE_LIST_ERROR:
            return handleAsyncActions(TOGGLE_LIST, 'lists')(state, action);
        case DELETE_LIST:
        case DELETE_LIST_SUCCESS:
        case DELETE_LIST_ERROR:
            return handleAsyncActions(DELETE_LIST, 'lists')(state, action);
        case UPDATE_LIST:
        case UPDATE_LIST_SUCCESS:
        case UPDATE_LIST_ERROR:
            return handleAsyncActions(UPDATE_LIST, 'lists')(state, action);
        case SEARCH_LIST:
        case SEARCH_LIST_SUCCESS:
        case SEARCH_LIST_ERROR:
            return handleAsyncActions(SEARCH_LIST, 'lists')(state, action);
        case SIDE_LIST:
        case SIDE_LIST_SUCCESS:
        case SIDE_LIST_ERROR:
            return handleAsyncActions(SIDE_LIST, 'side')(state, action);
        case LOGIN:
        case LOGIN_SUCCESS:
        case LOGIN_ERROR:
            return handleAsyncActions(LOGIN, 'login')(state, action);
        case CATEGORY_LIST:
        case CATEGORY_LIST_SUCCESS:
        case CATEGORY_LIST_ERROR:
            return handleAsyncActions(CATEGORY_LIST, 'lists')(state, action);
        case CLEAR_LIST:
            return {
                ...state,
                list: reducerUtils.initial(),
            };
        default:
            return state;
    }
}

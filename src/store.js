import {createStore} from 'redux'

const initialState = {
    recipeName: '',
    recipeCategory: '',
    authorFirstName: '',
    authorLastName: '',
    ingredientList: [],
    instructionList: [],
    recipeList: []
}

export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const UPDATE_AUTHOR_FIRST_NAME = 'UPDATE_AUTHOR_FIRST_NAME'
export const UPDATE_AUTHOR_LAST_NAME = 'UPDATE_AUTHOR_LAST_NAME'
export const UPDATE_INGREDIENT_LIST = 'UPDATE_INGREDIENT_LIST'
export const UPDATE_INSTRUCTION_LIST = 'UPDATE_INSTRUCTION_LIST'
export const UPDATE_RECIPE_LIST = 'UPDATE_RECIPE_LIST'

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case UPDATE_NAME:
            return Object.assign({}, state, {recipeName: action.payload})
        case UPDATE_CATEGORY:
            return Object.assign({}, state, {recipeCategory: action.payload})
        case UPDATE_AUTHOR_FIRST_NAME:
            return Object.assign({}, state, {authorFirstName: action.payload})
        case UPDATE_AUTHOR_LAST_NAME:
            return Object.assign({}, state, {authorLastName: action.payload})            
        case UPDATE_INGREDIENT_LIST:
            return Object.assign({}, state, {ingredientList: action.payload})
        case UPDATE_INSTRUCTION_LIST:
            return Object.assign({}, state, {instructionList: action.payload})
        case UPDATE_RECIPE_LIST:
            const {
                recipeName, 
                recipeCategory,
                authorFirstName,
                authorLastName,
                ingredientList,
                instructionList
            } = state
            const recipe = {
                recipeName, 
                recipeCategory,
                authorFirstName,
                authorLastName,
                ingredientList,
                instructionList
            }
            const newRecipes = [...state.recipeList, recipe]
            return {...state, recipeList: newRecipes}
        default:
            return state
    }
}

export default createStore(reducer)
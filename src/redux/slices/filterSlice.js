import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activeCategoryId: 0,
    currentPage: 1,
    sort: {
        name: 'популярности',
        sortProperty: 'rating'
      },
    menuListSort: [
        {name: 'популярности', sortProperty: 'rating'},
        {name: 'цене', sortProperty: 'price'},
        {name: 'алфавиту', sortProperty: 'title'}
    ],
    categoryList: [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',
      ],
      isVisible: false

};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setActiveCategoryId(state, action) {
        state.activeCategoryId = action.payload;
        },
        setSort(state,action) {
            state.sort = action.payload;
        },
        setCurrentPage(state,action) {
            state.currentPage = action.payload;
        },
        setIsVisible(state, action) {
            state.isVisible = action.payload;
        },
        setFilter(state,action) {
            state.currentPage = Number(action.payload.currentPage);
            state.sort = action.payload.sort;
            state.activeCategoryId = Number(action.payload.activeCategoryId);


        }
    }
})


export const {setActiveCategoryId, setSort, setCurrentPage, setIsVisible, setFilter} = filterSlice.actions;
export default filterSlice.reducer; 
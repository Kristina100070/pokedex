import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

type Param = {
    limit: number
    page: number
}

export const getById = createAsyncThunk(
    'data/getById',
    async function (url: string) {
        const response = await axios.get(`${url}`)
        return response.data
    }
)

export const getAll = createAsyncThunk(
    'data/getAll',
    async function (param: Param) {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/', {
            params: {
                limit: param.limit,
                page: param.page,
            },
        })
        return response.data.results
    }
)

const initialState = {
    status: 'loading',
    pokemonsList: [],
    filterPokemonsList: [],
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        clearPosts: (state) => {
            state.pokemonsList = []
            return state
        },
        searchPokemon: (state, action) => {
            state.filterPokemonsList = state.pokemonsList.filter((item) =>
                item.name.toLowerCase().includes(action.payload.toLowerCase())
            )
            return state
        },
        filterByType: (state, action) => {
            state.filterPokemonsList = state.pokemonsList.filter((item) =>
                item.types[0].type.name.includes(action.payload)
            )
            return state
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            getById.fulfilled,
            (state, action: PayloadAction<[]>) => {
                state.pokemonsList = [...state.pokemonsList, action.payload]
                state.status = 'success'
            }
        )
        builder.addCase(getById.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(getById.rejected, (state) => {
            state.status = 'error'
        })
    },
})

export const { clearPosts, searchPokemon, filterByType } = dataSlice.actions

export default dataSlice.reducer

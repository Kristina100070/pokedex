import { useEffect, useState } from 'react'
import { getAll, getById, clearPosts } from '../../store/dataSlice'
import { Button } from '../ui/Button'
import { CardPokemon } from '../CardPokemon'
import Styles from './styles.module.scss'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { Options } from '../Options'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

const antIcon = (
    <LoadingOutlined style={{ fontSize: 100, color: 'lightseagreen' }} spin />
)

export const App = () => {
    const pokemonsList = useAppSelector((state) => state.data.pokemonsList)
    const filterPokemonsList = useAppSelector(
        (state) => state.data.filterPokemonsList
    )
    const status = useAppSelector((state) => state.data.status)
    const dispatch = useAppDispatch()
    const [activeLoadCount, setActiveLoadCount] = useState(10)
    const [pageCount, setPageCount] = useState(1)
    const [param, setParam] = useState({
        limit: activeLoadCount,
        page: pageCount,
    })
    const [activeSaerch, setActiveSearch] = useState(false)
    const list = activeSaerch ? filterPokemonsList : pokemonsList

    const showMore = () => {
        setActiveSearch(false)
        setPageCount((prev) => prev + 1)
        setParam({ limit: activeLoadCount, page: pageCount + 1 })
    }
    const countPokemonsPage = (value) => {
        setActiveSearch(false)
        setParam({ limit: Number(value), page: 1 })
        dispatch(clearPosts())
        setActiveLoadCount(Number(value))
    }
    useEffect(() => {
        dispatch(getAll(param)).then((res) => {
            res.payload.forEach((item) => {
                dispatch(getById(item.url))
            })
        })
    }, [dispatch, param])
    return (
        <div className={Styles.root}>
            {status === 'loading' && (
                <div className={Styles.spin}>
                    <Spin indicator={antIcon} />
                </div>
            )}
            {status === 'success' && (
                <div className={Styles.wrapper}>
                    <h1>Pokemons</h1>
                    <Options
                        setActiveSearch={setActiveSearch}
                        countPokemonsPage={countPokemonsPage}
                    />

                    <div className={Styles.pokemons}>
                        {list.length > 0 ? (
                            list.map((item, i) => (
                                <CardPokemon key={i} item={item} />
                            ))
                        ) : (
                            <p className={Styles.text}>no pokemons</p>
                        )}
                    </div>
                    {pokemonsList.length < 100 && (
                        <Button value="Show more" onClick={showMore} />
                    )}
                </div>
            )}
            {status === 'error' && (
                <p className={Styles.text}>Что-то пошло не так...</p>
            )}
        </div>
    )
}

import { ButtonGradient } from '../ui/ButtonGradient'
import Styles from './styles.module.scss'
import { Input } from 'antd'
import { useAppDispatch } from '../../store/hooks'
import { filterByType, searchPokemon } from '../../store/dataSlice'
import { CloseOutlined } from '@ant-design/icons'
import { ButtonFilter } from '../ui/ButtonFilter'

interface OptionsProps {
    setActiveSearch: (boolean) => void
    countPokemonsPage: (boolean) => void
}
export const Options: React.FC<OptionsProps> = ({
    setActiveSearch,
    countPokemonsPage,
}) => {
    const { Search } = Input

    const dispatch = useAppDispatch()
    const onSearch = (value: string) => {
        setActiveSearch(true)
        dispatch(searchPokemon(value))
    }
    const resetSearch = () => {
        setActiveSearch(false)
    }
    const filter = (type) => {
        setActiveSearch(true)
        dispatch(filterByType(type))
    }
    return (
        <>
            <div className={Styles.options}>
                <div>
                    <ButtonGradient
                        onClick={() => countPokemonsPage(10)}
                        count={10}
                    />
                    <ButtonGradient
                        onClick={() => countPokemonsPage(20)}
                        count={20}
                    />
                    <ButtonGradient
                        onClick={() => countPokemonsPage(50)}
                        count={50}
                    />
                </div>
                <Search
                    placeholder="input search text"
                    allowClear={{
                        clearIcon: <CloseOutlined onClick={resetSearch} />,
                    }}
                    onSearch={onSearch}
                    style={{ width: 200 }}
                />
            </div>
            <div>
                <ButtonFilter value="fire" onClick={() => filter('fire')} />
                <ButtonFilter value="grass" onClick={() => filter('grass')} />
                <ButtonFilter value="water" onClick={() => filter('water')} />
                <ButtonFilter value="bug" onClick={() => filter('bug')} />
                <ButtonFilter value="normal" onClick={() => filter('normal')} />
                <ButtonFilter value="poison" onClick={() => filter('poison')} />
                <ButtonFilter
                    value="electric"
                    onClick={() => filter('electric')}
                />
                <ButtonFilter value="ground" onClick={() => filter('ground')} />
                <ButtonFilter value="fairy" onClick={() => filter('fairy')} />
            </div>
        </>
    )
}

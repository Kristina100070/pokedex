import { FC } from 'react'
import { typesClasses } from '../../utils/constants'
import Styles from './styles.module.scss'

interface CardPokemonDetailsProps {
    item: any
}
export const CardPokemonDetails: FC<CardPokemonDetailsProps> = ({ item }) => {
    const typeColorTag = typesClasses(Styles, item.types[0].type.name)

    return (
        <div className={Styles.container}>
            <img
                src={item.sprites.other.dream_world.front_default}
                alt="avatar"
            />
            <div className={Styles.desc}>
                <h2>Description</h2>
                <h4>Name: {item.name}</h4>
                <p className={typeColorTag}>type: {item.types[0].type.name}</p>
                <div>
                    <p>height: {item.height}</p>
                    <p>weight: {item.weight}</p>
                    <p>experience: {item.base_experience}</p>
                </div>
            </div>
        </div>
    )
}

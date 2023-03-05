import { FC } from 'react'
import Styles from './styles.module.scss'
import { Modal } from 'antd'
import { typesClasses } from '../../utils/constants'
import { useState } from 'react'
import { CardPokemonDetails } from '../CardPokemonDetails'

interface CardPokemonProps {
    item: any
}
export const CardPokemon: FC<CardPokemonProps> = ({ item }) => {
    const typeColorTag = typesClasses(Styles, item.types[0].type.name)

    const [open, setOpen] = useState(false)
    return (
        <>
            <div className={Styles.card_bg} onClick={() => setOpen(true)}>
                <div className={Styles.card}>
                    <div className={Styles.card_blur}>
                        <img
                            src={item.sprites.other.dream_world.front_default}
                            alt="avatar"
                        />
                        <h4>{item.name}</h4>
                        <p className={typeColorTag}>
                            {item.types[0].type.name}
                        </p>
                    </div>
                </div>
            </div>

            <Modal
                centered
                open={open}
                footer={null}
                onCancel={() => setOpen(false)}
                width={1000}
            >
                <CardPokemonDetails item={item} />
            </Modal>
        </>
    )
}

import { FC } from 'react'
import Styles from './styles.module.scss'
import { Modal } from 'antd'
import { typesClasses } from '../../utils/constants'
import { useState } from 'react'
import { CardPokemonDetails } from '../CardPokemonDetails'
import like from '../../assets/icons/like.svg'
import likeActive from '../../assets/icons/like_active.svg'

interface CardPokemonProps {
    item: any
}
export const CardPokemon: FC<CardPokemonProps> = ({ item }) => {
    const typeColorTag = typesClasses(Styles, item.types[0].type.name)

    const [open, setOpen] = useState(false)
    const [isLike, setIsLike] = useState(false)
    const likedPOkemon = (e) => {
        e.stopPropagation()
        setIsLike(!isLike)
        {
            /*TODO add logic liked in localStorage */
        }
    }
    return (
        <>
            <div className={Styles.card_bg} onClick={() => setOpen(true)}>
                <div className={Styles.card}>
                    <div className={Styles.card_blur}>
                        <img
                            src={isLike ? likeActive : like}
                            alt="like"
                            className={Styles.like}
                            onClick={likedPOkemon}
                        />
                        <img
                            className={Styles.avatar}
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

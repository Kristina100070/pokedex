import { typesClasses } from '../../../utils/constants'
import Styles from './styles.module.scss'
interface ButtonFilterProps {
    value: string
    onClick: () => void
}
export const ButtonFilter: React.FC<ButtonFilterProps> = ({
    value,
    onClick,
}) => {
    const typeColorTag = typesClasses(Styles, value)
    return (
        <button
            className={`${Styles.button} ${typeColorTag}`}
            onClick={onClick}
        >
            {value}
        </button>
    )
}

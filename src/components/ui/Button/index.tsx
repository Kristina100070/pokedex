import Styles from './styles.module.scss'
interface ButtonProps {
    value: string
    onClick: () => void
}
export const Button: React.FC<ButtonProps> = ({ value, onClick }) => {
    return (
        <button className={Styles.button} onClick={onClick}>
            {value}
        </button>
    )
}

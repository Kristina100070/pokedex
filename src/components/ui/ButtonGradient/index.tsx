import Styles from './styles.module.scss'

interface ButtonGradientProps {
    onClick: () => void
    count: number
}
export const ButtonGradient: React.FC<ButtonGradientProps> = ({
    onClick,
    count,
}) => {
    return (
        <button className={Styles.button} onClick={onClick}>
            <div className={Styles.button_bg}>
                <div className={Styles.button_blur}>{count}</div>
            </div>
        </button>
    )
}

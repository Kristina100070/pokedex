import cl from 'classnames'

export const typesClasses = (Styles, type) => {
    return cl(Styles.day, {
        [`${Styles.fire}`]: type === 'fire',
        [`${Styles.grass}`]: type === 'grass',
        [`${Styles.water}`]: type === 'water',
        [`${Styles.bug}`]: type === 'bug',
        [`${Styles.normal}`]: type === 'normal',
        [`${Styles.poison}`]: type === 'poison',
        [`${Styles.electric}`]: type === 'electric',
        [`${Styles.ground}`]: type === 'ground',
        [`${Styles.fairy}`]: type === 'fairy',
    })
}

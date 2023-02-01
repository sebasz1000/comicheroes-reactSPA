import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"

export const List = ({ publisher }) => {
    const heroes = getHeroesByPublisher(publisher)

    return (
        <ul>
            {
                heroes.map(heroe => {
                    const { id, superhero } = heroe
                    return (
                        <li key={id}>
                            {superhero}
                        </li>
                    )
                })
            }
        </ul>
    )
}
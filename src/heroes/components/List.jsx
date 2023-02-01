import { useMemo } from "react"
import { Card } from "./"
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"

export const List = ({ publisher }) => {
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3 my-3">
            {
                heroes.map(heroe =>
                    <Card {...heroe} key={heroe.id} />
                )
            }
        </div>
    )
}
import { Navigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById"
export const HeroPage = () => {
    const { heroId } = useParams()
    const hero = getHeroById(heroId)

    if (!hero) {
        return <Navigate to="/" />
    }

    const { id, superhero, publisher, alter_ego, first_appearence, characters } = hero

    return (
        <>
            <h1>HeroPage</h1>
            <div className="col">
                <div className="row">
                    <h1>{superhero}</h1>
                </div>
            </div>
            {!superhero ? <p>This hero doesnt exist</p> : null}
        </>
    )
}

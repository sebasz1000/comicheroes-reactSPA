import { useMemo } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById"
export const HeroPage = () => {
    const { heroId } = useParams()
    const hero = useMemo(() => getHeroById(heroId), [heroId])

    if (!hero) {
        return <Navigate to="/" />
    }

    const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero

    const imgUrl = `/assets/heroes/${id}.jpg`

    const navigate = useNavigate()
    const onBack = () => navigate(-1)
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img className="img-thumbnail "
                    src={imgUrl}
                    alt={superhero} />
            </div>
            <div className="col-8">
                <div className="row">
                    <h1>{superhero}</h1>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <b>Alter ego: </b>
                            {alter_ego}
                        </li>
                        <li className="list-group-item">
                            <b>Primera Aparición: </b>
                            {first_appearance}
                        </li>
                        <li className="list-group-item">
                            <b>Publisher: </b>
                            {publisher}
                        </li>
                        <li className="list-group-item">
                            <b>Personajes: </b>
                            {characters}
                        </li>
                    </ul>
                </div>
                <button className="btn-primary btn mt-4"
                    onClick={() => onBack()}>
                    Regresar
                </button>
            </div>
            {!superhero ? <p>This hero doesnt exist</p> : null}

        </div>
    )
}

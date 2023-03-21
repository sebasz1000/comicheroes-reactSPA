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

    const imgUrl = new URL(`/assets/heroes/${id}.jpg`, import.meta.url).href

    const navigate = useNavigate()
    const onBack = () => navigate(-1)

    return (
        <div className="row mt-5">
            <div className="col-5 col-md-6">
                <img className="img-thumbnail animate__animated animate__fadeInLeft"
                    src={imgUrl}
                    alt={superhero} />
            </div>
            <div className="col-7 col-md-6 animate__animated animate__fadeIn py-md-3 py-0">
                <div className="row">
                    <h1 className="animate__animated animate__fadeIn animate__delay_1s">
                        {superhero}
                    </h1>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item animate__animated animate__fadeInRight ">
                            <b>Alter ego: </b>
                            {alter_ego}
                        </li>
                        <li className="list-group-item animate__animated animate__fadeInRight ">
                            <b>Primera Aparición: </b>
                            {first_appearance}
                        </li>
                        <li className="list-group-item animate__animated animate__fadeInRight ">
                            <b>Publisher: </b>
                            {publisher}
                        </li>
                        <li className="list-group-item animate__animated animate__fadeInRight ">
                            <b>Personajes: </b>
                            {characters}
                        </li>
                    </ul>
                </div>
                <button className="btn-primary btn mt-4 animate__animated animate__fadeIn animate__delay-1s"
                    onClick={() => onBack()}>
                    Regresar
                </button>
            </div>
            {!superhero ? <p>This hero doesnt exist</p> : null}

        </div>
    )
}

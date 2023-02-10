import { Link } from "react-router-dom"

export const Card = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {

	const imgUrl = `./assets/heroes/${id}.jpg`

	const getCharacters = () => {
		return (alter_ego !== characters)
			? <p>{characters}</p>
			: null
	}

	return (
		<div className='col-12 animate__animated animate__fadeIn'>
			<div className="card">
				<div className="row no-gutters">
					<div className="col-12 col-md-6 col-lg-6 ">
						<img src={imgUrl}
							alt={superhero} className="card-img" />
					</div>
					<div className="col-12 col-md-6 col-lg-6">
						<div className="card-body px-lg-1 py-xl-4">
							<h5 className="card-title">
								{superhero}
							</h5>
							<p className="card-text">
								{alter_ego}
							</p>
							{getCharacters()}
							<p className="card-text">
								<small className="text-muted">
									{first_appearance}
								</small>
							</p>
							<Link to={`/hero/${id}`}
								className="btn btn-primary">
								Ver más
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

import { useMemo } from 'react'
import { useLocation, useNavigate, useParams } from "react-router-dom"
import queryString from 'query-string'
import { Card } from "../components"
import { useForm } from "../hooks"
import { getHeroesByName } from "../helpers/"


export const SearchPage = () => {

	const navigate = useNavigate()
	const location = useLocation()
	const { q = '' } = queryString.parse(location.search)
	let matchedHeroes = useMemo(() => getHeroesByName(q), [q])

	const { searchText, onChange } = useForm({
		searchText: q
	})

	const onSubmit = (e) => {

		e.preventDefault()
		navigate(`?q=${searchText.toLowerCase().trim()}`)

	}

	const haveQueryText = () => (q !== '')

	const noFoundResults = () => (matchedHeroes.length === 0) && haveQueryText()

	return (
		<>
			<h1>SearchPage</h1>
			<hr />
			<div className="row">
				<div className="col-5">
					<h4>Search</h4>
					<hr />
					<form onSubmit={onSubmit}>
						<input type="text"
							placeholder="Search Hero"
							className="form-control"
							name="searchText"
							autoComplete="off"
							onChange={onChange}
							value={searchText} />
						<div className="d-flex flex-row align-center justify-content-between my-3">
							<button className="btn btn-outline-primary">
								Search
							</button>

						</div>
					</form>
				</div>
				<div className="col-7">
					<h4>Results</h4>
					<hr />
					{
						(<div className={`alert alert-primary animate__animated animate__fadeIn ${haveQueryText() ? 'd-none' : ''}`} >
							Search a hero
						</div>)
					}
					{

						(<div className={`alert alert-danger animate__animated animate__fadeIn ${noFoundResults() ? '' : 'd-none'}`}>
							There are no results for your <b>{q}</b>
						</div>)
					}
					{
						matchedHeroes.map(hero => <Card {...hero} key={hero.id} />)
					}

				</div>
			</div>
		</>
	)
}

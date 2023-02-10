import { Routes, Route } from 'react-router-dom'
import { Navbar } from '../../ui'
import { MarvelPage, DCPage, HeroPage, SearchPage } from '../pages'

export const HeroesRoutes = () => {
	return (
		<>
			<Navbar />
			<div className="container py-4">
				<Routes>
					<Route path='/' element={<MarvelPage />} />
					<Route path='/marvel' element={<MarvelPage />} />
					<Route path='/dc' element={<DCPage />} />
					<Route path='/search' element={<SearchPage />} />
					<Route path='/hero/:heroId' element={<HeroPage />} />

					{/* Search  and HeroById*/}
				</Routes>
			</div>
		</>
	)
}

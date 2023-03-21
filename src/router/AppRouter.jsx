import { Routes, Route } from 'react-router-dom'
import { HeroesRoutes } from '../heroes'
import { LoginPage } from '../auth'
import { PrivateRoute } from '../heroes/routes/PrivateRoute'
import { PublicRoutes } from '../heroes/routes/PublicRoutes'

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={
                    <PublicRoutes>
                        <LoginPage />
                    </PublicRoutes>
                } />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/*"
                    element={
                        <PrivateRoute >
                            <HeroesRoutes />
                        </PrivateRoute >
                    } />

            </Routes>
        </>
    )
}

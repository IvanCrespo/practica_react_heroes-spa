import { Route, Routes } from "react-router-dom"

// Pages
import { LoginPage } from "../auth"

// Routes
import { HeroesRoutes } from "../heroes"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="/*" element={<HeroesRoutes />} />
            </Routes>
        </>
    )
}

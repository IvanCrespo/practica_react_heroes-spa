import { Navigate, Route, Routes } from 'react-router-dom'

// Navbar
import { Navbar } from '../../ui'

// Pages
import { MarvelPage, DCPage, SearchPage, HeroPage } from '../pages'

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DCPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="hero/:heroId" element={<HeroPage />} />
                    {/* Search, Hero By Id */}
                    <Route path="/" element={<Navigate to="/marvel" />} />
                </Routes>
            </div>
        </>
    )
}

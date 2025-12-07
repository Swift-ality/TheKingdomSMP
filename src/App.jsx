import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const redirectMap = {
    '/discord': 'https://discord.gg/bUs6KDZM9C',
    '/store': 'https://discord.gg/bUs6KDZM9C',
    '/lagless': 'https://discord.gg/bUs6KDZM9C',
}

function App() {
    const location = useLocation()

    useEffect(() => {
        const redirectUrl = redirectMap[location.pathname]
        if (redirectUrl) {
            window.location.replace(redirectUrl)
        }
    }, [location])

    return (
        <div>
            <h1>Redirecting...</h1>
            <p>If you are not redirected, please check the URL.</p>
        </div>
    )
}

export default App

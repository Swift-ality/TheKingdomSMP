import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const redirectMap = {
    '/smprules': 'https://docs.google.com/document/d/1HC3CSvcbLHnudyWpugS0irz45Z3SpSg20iWjHOzXsxQ/edit?usp=sharing',
    '/smpchangelog': 'https://docs.google.com/document/d/1BxiJsy_jR-p-Z0OW21giz4l1BgRye2E9kTwprvA6aPc/edit?usp=sharing',
    '/smpguide': 'https://docs.google.com/document/d/1DOfhr_JqaM9kKS495OFERXnPq6m0roiOUZkR7ImGPCk/edit?usp=sharing',
    '/apply': 'https://forms.gle/obWeC8xdwk1JW5Ao9'
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

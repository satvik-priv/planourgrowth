import { useEffect } from "react"
import { useLocation, useNavigate, useNavigationType } from "react-router-dom"

export default function ForceBackToHome() {
    const location = useLocation()
    const navigate = useNavigate()
    const navigationType = useNavigationType()

    useEffect(() => {
        // Ignore home page
        if (location.pathname === "/") return

        // If user used browser back / swipe
        if (navigationType === "POP") {
            navigate("/", { replace: true })
        }
    }, [location.pathname, navigationType, navigate])

    return null
}

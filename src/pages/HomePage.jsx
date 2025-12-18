import { useNavigate } from "react-router-dom"

export default function HomePage() {

    const navigate = useNavigate()

    function toForm() {
        navigate(`/Form`)
    }

    return (
        <>
            <button onClick={toForm} >Form</button>
        </>
    )
}
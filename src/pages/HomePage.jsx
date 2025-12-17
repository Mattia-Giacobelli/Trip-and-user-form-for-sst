import { useNavigate } from "react-router-dom"

export default function HomePage() {

    const navigate = useNavigate()

    function toUser() {
        navigate(`/userForm`)
    }
    function toTrip() {
        navigate(`/tripPage`)
    }

    return (
        <>
            <button onClick={toUser} >User</button>
            <button onClick={toTrip} >Trip</button>
        </>
    )
}
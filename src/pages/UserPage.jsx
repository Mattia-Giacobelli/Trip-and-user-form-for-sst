import NewUserForm from '../components/NewUserForm'

export default function UserPage({ viaggiUniti, setTrips }) {


    return (
        <NewUserForm viaggi={viaggiUniti} setTrips={setTrips} />

    )
}
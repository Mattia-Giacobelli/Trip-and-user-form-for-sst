import NewTripForm from "../components/NewTripForm";
import NewUserForm from '../components/NewUserForm'

export default function NewUserAndTripPage({ viaggiUniti, setTrips }) {

    console.log(viaggiUniti);



    return (
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 align-items-center justify-content-evenly">
                    <div className="col">
                        <NewTripForm viaggi={viaggiUniti} setTrips={setTrips} />
                    </div>
                    <div className="col">
                        <NewUserForm viaggi={viaggiUniti} setTrips={setTrips} />

                    </div>
                </div>
            </div>
        </>
    )
}
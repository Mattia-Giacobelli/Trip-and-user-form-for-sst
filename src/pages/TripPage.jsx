import NewTripForm from "../components/NewTripForm";

export default function TripPage({ viaggiUniti, setTrips }) {

    console.log(viaggiUniti);



    return (
        <>
            <NewTripForm viaggi={viaggiUniti} setTrips={setTrips} />
        </>
    )
}
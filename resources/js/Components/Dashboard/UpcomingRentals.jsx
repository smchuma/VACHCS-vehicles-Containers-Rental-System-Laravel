import UpcomingRentalTable from "@/Pages/Admin/UpcomingRentalTable";

const UpcomingRentals = ({ rentals }) => {
    console.log(rentals);
    return (
        <main className="mb-20">
            <h1 className="m-5 mt-10 font-semibold">
                <h1>Upcoming Rentals</h1>
            </h1>
            <UpcomingRentalTable rentals={rentals} />
        </main>
    );
};

export default UpcomingRentals;

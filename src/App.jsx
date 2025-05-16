// import { placeholderData } from "./Data";
import { useState } from "react";
import useGuests from "./hook/useGuests";
import GuestDetails from "./Components/GuestDetails";
import GuestTable from "./Components/GuestTable";

export default function App() {
  // const guestInfo = placeholderData;
  const [selectedGuest, setSelectedGuest] = useState(null);
  const { guests, isLoading, error } = useGuests();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching guests. please try later</p>;

  return (
    <div className="outer-container">
      <h1>Guest List</h1>
      <GuestTable
        guests={guests}
        setSelectedGuest={setSelectedGuest}
        selectedGuest={selectedGuest}
      ></GuestTable>
      {!selectedGuest ? (
        <p className="select-text">Select a guest to see more details</p>
      ) : (
        <>
          <GuestDetails
            selectedGuest={selectedGuest}
            setSelectedGuest={setSelectedGuest}
          ></GuestDetails>
        </>
      )}
    </div>
  );
}

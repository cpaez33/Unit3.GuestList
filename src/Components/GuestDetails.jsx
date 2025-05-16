import "./GuestTable.css";

function GuestDetails({ selectedGuest, setSelectedGuest }) {
  return (
    <>
      <div className="guest-details-box">
        <p className="guest-details">Name: {selectedGuest.name}</p>
        <p className="guest-details">Email: {selectedGuest.email}</p>
        <p className="guest-details">Phone #: {selectedGuest.phone}</p>
        <p className="guest-details">Bio: {selectedGuest.bio}</p>
        <p className="guest-details">Job: {selectedGuest.job}</p>
      </div>
      <div className="button-box">
        <button
          onClick={() => {
            setSelectedGuest(null);
          }}
        >
          Go Back
        </button>
      </div>
    </>
  );
}

export default GuestDetails;

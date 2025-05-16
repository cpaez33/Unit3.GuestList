import "./GuestTable.css";

function GuestTable({ guests, selectedGuest, setSelectedGuest }) {
  return (
    <>
      <table className="guest-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((person) => (
            <tr
              className={selectedGuest?.id === person.id ? "highlight" : ""}
              key={person.id}
              onClick={() => {
                setSelectedGuest(person);
              }}
            >
              <td>{person.name}</td>
              <td>{person.email}</td>
              <td>{person.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default GuestTable;

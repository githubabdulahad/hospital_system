import { useContext } from "react";
import { SearchContext } from "../../Context/SearchContext";
import ProfileIcon from "../../Components/compafterlogin/Common/ProfileIcon";
import CommonAddButton from "../../Components/compafterlogin/Common/CommonAddButton";
import CommonTable from "../../Components/compafterlogin/Common/CommonTable";

const patients = [
  {
    name: "Alice Smith",
    email: "alice@example.com",
    phone: "+123-45-6789012",
    address: "123 Main St, City",
    gender: "Female",
  },
  {
    name: "Bob Johnson",
    email: "bob@example.com",
    phone: "+321-54-9876543",
    address: "456 Elm St, Town",
    gender: "Male",
  },
  {
    name: "Jane Doe",
    email: "jane@gmail.com",
    phone: "+111-22-3334444",
    address: "789 Oak St, Village",
    gender: "Female",
  },
];

const AdmPatients = () => {
  const { search } = useContext(SearchContext);
  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(search.toLowerCase()) ||
      patient.email.toLowerCase().includes(search.toLowerCase()) ||
      patient.phone.toLowerCase().includes(search.toLowerCase()) ||
      patient.address.toLowerCase().includes(search.toLowerCase()) ||
      patient.gender.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="p-6"
      style={{
        fontFamily:
          "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'",
      }}
    >
      <div className="flex items-center mb-6">
        <span className="text-2xl mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118A7.5 7.5 0 0112 15.75a7.5 7.5 0 017.5 4.368M18 6.75a2.25 2.25 0 112.25 2.25"
            />
          </svg>
        </span>
        <h2 className="text-3xl font-semibold text-gray-500">Patients</h2>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div></div>
        <CommonAddButton label="Add Patient" />
      </div>
      <CommonTable
        columns={[
          { label: "Profile", key: "profile", render: () => <ProfileIcon /> },
          { label: "Name", key: "name" },
          { label: "Email", key: "email" },
          { label: "Phone", key: "phone" },
          { label: "Address", key: "address" },
          { label: "Gender", key: "gender" },
        ]}
        data={filteredPatients.map((patient) => ({
          ...patient,
          profile: true,
        }))}
        actions={[
          {
            label: (
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-xs flex items-center transition-colors"
                title="Edit Medicine"
              >
                <svg
                  className="w-3 h-3 mr-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
            ),
          },
          {
            label: (
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs flex items-center transition-colors"
                title="Delete Medicine"
              >
                <svg
                  className="w-3 h-3 mr-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            ),
          },
        ]}
      />
      <div className="flex justify-between items-center mt-4 text-gray-500 text-xs">
        <span>
          Showing 1 to {filteredPatients.length} of {filteredPatients.length}{" "}
          entries
        </span>
        <div className="flex items-center gap-1">
          <button className="border rounded px-2 py-1" disabled>
            {"<"}
          </button>
          <span className="px-2">1</span>
          <button className="border rounded px-2 py-1" disabled>
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdmPatients;

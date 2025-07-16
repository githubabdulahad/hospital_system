import React, { useState } from "react";
import CommonTable from "../../Components/compafterlogin/Common/CommonTable";
import CommonAddButton from "../../Components/compafterlogin/Common/CommonAddButton";
import ProfileIcon from "../../Components/compafterlogin/Common/ProfileIcon";
import EditPrescriptionModal from "../../Components/compafterlogin/Doctor/EditPrescriptionModal";
import ViewPrescriptionModal from "../../Components/compafterlogin/Doctor/Viewprescription";
import ViewDiagnosis from "../../Components/compafterlogin/Doctor/ViewDiagnosis";
import AddPrescriptionModal from "../../Components/compafterlogin/Doctor/AddPrescription";

const prescriptionColumns = [
  { label: "Date", key: "date" },
  {
    label: "Patient",
    key: "patient",
    render: (row) => (
      <div className="flex items-center gap-2">
        <ProfileIcon className="w-8 h-8" />
        {row.patient}
      </div>
    ),
  },
  { label: "Doctor", key: "doctor" },
];

const initialPrescriptionData = [
  {
    date: "16 Nov, 2017 - 11:10",
    patient: "Tanvir Hasan",
    doctor: "Micheal Pewd",
  },
];

const initialDiagnosisData = [
  {
    date: "12-05-2027",
    time: "05:33",
    reportType: "X-ray",
    documentType: "pdf",
    description: "abc",
  },
];

const Docprescription = () => {
  const [prescriptions, setPrescriptions] = useState(initialPrescriptionData);
  const [editIdx, setEditIdx] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [viewIdx, setViewIdx] = useState(null);
  const [ setdiagnosisIdx] = useState(null);
  const [viewPrescriptionOpen, setViewPrescriptionOpen] = useState(false);
  const [viewDiagnosisOpen, setViewDiagnosisOpen] = useState(false);
  const [diagnosisData, setDiagnosisData] = useState(initialDiagnosisData);
  const [addModalOpen, setAddModalOpen] = useState(false);

  const handleEdit = (row, idx) => {
    setEditIdx(idx);
    setModalOpen(true);
  };
  const handleView = (row, idx) => {
    setViewIdx(idx);
    setViewPrescriptionOpen(true);
  };

  const handlediagnosisreport = ( idx) => {
    setdiagnosisIdx(idx);
    setViewDiagnosisOpen(true);
  };

  const handleSave = (updated) => {
    setPrescriptions((prev) =>
      prev.map((item, idx) => (idx === editIdx ? updated : item))
    );
    setModalOpen(false);
    setEditIdx(null);
  };

  const handleSaveDiagnosis = (newReport) => {
    setDiagnosisData((prev) => [...prev, newReport]);
  };

  const handleAddPrescription = (newPrescription) => {
    setPrescriptions((prev) => [...prev, newPrescription]);
    setAddModalOpen(false);
  };

  const handleDelete = (row, idx) => {
    setPrescriptions((prev) => prev.filter((_, i) => i !== idx));
  };

  const prescriptionActions = [
    {
      label: (
        <span className="flex items-center gap-1">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 113 3L7 19.5 3 21l1.5-4L16.5 3.5z" />
          </svg>
          Edit
        </span>
      ),
      className:
        "bg-blue-500 hover:bg-blue-600 text-white font-normal px-2 py-1 rounded",
      onClick: handleEdit,
    },
    {
      label: (
        <span className="flex items-center gap-1">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          View Prescription
        </span>
      ),
      className:
        "bg-gray-500 hover:bg-gray-600 text-white font-normal px-2 py-1 rounded",
      onClick: handleView,
    },
    {
      label: (
        <span className="flex items-center gap-1">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          View Diagnosis Report
        </span>
      ),
      className:
        "bg-gray-500 hover:bg-gray-600 text-white font-normal px-3 py-1 rounded",
      onClick: handlediagnosisreport,
    },
    {
      label: (
        <span className="flex items-center gap-1">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
          Delete
        </span>
      ),
      className:
        "bg-red-500 hover:bg-red-600 text-white font-normal px-3 py-1 rounded",
      onClick: handleDelete,
    },
  ];

  return (
    <div
      className="p-6 max-w-5xl mx-auto"
      style={{
        fontFamily:
          "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'",
      }}
    >
      <div className="flex justify-end mb-4">
        <CommonAddButton
          label="Add Prescription"
          onClick={() => setAddModalOpen(true)}
        />
      </div>
      <div className="bg-white rounded-xl shadow p-4 mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
          <svg
            className="w-7 h-7 text-gray-400 mr-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Prescription
        </h2>
        <CommonTable
          columns={prescriptionColumns}
          data={prescriptions}
          actions={prescriptionActions.map((action) => ({
            ...action,
            onClick: (row, idx) =>
              action.label.props.children[1] === "Edit"
                ? handleEdit(row, idx)
                : action.onClick(row, idx),
          }))}
        />
      </div>

      <EditPrescriptionModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        prescription={prescriptions[editIdx]}
        onSave={handleSave}
      />

      <ViewPrescriptionModal
        open={viewPrescriptionOpen}
        onClose={() => setViewPrescriptionOpen(false)}
        prescription={prescriptions[viewIdx]}
      />

      <ViewDiagnosis
        open={viewDiagnosisOpen}
        onClose={() => setViewDiagnosisOpen(false)}
        diagnosis={diagnosisData}
        onSave={handleSaveDiagnosis}
      />

      <AddPrescriptionModal
        open={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        onSave={handleAddPrescription}
        patients={prescriptions.map((p) => ({ name: p.patient }))}
      />
    </div>
  );
};

export default Docprescription;

import { useContext } from "react";
import AllDoctorsContext from "../../ContextFiles/AllDoctorsContext";
import DoctorPanel from "./PatientDetailsComponents/DoctorPanel";
import VitalsPanel from "./PatientDetailsComponents/VitalsPanel";
import ActionPanel from "./PatientDetailsComponents/ActionPanel";
import NotesList from "./PatientDetailsComponents/NoteComponents/NotesList";

function PatientDetails({ details_object }) {
    const doctorConcerned = useContext(AllDoctorsContext).find(doc => {
        return doc.id === details_object.doctorId
    })


    return (
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 bg-gradient-to-r from-teal-50 to-white p-5 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">Selected record · #{details_object.id}</p>
                <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">{details_object.name}</h2>
                <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white p-3 ring-1 ring-slate-200">
                        <p className="text-xs font-medium text-slate-500">Age</p>
                        <p className="mt-1 font-semibold text-slate-900">{details_object.age} years</p>
                    </div>
                    <div className="rounded-xl bg-white p-3 ring-1 ring-slate-200">
                        <p className="text-xs font-medium text-slate-500">Priority</p>
                        <p className="mt-1 font-semibold capitalize text-slate-900">{details_object.priority}</p>
                    </div>
                    <div className="col-span-2 rounded-xl bg-white p-3 ring-1 ring-slate-200">
                        <p className="text-xs font-medium text-slate-500">Current status</p>
                        <p className="mt-1 font-semibold capitalize text-slate-900">{details_object.status}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 p-4 sm:p-5">
                <DoctorPanel doctor_object={doctorConcerned} />
                <VitalsPanel vitals_object={details_object.vitals} id_of_patient={details_object.id} />
                <ActionPanel id_of_patient={details_object.id} />
                <NotesList notes_list={details_object.notes} id_of_patient={details_object.id} />
            </div>
        </section>
    );
}

export default PatientDetails;
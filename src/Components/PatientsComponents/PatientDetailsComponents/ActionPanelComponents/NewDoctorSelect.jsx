import { memo, useRef } from "react";

const NewDoctorSelect = memo(function ({ list_of_doctors, id, dispatch }) {
    const newDoctorIdRef = useRef(null);

    return (
        <fieldset className="min-w-0">
            <legend className="mb-2 text-xs font-semibold text-slate-600">Reassign doctor</legend>
            <div className="flex flex-wrap gap-2">
                {
                    list_of_doctors.map(doc => {
                        return (
                            <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 transition hover:border-teal-300" key={doc.id} htmlFor={`new-doctor-${id}-${doc.id}`}>
                                <input className="accent-teal-700" type="radio" name={`new-doctor-select-${id}`} id={`new-doctor-${id}-${doc.id}`} onChange={(e) => {
                                    newDoctorIdRef.current = e.target.value;
                                }} value={doc.id} />
                                {doc.name}
                            </label>
                        )
                    })
                }
            </div>
            <button className="mt-2 rounded-lg bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-teal-50 hover:text-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-500/15" onClick={() => {
                dispatch({
                    type: 'ASSIGN_DOCTOR',
                    patient_id: id,
                    new_doctor_id: Number(newDoctorIdRef.current)
                })
            }}>Change Doctor</button>
        </fieldset>
    );
})

export default NewDoctorSelect;
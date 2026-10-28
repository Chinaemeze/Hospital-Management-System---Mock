import { memo } from "react";


const DoctorFilterSelector = memo(function ({ doctors_list, dispatch }) {


    return (
        <div className="flex items-center gap-2 rounded-xl border border-teal-800 bg-teal-900/70 px-3 py-2">
            <label className="whitespace-nowrap text-xs font-medium text-teal-100" htmlFor="doctor-filter">Doctor</label>

            <select className="min-w-0 max-w-36 bg-transparent text-xs font-semibold text-white outline-none [&>option]:text-slate-900" id="doctor-filter" name="doctor-choice" onChange={e => {
                dispatch({
                    type: 'SET_DOCTOR_FILTER',
                    value: e.target.value
                })
            }}>
                <option value="" disabled>All doctors</option>
                <option value="all">all</option>
                {
                    doctors_list.map(doc => {
                        return <option key={doc.id} id={doc.id} value={doc.id} >{doc.name}</option>
                    })
                }
            </select>
        </div>
    )
})

export default DoctorFilterSelector;
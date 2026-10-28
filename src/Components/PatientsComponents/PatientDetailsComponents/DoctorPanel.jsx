import { memo } from "react";

const DoctorPanel = memo(function({ doctor_object }) {

    return (
        <section className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-sm font-bold text-slate-900">Assigned doctor</h3>
            <p className="mt-2 text-sm font-semibold text-slate-800">{doctor_object?.name ?? "No doctor assigned"}</p>
            {doctor_object?.specialty && <p className="mt-0.5 text-sm text-slate-500">{doctor_object.specialty}</p>}
        </section>
    )
})

export default DoctorPanel;
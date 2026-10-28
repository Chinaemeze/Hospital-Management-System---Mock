import { memo } from "react";

const PatientCard = memo(function ({ patient_object, dispatch }) {
    const priorityClasses = {
        critical: "bg-rose-100 text-rose-700 ring-rose-200",
        high: "bg-orange-100 text-orange-700 ring-orange-200",
        medium: "bg-amber-100 text-amber-700 ring-amber-200",
        low: "bg-emerald-100 text-emerald-700 ring-emerald-200",
    };
    const statusClasses = {
        waiting: "bg-sky-50 text-sky-700",
        treating: "bg-violet-50 text-violet-700",
        discharged: "bg-slate-100 text-slate-600",
    };

    return (
        <article className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-md sm:p-5">
            <div className="mb-4 flex items-start justify-between gap-3">
                <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Patient #{patient_object.id}</p>
                    <h3 className="mt-1 truncate text-base font-bold text-slate-900 sm:text-lg">{patient_object.name}</h3>
                </div>
                <button onClick={() => {
                    dispatch({
                        type: 'SELECT_PATIENT',
                        id: patient_object.id
                    })
                }} className="shrink-0 rounded-lg bg-teal-700 px-3 py-2 text-xs font-semibold text-white transition hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-500/25">View record</button>
            </div>

            <div className="flex flex-wrap gap-2">
                <span className={`rounded-full px-2.5 py-1 text-xs font-semibold capitalize ${statusClasses[patient_object.status] || "bg-slate-100 text-slate-600"}`}>
                    {patient_object.status}
                </span>
                <span className={`rounded-full px-2.5 py-1 text-xs font-semibold capitalize ring-1 ring-inset ${priorityClasses[patient_object.priority] || "bg-slate-100 text-slate-600 ring-slate-200"}`}>
                    {patient_object.priority} priority
                </span>
            </div>
        </article>
    );
})

export default PatientCard; 
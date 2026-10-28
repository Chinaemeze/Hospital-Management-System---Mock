import { memo } from "react";

const DashboardStats = memo(function ({ statistics_object }) {
    return (
        <section>
            <div className="mb-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">At a glance</p>
                <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">Today’s activity</h2>
            </div>
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                    <p className="text-sm font-medium text-slate-500">Total patients</p>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{statistics_object.totalNumberOfPatients ?? 0}</p>
                    <p className="mt-1 text-xs text-slate-400">In the system</p>
                </div>
                <div className="rounded-2xl border border-rose-100 bg-rose-50/70 p-4 shadow-sm sm:p-5">
                    <p className="text-sm font-medium text-rose-700">Critical cases</p>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-rose-900">{statistics_object.critical ?? 0}</p>
                    <p className="mt-1 text-xs text-rose-600/70">Require close attention</p>
                </div>
                <div className="rounded-2xl border border-amber-100 bg-amber-50/70 p-4 shadow-sm sm:p-5">
                    <p className="text-sm font-medium text-amber-700">Waiting</p>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-amber-900">{statistics_object.waiting ?? 0}</p>
                    <p className="mt-1 text-xs text-amber-700/70">Awaiting care</p>
                </div>
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4 shadow-sm sm:p-5">
                    <p className="text-sm font-medium text-emerald-700">Discharged</p>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-emerald-900">{statistics_object.discharged ?? 0}</p>
                    <p className="mt-1 text-xs text-emerald-700/70">Completed care</p>
                </div>
            </div>
        </section>
    )
});

export default DashboardStats;
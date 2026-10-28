import { memo, useContext, useMemo } from "react";
import DispatchContext from "../../../ContextFiles/DispatchContext";
import GeneralStateContext from "../../../ContextFiles/GeneralStateContext";
import AllDoctorsContext from "../../../ContextFiles/AllDoctorsContext";
import NewPrioritySelect from "./ActionPanelComponents/NewPrioritySelect";
import NewStatusSelect from "./ActionPanelComponents/NewStatusSelect";
import NewDoctorSelect from "./ActionPanelComponents/NewDoctorSelect";

const ActionPanel = memo(function ({ id_of_patient }) {
    const dispatch = useContext(DispatchContext);
    const generalState = useContext(GeneralStateContext);
    const allDoctors = useContext(AllDoctorsContext);


    const allOptions = useMemo(() => {
        return generalState.patients.reduce((acc, pat) => {
            acc['statuses'] = acc['statuses'] || [];
            acc['priorities'] = acc['priorities'] || [];

            if (!acc['doctors']) {
                acc['doctors'] = allDoctors;
            }

            if (!acc['statuses'].includes(pat.status)) {
                acc['statuses'].push(pat.status)
            }

            if (!acc['priorities'].includes(pat.priority)) {
                acc['priorities'].push(pat.priority)
            }

            return acc

        }, {})
    }, [allDoctors, generalState.patients])

    return (
        <section className="rounded-xl border border-slate-200 p-4">
            <div className="mb-3">
                <h3 className="text-sm font-bold text-slate-900">Manage patient</h3>
                <p className="mt-0.5 text-xs text-slate-500">Update care details or remove this record.</p>
            </div>
            <div className="space-y-4">
                <div className="grid gap-4">
                    <NewPrioritySelect id={id_of_patient} options={allOptions.priorities} dispatch={dispatch} />
                    <NewStatusSelect id={id_of_patient} options={allOptions.statuses} dispatch={dispatch} />
                    <NewDoctorSelect id={id_of_patient} list_of_doctors={allOptions.doctors} dispatch={dispatch} />
                </div>
                <button className="w-full rounded-lg border border-rose-200 bg-rose-50 px-4 py-2.5 text-sm font-semibold text-rose-700 transition hover:border-rose-300 hover:bg-rose-100 focus:outline-none focus:ring-4 focus:ring-rose-500/10" onClick={() => {
                    dispatch({
                        type: 'DELETE_PATIENT',
                        patient_id: id_of_patient
                    })
                }}>Delete Patient {id_of_patient}</button>
            </div>
        </section>
    )
})

export default ActionPanel;
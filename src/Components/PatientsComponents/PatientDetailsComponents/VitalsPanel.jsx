import { memo, useCallback, useContext, useRef, useState } from "react";
import DispatchContext from "../../../ContextFiles/DispatchContext";

const VitalsPanel = memo(function ({ vitals_object, id_of_patient }) {
    const dispatch = useContext(DispatchContext);
    const [selectedVitals, setSelectedVitals] = useState('');
    const newValueRef = useRef(null);

    const updateSelectedVitals = useCallback((value) => {
        setSelectedVitals(value);
        newValueRef.current = null;
    }, []);

    const updateVitalsInGeneralState = useCallback((id, vital_key_in_state, newValue) => {

        if (!newValue) return

        dispatch({
            type: 'UPDATE_VITALS',
            patient_id: id,
            new_value: newValue,
            key_of_concern: vital_key_in_state
        });
    }, [dispatch])


    return (
        <section className="rounded-xl border border-slate-200 p-4">
            <h3 className="text-sm font-bold text-slate-900">Vitals</h3>
            <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-sky-50 p-3">
                    <p className="text-xs font-medium text-sky-700">Heart rate</p>
                    <p className="mt-1 text-lg font-bold text-sky-950">{vitals_object.heartRate} <span className="text-xs font-medium">bpm</span></p>
                </div>
                <div className="rounded-xl bg-violet-50 p-3">
                    <p className="text-xs font-medium text-violet-700">Blood pressure</p>
                    <p className="mt-1 text-lg font-bold text-violet-950">{vitals_object.bloodPressure}</p>
                </div>
            </div>
            <fieldset className="mt-4">
                <legend className="mb-2 text-xs font-semibold text-slate-600">Choose a vital to update</legend>
                <div className="flex flex-wrap gap-2">
                    <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 hover:border-teal-300">
                        <input className="accent-teal-700" type="radio" name={`vitals-${id_of_patient}`} id={`heartRate-${id_of_patient}`} value='heartRate' onChange={e => {
                    updateSelectedVitals(e.target.value)
                }} />
                        Heart rate
                    </label>
                    <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 hover:border-teal-300">
                        <input className="accent-teal-700" type="radio" name={`vitals-${id_of_patient}`} id={`bloodPressure-${id_of_patient}`} value='bloodPressure' onChange={e => {
                    updateSelectedVitals(e.target.value)
                }} />
                        Blood pressure
                    </label>
                </div>
            </fieldset>

            {
                Boolean(selectedVitals)
                &&
                (
                    <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                        <input className="min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10" type={
                            (selectedVitals === 'heartRate') ? 'number' : 'text'
                        } placeholder={`Enter New ${selectedVitals}`} onChange={e => {
                            newValueRef.current = (selectedVitals === 'heartRate') ? Number(e.target.value) : e.target.value;
                        }} />
                        <button className="rounded-lg bg-teal-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-500/25" onClick={() => {
                            updateVitalsInGeneralState(id_of_patient, selectedVitals, newValueRef.current)
                        }}>Update {selectedVitals}</button>
                    </div>
                )
            }
        </section>
    )
})

export default VitalsPanel;
import { memo, useCallback, useRef } from "react";

const AddNewPatientForm = memo(function ({ all_doctors, dispatch, all_priorities, all_patient_ids }) {
    const generateThreeDigitId = useCallback(() => {
        return Math.floor(Math.random() * 900) + 100;
    }, []);

    const newPatientObjectRef = useRef({
        status: 'waiting'
    });

    const updateValueInRef = useCallback((target, key_in_ref) => {
        if (key_in_ref === 'vitals') {
            newPatientObjectRef.current[key_in_ref] = newPatientObjectRef.current[key_in_ref] || {};

            if (target.id === 'heartRate') {
                newPatientObjectRef.current[key_in_ref][target.id] = Number(target.value);
            } else {
                newPatientObjectRef.current[key_in_ref][target.id] = target.value
            }

            return
        }

        if (key_in_ref === 'age' || key_in_ref === 'doctorId') {
            newPatientObjectRef.current[key_in_ref] = Number(target.value);
            return
        }

        newPatientObjectRef.current[key_in_ref] = target.value;

    }, []);

    const addPatientInGeneralState = useCallback(() => {
        if (Object.keys(newPatientObjectRef.current).length !== 6) return

        if ((!newPatientObjectRef.current.age) || (newPatientObjectRef.current.age <= 0) || (!newPatientObjectRef.current.name.replace(/\s+/g, "")) || (newPatientObjectRef.current.vitals.heartRate <= 0) || (!newPatientObjectRef.current.vitals.heartRate)) return

        newPatientObjectRef.current['notes'] = [];
        newPatientObjectRef.current['id'] = function () {
            let generatedId;
            do {
                generatedId = generateThreeDigitId();
            } while (all_patient_ids.includes(generatedId))

            return generatedId
        }()

        const objectToSend = { ...newPatientObjectRef.current }

        dispatch({
            type: 'ADD_PATIENT',
            new_patient_object: objectToSend
        })

        newPatientObjectRef.current = {
            status: 'waiting'
        }
    }, [all_patient_ids, dispatch, generateThreeDigitId])

    const handleKeyDown = useCallback((e) => {
        const allowed = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '/', 'Backspace'];

        if (!allowed.includes(e.key)) {
            e.preventDefault()
        }

    }, [])


    return (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">Patient intake</p>
                <h2 className="mt-1 text-xl font-bold tracking-tight text-slate-900">Add a patient</h2>
                <p className="mt-1 text-sm text-slate-500">Create a new record and assign the initial care team.</p>
            </div>
            <div className="space-y-4">
            <div>
                <label className="mb-1.5 block text-xs font-semibold text-slate-600" htmlFor="new-patient-name">Patient name</label>
                <input className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10" type="text" id="new-patient-name" placeholder="Enter patient's full name" data-key="name" onChange={(e) => {
                    updateValueInRef(e.target, e.target.dataset.key)
                }} />
            </div>
            <div>
                <label className="mb-1.5 block text-xs font-semibold text-slate-600" htmlFor="new-patient-age">Age</label>
                <input className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10" type="number" id="new-patient-age" placeholder="Enter age" data-key="age" onChange={(e) => {
                    updateValueInRef(e.target, e.target.dataset.key)
                }} />
            </div>
            <div className="grid gap-3 sm:grid-cols-2" onChange={e => { updateValueInRef(e.target, e.target.dataset.key) }}>
                <div>
                    <label className="mb-1.5 block text-xs font-semibold text-slate-600" htmlFor="heartRate">Heart rate</label>
                    <input className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10" type="number" data-key="vitals" placeholder="e.g. 80" id="heartRate" />
                </div>
                <div>
                    <label className="mb-1.5 block text-xs font-semibold text-slate-600" htmlFor="bloodPressure">Blood pressure</label>
                    <input className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10" type="text" id="bloodPressure" data-key="vitals" placeholder="e.g. 120/80" onKeyDown={e => handleKeyDown(e)} />
                </div>
            </div>
            <fieldset>
                <legend className="mb-2 text-xs font-semibold text-slate-600">Assign doctor</legend>
                <div className="flex flex-wrap gap-2" onChange={e => {
                    updateValueInRef(e.target, e.target.dataset.key)
                }}>
                    {
                        all_doctors.map(doc => {
                            return (
                                <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 transition hover:border-teal-300" key={doc.id} htmlFor={`intake-doctor-${doc.id}`}>
                                    <input className="accent-teal-700" type="radio" name="doctors" id={`intake-doctor-${doc.id}`} value={doc.id} data-key="doctorId" />
                                    {doc.name}
                                </label>
                            )

                        })
                    }
                </div>
            </fieldset>
            <fieldset>
                <legend className="mb-2 text-xs font-semibold text-slate-600">Set priority</legend>
                <div className="flex flex-wrap gap-2" onChange={e => {
                    updateValueInRef(e.target, e.target.dataset.key)
                }}>
                    {
                        all_priorities.map((priority, ind) => {
                            return (
                                <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium capitalize text-slate-700 transition hover:border-teal-300" key={ind} htmlFor={`intake-priority-${priority}`}>
                                    <input className="accent-teal-700" type="radio" name="priority" id={`intake-priority-${priority}`} value={priority} data-key="priority" />
                                    {priority}
                                </label>
                            )

                        })
                    }
                </div>
            </fieldset>
            <button className="w-full rounded-lg bg-teal-700 px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-500/25" onClick={addPatientInGeneralState}>Add patient</button>
            </div>
        </section>
    );
})

export default AddNewPatientForm;

// {
//     id: 110,
//     name: "Daniel Carter",
//     age: 52,
//     priority: "high",
//     status: "waiting",
//     doctorId: 1,
//     vitals: {
//         heartRate: 104,
//         bloodPressure: "150/94"
//     },
//     notes: [
//         { id: 10, text: "Persistent dizziness." },
//         { id: 11, text: "Patient requires neurological assessment." }
//     ]
// }
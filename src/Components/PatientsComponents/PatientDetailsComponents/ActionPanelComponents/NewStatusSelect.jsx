import { memo, useRef } from "react";

const NewStatusSelect = memo(function ({ id, options, dispatch }) {
    const newStatusRef = useRef(null);

    return (
        <fieldset className="min-w-0">
            <legend className="mb-2 text-xs font-semibold text-slate-600">Change status</legend>
            <div className="flex flex-wrap gap-2">
            {
                options.map((opt, ind) => {
                    return (
                        <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium capitalize text-slate-700 transition hover:border-teal-300" key={ind} htmlFor={`new-status-${id}-${opt}`}>
                            <input className="accent-teal-700" type="radio" name={`new-status-${id}`} id={`new-status-${id}-${opt}`} value={opt} onChange={e => {
                                newStatusRef.current = e.target.value;
                            }} />
                            {opt}
                        </label>
                    )
                })
            }
            </div>
            <button className="mt-2 rounded-lg bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-teal-50 hover:text-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-500/15" onClick={() => {
                dispatch({
                    type: 'CHANGE_STATUS',
                    patient_id: id,
                    new_status: newStatusRef.current
                })
                newStatusRef.current = null
            }}>Update status</button>
        </fieldset>
    );
})

export default NewStatusSelect;
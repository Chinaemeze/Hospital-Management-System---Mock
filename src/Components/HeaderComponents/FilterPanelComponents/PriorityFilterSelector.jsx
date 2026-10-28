import { memo } from "react";

const PriorityFilterSelector = memo(function ({ priorities_list, dispatch }) {

    return (
        <div className="flex items-center gap-2 rounded-xl border border-teal-800 bg-teal-900/70 px-3 py-2">
            <label className="whitespace-nowrap text-xs font-medium text-teal-100" htmlFor="priority-dropdown">Priority</label>

            <select className="min-w-0 max-w-32 bg-transparent text-xs font-semibold capitalize text-white outline-none [&>option]:text-slate-900" id="priority-dropdown" name="priority-choice" onChange={e => {
                dispatch({
                    type: 'SET_PRIORITY_FILTER',
                    value: e.target.value
                })
            }}>
                <option value="" disabled>All priorities</option>
                <option value="all">all</option>
                {
                    priorities_list.map((pri, ind) => {
                        return <option key={ind} value={pri}>{pri}</option>
                    })
                }
            </select>
        </div>
    )
})

export default PriorityFilterSelector;
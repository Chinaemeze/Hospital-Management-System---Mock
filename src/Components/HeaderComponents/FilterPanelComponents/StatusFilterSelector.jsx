import { memo } from "react";

const StatusFilterSelector = memo(function ({ statuses_list, dispatch }) {

    return (
        <div className="flex items-center gap-2 rounded-xl border border-teal-800 bg-teal-900/70 px-3 py-2">
            <label className="whitespace-nowrap text-xs font-medium text-teal-100" htmlFor="status-filter">Status</label>

            <select className="min-w-0 max-w-32 bg-transparent text-xs font-semibold capitalize text-white outline-none [&>option]:text-slate-900" id="status-filter" name="status-choice" onChange={e => {
                dispatch({
                    type: 'SET_STATUS_FILTER',
                    value: e.target.value
                })
            }} >
                <option value="" disabled>Status</option>
                <option value="all">all</option>
                {
                    statuses_list.map((stat, ind) => {
                        // i used index for keys here because i know they're not going to change
                        return <option key={ind} value={stat}>{stat}</option>
                    })
                }
            </select>
        </div>
    )
})

export default StatusFilterSelector;
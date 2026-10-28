import { useContext } from "react";
import DispatchContext from "../../ContextFiles/DispatchContext";

function SearchBar() {
    const dispatch = useContext(DispatchContext);

    return (
        <div className="flex flex-col gap-1.5 text-sm text-teal-100 sm:flex-row sm:items-center sm:gap-3">
            <label className="font-medium" htmlFor="searchbar">Search patients</label>
            <input className="w-full rounded-xl border border-teal-800 bg-teal-900 px-4 py-2.5 text-sm text-white outline-none transition placeholder:text-teal-300 focus:border-teal-400 focus:ring-4 focus:ring-teal-400/20 sm:w-72" type="search" id='searchbar' placeholder="Name, doctor, or specialty" onChange={e => {
                dispatch({
                    type: 'SET_SEARCH',
                    value: e.target.value
                })
            }} />
        </div>
    );
}

export default SearchBar;
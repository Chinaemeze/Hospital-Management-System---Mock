import { useContext, useMemo } from "react";
import DispatchContext from "../../ContextFiles/DispatchContext";
import GeneralStateContext from "../../ContextFiles/GeneralStateContext";
import DoctorFilterSelector from "./FilterPanelComponents/DoctorFilterSelector";
import StatusFilterSelector from "./FilterPanelComponents/StatusFilterSelector";
import PriorityFilterSelector from "./FilterPanelComponents/PriorityFilterSelector";

function FilterPanel() {
    // extract doctors from general state
    const { doctors, patients } = useContext(GeneralStateContext);

    // extract dispatch from context
    const dispatch = useContext(DispatchContext);

    const priorities = useMemo(() => {
            return patients.reduce((acc, pat) => {
                if(!acc.includes(pat.priority)) {
                    acc.push(pat.priority);
                }
    
                return acc
            }, [])
        }, [patients]);

    const statuses = useMemo(() => {
        return patients.reduce((acc, pat) => {
            if(!acc.includes(pat.status)) {
                acc.push(pat.status)
            }

            return acc

        }, [])

    }, [patients])


    return (
        <div className="flex flex-wrap gap-2 text-sm text-white">
            <DoctorFilterSelector doctors_list={doctors} dispatch={dispatch} />
            <PriorityFilterSelector priorities_list={priorities} dispatch={dispatch} />
            <StatusFilterSelector statuses_list={statuses} dispatch={dispatch} />

        </div>
    );
}

export default FilterPanel;
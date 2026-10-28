import { memo, useContext } from "react";
import DispatchContext from "../../ContextFiles/DispatchContext";
import PatientCard from "./PatientCard";

const  PatientsList = memo(function({ patients_list }) {
    const dispatch = useContext(DispatchContext);
    
    return (
        <div className="grid gap-3 sm:grid-cols-2">
            {patients_list.length === 0 ? (
                <div className="col-span-full rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-10 text-center">
                    <p className="font-semibold text-slate-700">No patients found</p>
                    <p className="mt-1 text-sm text-slate-500">Try changing your search or filters.</p>
                </div>
            ) : (
                patients_list.map(pat => {
                    return <PatientCard key={pat.id} patient_object={pat} dispatch={dispatch} />
                })
            )}
        </div>
    );
}
)
export default PatientsList;
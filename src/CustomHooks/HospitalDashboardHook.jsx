import reducer from "../reducer/ReducerFunction";
import { useMemo, useReducer } from "react";

function useHospitalDashboard(initial_stateful_data) {
    // initialise state with reducer
    const [generalState, dispatch] = useReducer(reducer, initial_stateful_data);



    const selectedPatient = useMemo(() => {
        return generalState.patients.find(pat => {
            return pat.id === generalState.selectedPatientId
        })
    }, [generalState.selectedPatientId, generalState.patients]);

    // FIRST PHASE FILTERING
    const phase1FilteredBySearch = useMemo(() => {

        return generalState.patients.filter(pat => {
            if (!generalState.search) return true
            const doctorOfPatient = generalState.doctors.find(doc => doc.id === pat.doctorId);

            const docHasName = doctorOfPatient.name.toLowerCase().replace(/\s+/g, "").includes(generalState.search.toLowerCase().replace(/\s+/g, ""));

            const docHasSpecialty = doctorOfPatient.specialty.toLowerCase().includes(generalState.search.toLowerCase().replace(/\s+/g, ""));


            const nameMatch = pat.name.toLowerCase().includes(generalState.search.toLowerCase().replace(/\s+/g, ""));

            return nameMatch || docHasName || docHasSpecialty

        })
    }, [generalState.search, generalState.patients, generalState.doctors]);



    // SECOND PHASE FILTERING
    const phase2FilteredByOptions = useMemo(() => {
        // check to see if all filters === 'all'
        const filtersSetAsAll = (generalState.statusFilter === 'all') && (generalState.priorityFilter === 'all') && (generalState.doctorFilter === 'all');
        

        return phase1FilteredBySearch.filter(pat => {
            if (filtersSetAsAll) return true

            

            return (
                ((generalState.statusFilter === 'all') ? true : (generalState.statusFilter === pat.status))
                &&
                ((generalState.doctorFilter === 'all') ? true : (Number(generalState.doctorFilter) === pat.doctorId))
                &&
                ((generalState.priorityFilter === 'all') ? true : (generalState.priorityFilter === pat.priority))
            )
        })
    }, [generalState.priorityFilter, generalState.statusFilter, generalState.doctorFilter, phase1FilteredBySearch]);

    // derived statistics
    const patientsStatisticsObject = useMemo(() => {
        return generalState.patients.reduce((acc, pat) => {
            if(pat.priority === 'critical') {
                acc[pat.priority] = acc[pat.priority] || 0;
                acc[pat.priority] +=1;
            }

            if(pat.status === 'waiting' || pat.status === 'discharged') {
                acc[pat.status] = acc[pat.status] || 0;
                acc[pat.status] +=1
            }

            acc['totalNumberOfPatients'] = generalState.patients.length

            return acc

        }, {});

    }, [generalState.patients])

    const allDoctors = useMemo(() => {
        return generalState.doctors
    }, [])

    const allPriorities = useMemo(() => {
        return generalState.patients.reduce((acc, pat) => {
            if(!acc.includes(pat.priority)) {
                acc.push(pat.priority)
            }
            return acc
        }, [])
    }, [generalState.patients]);

    const allIdsInState = useMemo(() => {
        return generalState.patients.reduce((acc, pat) => {
            acc['patientsIds'] = acc['patientsIds'] || [];
            acc['notesIds'] = acc['notesIds'] || [];

            if(!acc['patientsIds'].includes(pat.id)) {
                acc['patientsIds'].push(pat.id);
            }

            pat.notes.forEach(note => {
                if(!acc['notesIds'].includes(note.id)) {
                    acc['notesIds'].push(note.id);
                }
            })

            return acc
            
        }, {})
    }, [generalState.patients])


    //exposed values
    return {
        generalState,
        selectedPatient,
        dispatch,
        phase2FilteredByOptions,
        patientsStatisticsObject,
        allDoctors,
        allPriorities,
        allIdsInState
    }
}

export default useHospitalDashboard;
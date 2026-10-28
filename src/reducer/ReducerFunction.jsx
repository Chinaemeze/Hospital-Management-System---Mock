function reducer(state, action) {
    switch (action.type) {
        case 'SELECT_PATIENT':
            return {
                ...state,
                selectedPatientId: action.id
            }

        case 'ADD_PATIENT':
            return {
                ...state,
                patients: [...state.patients, action.new_patient_object]
            }

        case 'DELETE_PATIENT':
            if (state.selectedPatientId !== action.patient_id) return

            return {
                ...state,
                selectedPatientId: null,
                patients: state.patients.filter(pat => pat.id !== action.patient_id)
            }

        case 'CHANGE_STATUS':
            return {
                ...state,
                patients: state.patients.map(pat => {
                    if (pat.id === action.patient_id) {
                        return {
                            ...pat,
                            status: action.new_status
                        }
                    }

                    return pat
                })
            }

        case 'CHANGE_PRIORITY':
            return {
                ...state,
                patients: state.patients.map(pat => {
                    if (pat.id === action.patient_id) {
                        return {
                            ...pat,
                            priority: action.new_priority
                        }
                    }

                    return pat
                })
            }

        case 'ASSIGN_DOCTOR':
            return {
                ...state,
                patients: state.patients.map(pat => {
                    if (pat.id === action.patient_id) {
                        return {
                            ...pat,
                            doctorId: action.new_doctor_id
                        }
                    }

                    return pat
                })
            }

        case 'ADD_NOTE':
            return {
                ...state,
                patients: state.patients.map(pat => {
                    if (pat.id === action.patient_id) {
                        return {
                            ...pat,
                            notes: [...pat.notes, action.new_note_object]
                        }
                    }

                    return pat
                })
            }

        case 'UPDATE_VITALS':
            return {
                ...state,
                patients: state.patients.map(pat => {
                    if (pat.id === action.patient_id) {
                        return {
                            ...pat,
                            vitals: {
                                ...pat.vitals,
                                [action.key_of_concern]: action.new_value
                            }
                        }
                    }

                    return pat
                })
            }

        case 'SET_SEARCH':
            return {
                ...state,
                search: action.value
            }

        case 'SET_STATUS_FILTER':
            return {
                ...state,
                statusFilter: action.value
            }

        case 'SET_PRIORITY_FILTER':
            return {
                ...state,
                priorityFilter: action.value
            }

        case 'SET_DOCTOR_FILTER':
            return {
                ...state,
                doctorFilter: action.value
            }

        default:
            return state
    }
}

export default reducer;
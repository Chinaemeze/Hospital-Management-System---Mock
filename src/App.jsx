import initialState from './initialstate';
import useHospitalDashboard from './CustomHooks/HospitalDashboardHook';
import DispatchContext from './ContextFiles/DispatchContext';
import GeneralStateContext from './ContextFiles/GeneralStateContext';
import AllDoctorsContext from './ContextFiles/AllDoctorsContext';
import AllIDsInStateContext from './ContextFiles/AllIdsContext';
import Header from './Components/Header';
import PatientsList from './Components/PatientsComponents/PatientList';
import PatientDetails from './Components/PatientsComponents/PatientDetails';
import DashboardStats from './Components/DashboardStats';
import AddNewPatientForm from './Components/AddPatientForm';

function App() {
  const { generalState, dispatch, phase2FilteredByOptions, patientsStatisticsObject, selectedPatient, allDoctors, allPriorities, allIdsInState } = useHospitalDashboard(initialState);

  return (
    <GeneralStateContext.Provider value={generalState}>
      <DispatchContext.Provider value={dispatch}>
        <div className="min-h-screen bg-white text-slate-900">
          <Header />
          <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
            <DashboardStats statistics_object={patientsStatisticsObject} />
            <div className="grid items-start gap-8 xl:grid-cols-[minmax(0,1.35fr)_minmax(340px,0.9fr)]">
              <section className="min-w-0">
                <div className="mb-4 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">Patient directory</p>
                    <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">Patient overview</h2>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-slate-600 ring-1 ring-slate-200">
                    {phase2FilteredByOptions.length} records
                  </span>
                </div>
                <PatientsList patients_list={phase2FilteredByOptions} />
              </section>
              <div className="flex min-w-0 flex-col gap-6">
                <AllDoctorsContext.Provider value={allDoctors}>
                  <AllIDsInStateContext.Provider value={allIdsInState}>
                    {selectedPatient ? (
                      <PatientDetails details_object={selectedPatient} />
                    ) : (
                      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
                        <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-2xl bg-teal-50 text-2xl">＋</div>
                        <h2 className="text-lg font-semibold text-slate-900">Select a patient</h2>
                        <p className="mt-1 text-sm text-slate-500">Choose a patient record to view details and manage care.</p>
                      </div>
                    )}
                  </AllIDsInStateContext.Provider>
                  <AddNewPatientForm
                    all_doctors={allDoctors}
                    all_priorities={allPriorities}
                    all_patient_ids={allIdsInState.patientsIds}
                    dispatch={dispatch}
                  />
                </AllDoctorsContext.Provider>
              </div>
            </div>
          </main>
        </div>
      </DispatchContext.Provider>
    </GeneralStateContext.Provider>
  )
}

export default App

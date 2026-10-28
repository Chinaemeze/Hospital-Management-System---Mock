import { memo, useCallback, useContext, useRef } from "react";
import DispatchContext from "../../../../ContextFiles/DispatchContext";
import AllIDsInStateContext from "../../../../ContextFiles/AllIdsContext";
import Note from "./Note";

const NotesList = memo(function ({ notes_list, id_of_patient }) {
    const generateNoteId = useCallback(() => {
        return Math.floor(Math.random() * 900) + 100;
    }, [])

    const newNoteTextRef = useRef(null);

    const dispatch = useContext(DispatchContext);

    const { notesIds } = useContext(AllIDsInStateContext)

    const addNoteInGeneralState = () => {
        const newNoteObject = {
            id: function () {
                let generatedId;
                do {
                    generatedId = generateNoteId();
                } while (notesIds.includes(generatedId))

                return generatedId
            }(),

            text: newNoteTextRef.current
        };

        if (!newNoteTextRef.current) return

        dispatch({
            type: 'ADD_NOTE',
            new_note_object: newNoteObject,
            patient_id: id_of_patient
        })

    }

    return (
        <section className="rounded-xl border border-slate-200 p-4">
            <h3 className="text-sm font-bold text-slate-900">Care notes <span className="ml-1 rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-500">{notes_list.length}</span></h3>
            <ol className="mt-3 space-y-2">
                {
                    (!notes_list.length) ?
                        <li className="rounded-lg bg-slate-50 px-3 py-3 text-sm text-slate-500">No notes yet. Add a note to keep the care team informed.</li> :
                        notes_list.map(note => {
                            return (
                                <li className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2.5" key={note.id}>
                                    <Note note_object={note} />
                                </li>
                            )
                        })
                }
            </ol>

            <div className="mt-4">
                <label className="mb-1.5 block text-xs font-semibold text-slate-600" htmlFor={`new-note-${id_of_patient}`}>Add a note</label>
                <div className="flex flex-col gap-2 sm:flex-row">
                <input className="min-w-0 flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10" type="text" id={`new-note-${id_of_patient}`} placeholder="Write a care note..." onChange={e => {
                    newNoteTextRef.current = e.target.value;
                }} />
                <button className="rounded-lg bg-teal-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-500/25" onClick={addNoteInGeneralState}>Add note</button>
                </div>
            </div>

        </section>
    )
});

export default NotesList;
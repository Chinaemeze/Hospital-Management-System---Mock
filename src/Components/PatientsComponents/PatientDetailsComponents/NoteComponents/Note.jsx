function Note({ note_object }) {
    return (
        <p className="text-sm leading-6 text-slate-700">{note_object.text}</p>
    )
}

export default Note;
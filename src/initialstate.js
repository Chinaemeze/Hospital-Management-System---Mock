const initialState = {
    selectedPatientId: null,

    search: "",
    statusFilter: "all",
    priorityFilter: "all",
    doctorFilter: "all",

    doctors: [
        { id: 1, name: "Dr. Sarah", specialty: "Cardiology" },
        { id: 2, name: "Dr. James", specialty: "Neurology" },
        { id: 3, name: "Dr. Grace", specialty: "Emergency" }
    ],

    patients: [{
            id: 101,
            name: "Amaka Okafor",
            age: 28,
            priority: "critical",
            status: "waiting",
            doctorId: 3,
            vitals: {
                heartRate: 132,
                bloodPressure: "170/110"
            },
            notes: [
                { id: 1, text: "Possible cardiac arrest." }
            ]
        },

        {
            id: 102,
            name: "David Mensah",
            age: 41,
            priority: "medium",
            status: "treating",
            doctorId: 1,
            vitals: {
                heartRate: 88,
                bloodPressure: "122/81"
            },
            notes: []
        },

        {
            id: 103,
            name: "Mary Johnson",
            age: 19,
            priority: "low",
            status: "discharged",
            doctorId: 2,
            vitals: {
                heartRate: 72,
                bloodPressure: "118/75"
            },
            notes: [
                { id: 2, text: "Recovered successfully." }
            ]
        },

        {
            id: 104,
            name: "Chinedu Eze",
            age: 56,
            priority: "high",
            status: "waiting",
            doctorId: 3,
            vitals: {
                heartRate: 108,
                bloodPressure: "154/96"
            },
            notes: [
                { id: 3, text: "Complaining of severe chest pain." },
                { id: 4, text: "Patient arrived approximately 20 minutes ago." }
            ]
        },

        {
            id: 105,
            name: "Sarah Williams",
            age: 34,
            priority: "medium",
            status: "treating",
            doctorId: 2,
            vitals: {
                heartRate: 94,
                bloodPressure: "128/84"
            },
            notes: [
                { id: 5, text: "Experiencing recurring headaches." }
            ]
        },

        {
            id: 106,
            name: "Ibrahim Musa",
            age: 67,
            priority: "critical",
            status: "treating",
            doctorId: 1,
            vitals: {
                heartRate: 126,
                bloodPressure: "182/112"
            },
            notes: [
                { id: 6, text: "History of hypertension." },
                { id: 7, text: "Requires continuous monitoring." }
            ]
        },

        {
            id: 107,
            name: "Grace Adeyemi",
            age: 23,
            priority: "low",
            status: "waiting",
            doctorId: 3,
            vitals: {
                heartRate: 76,
                bloodPressure: "116/74"
            },
            notes: []
        },

        {
            id: 108,
            name: "Michael Brown",
            age: 45,
            priority: "high",
            status: "treating",
            doctorId: 1,
            vitals: {
                heartRate: 112,
                bloodPressure: "148/92"
            },
            notes: [
                { id: 8, text: "Shortness of breath reported." }
            ]
        },

        {
            id: 109,
            name: "Ngozi Okeke",
            age: 31,
            priority: "medium",
            status: "discharged",
            doctorId: 2,
            vitals: {
                heartRate: 70,
                bloodPressure: "120/78"
            },
            notes: [
                { id: 9, text: "Patient stable after treatment." }
            ]
        },

        {
            id: 110,
            name: "Daniel Carter",
            age: 52,
            priority: "high",
            status: "waiting",
            doctorId: 1,
            vitals: {
                heartRate: 104,
                bloodPressure: "150/94"
            },
            notes: [
                { id: 10, text: "Persistent dizziness." },
                { id: 11, text: "Patient requires neurological assessment." }
            ]
        },

        {
            id: 111,
            name: "Aisha Bello",
            age: 26,
            priority: "low",
            status: "treating",
            doctorId: 3,
            vitals: {
                heartRate: 82,
                bloodPressure: "119/77"
            },
            notes: []
        },

        {
            id: 112,
            name: "Emeka Nwosu",
            age: 73,
            priority: "critical",
            status: "waiting",
            doctorId: 2,
            vitals: {
                heartRate: 138,
                bloodPressure: "190/118"
            },
            notes: [
                { id: 12, text: "Patient arrived unconscious." },
                { id: 13, text: "Immediate neurological evaluation required." }
            ]
        },

        {
            id: 113,
            name: "Rebecca Adams",
            age: 38,
            priority: "medium",
            status: "discharged",
            doctorId: 3,
            vitals: {
                heartRate: 74,
                bloodPressure: "121/79"
            },
            notes: [
                { id: 14, text: "Discharged after observation." }
            ]
        },

        {
            id: 114,
            name: "Tunde Balogun",
            age: 49,
            priority: "high",
            status: "treating",
            doctorId: 2,
            vitals: {
                heartRate: 118,
                bloodPressure: "160/101"
            },
            notes: [
                { id: 15, text: "Severe migraine symptoms." }
            ]
        },

        {
            id: 115,
            name: "Jessica Wilson",
            age: 22,
            priority: "low",
            status: "waiting",
            doctorId: 1,
            vitals: {
                heartRate: 78,
                bloodPressure: "117/76"
            },
            notes: []
        }
    ]
};

export default initialState;
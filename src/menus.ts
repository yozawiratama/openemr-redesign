const menus = [
    {
        text: "Flow Board",
        value: "FLOW_BOARD",
    },
    {
        text: "Recall Board",
        value: "RECALL_BOARD",
    },
    {
        text: "Patient / Client",
        value: "PATIENT_CLIENT",
        child: [
            {
                text: "Patients",
                value: "PATIENTS",
                desc: "All Patients",
            },
            {
                text: "New",
                value: "NEW_PATIENT",
                desc: "Make new Patients",
            },
            {
                text: "Visits",
                value: "VISITS",
                desc: "Visit history and new Visits"
            },
        ],
    },
    {
        text: 'Fees',
        value: 'FEES',
        child: [
            {
                text: "Billing Manager",
                value: "FEES_BILLING_MANAGER",
                desc: "Manage bill",
            },
            {
                text: "Payment",
                value: "FEES_PAYMENT",
                desc: "Manage Payment",
            },
            {
                text: "Checkout",
                value: "FEES_CHECKOUT",
                desc: "Manage Checkout",
            },
        ]
    },
    {
        text: "Modules",
        value: "MODULES",
    },
    {
        text: "Procedures",
        value: "PROCEDURES",
        child: [
            {
                text: "Configuration",
                value: "PROCEDURE_CONFIG",
                desc: "Manage Configuration",
            },
        ]
    },
    {
        text: "Administration",
        value: "ADMINISTRATION",
        child: [
            {
                text: "Clinic",
                value: "ADMINISTRATION_CLINIC",
                desc: "Manage Clinic",
            },
        ]
    },
    {
        text: "Misc",
        value: "MISC",
        child: [
            {
                text: "Offince Notes",
                value: "MISC_OFFICE_NOTES",
                desc: "View Office Notes",
            },
        ]
    },
    {
        text: "About",
        value: "ABOUT",
    },
];

export default menus;
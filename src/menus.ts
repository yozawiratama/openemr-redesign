const menus = [
    {
        text: "Dashboard",
        value: "DASHBOARD",
    },
    {
        text: "Calendar",
        value: "CALENDAR",
    },
    {
        text: "Flow Board",
        value: "FLOW_BOARD",
    },
    {
        text: "Recall Board",
        value: "RECALL_BOARD",
    },
    {
        text: "Messages",
        value: "MESSAGES",
    },
    {
        text: "Patient / Client",
        value: "PATIENT_CLIENT",
        child: [
            {
                text: "Patients",
                code: "PATIENTS",
                desc: "All Patients",
            },
            {
                text: "New",
                code: "NEW_PATIENT",
                desc: "Make new Patients",
            },
            {
                text: "Visits",
                code: "VISITS",
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
                code: "FEES_BILLING_MANAGER",
                desc: "Manage bill",
            },
            {
                text: "Payment",
                code: "FEES_PAYMENT",
                desc: "Manage Payment",
            },
            {
                text: "Checkout",
                code: "FEES_CHECKOUT",
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
                code: "PROCEDURE_CONFIG",
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
                code: "ADMINISTRATION_CLINIC",
                desc: "Manage Clinic",
            },
        ]
    },
    {
        text: "Reports",
        value: "REPORT",
        child: [
            {
                text: "Insurance",
                code: "REPORT_INSURANCE",
                desc: "Report Insurance",
            },
        ]
    },
    {
        text: "Misc",
        value: "MISC",
        child: [
            {
                text: "Offince Notes",
                code: "MISC_OFFICE_NOTES",
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
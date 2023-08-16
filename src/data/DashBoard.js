import {
    UilHeartBreak,
    UilMedicalDrip,
    UilMedkit

} from "@iconscout/react-unicons";

export const DashCardData = [{
        title: "Symptoms",
        color: {
            background: "linear-gradient(180deg, #0b8a77 0%, #0b8a77 100%)",
            boxShadow: "0px 10px 20px 0px #63b8aa",
        },
        barValue: 100,
        value: "33",
        png: UilMedicalDrip,
        link: "/appointment",
    },
    {
        title: "Severe",
        color: {
            background: "linear-gradient(180deg, #db6e6f 0%, #c97374 100%)",
            boxShadow: "0px 10px 20px 0px #ba3638",
        },
        barValue: 66.9,
        value: "20",
        png: UilHeartBreak,
        link: "/vitals",
    },
    {
        title: "Discomfort",
        color: {
            background: "linear-gradient(180deg, #cd6fe8 0%, #aa6abd 100%)",
            boxShadow: "0px 10px 20px 0px #9138ab",
        },
        barValue: 40.9,
        value: "13",
        png: UilMedkit,
        link: "/vitals",
    }
];
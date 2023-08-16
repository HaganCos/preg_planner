import {
    UilTemperatureHalf,
    UilWeight,
    UilHeartbeat,

} from "@iconscout/react-unicons";

export const VitalsDataCards = [{
        title: "Temperature",
        color: {
            background: "linear-gradient(180deg, #03bafc 0%, #5fc4e8 100%)",
            boxShadow: "0px 10px 20px 0px #087cbf",
        },
        barValue: 56,
        value: "80.0 °C",
        png: UilTemperatureHalf,
    },
    {
        title: "Pressure",
        color: {
            background: "linear-gradient(180deg, #eb75a4 0%, #eb86ae 100%)",
            boxShadow: "0px 10px 20px 0px #ed2f7b",
        },
        barValue: 66.9,
        value: "108.0 mmHg",
        png: UilHeartbeat,
    },
    {
        title: "Weight",
        color: {
            background: "linear-gradient(180deg, #71cc16 0%, #67bd11 100%)",
            boxShadow: "0px 10px 20px 0px #4a8a0b",
        },
        barValue: 70.9,
        value: "230.0 KG",
        png: UilWeight,
    }
];
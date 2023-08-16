import { UilBookMedical, UilCalender } from "@iconscout/react-unicons";
import img from '../imgs/pregbuk.png';
import img2 from '../imgs/caldnr.png';

export const AppntCardsData = [{
        title: "Appointment",
        img: img,
        info: "Add",
        icon: UilBookMedical,
        link: "/calendar",
        color: {
            background: "linear-gradient(180deg, #eb75a4 0%, #eb86ae 100%)",
            boxShadow: "0px 10px 20px 0px #ed2f7b",
        },
    },
    {
        title: "Calendar",
        img: img2,
        info: "View",
        icon: UilCalender,
        link: "/addBooking",
        color: {
            background: "linear-gradient(180deg, #03bafc 0%, #5fc4e8 100%)",
            boxShadow: "0px 10px 20px 0px #0894c7",
        },
    },

];
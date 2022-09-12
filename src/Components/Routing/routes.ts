import {BIO_ROUTE, PETPROJ_ROUTE, WORKHISTORY_ROUTE} from "../../utils/constants";
import bio from "../../Pages/Bio page/bio";
import pet from "../../Pages/Pet projects page/pet";
import work from "../../Pages/Work history page/work";


export const routes = [
    {
        path: BIO_ROUTE,
        element: bio
    },
    {
        path: PETPROJ_ROUTE,
        element: pet
    },
    {
        path: WORKHISTORY_ROUTE,
        element: work
    }
]
import { createContext } from "react";

const UserContext = createContext({
    loggedUser: "Default User",
    restData: ""
})
export default UserContext
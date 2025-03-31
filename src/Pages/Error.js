import { useRouteError } from "react-router-dom"

const Error = () =>{
    const er = useRouteError();
    return(
        <>
        <h1>Oops!!</h1>
        <h2>Something went wrong</h2>
        <h3>{er.status}:{er.statusText}</h3>
        </>
    )
}
export default Error
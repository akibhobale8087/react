import {useRouteError} from "react-router-dom"

const Error = () =>{

    const err = useRouteError();
    return (
        <>
        <h1>Oops !!</h1>
        <p>
            Something Went Wrong......!!
        </p>
        <h2>{err.status + " : " + err.statusText}</h2>
        </>
    )
}


export default Error; 
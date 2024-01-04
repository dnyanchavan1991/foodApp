import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div className="container">
            <p>Something where wrong..!</p>
            <p>{err.status} : {err.statuText} </p>
        </div>
    )
}

export default Error
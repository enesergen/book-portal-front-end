export default function Button2(props) {
    return (
        <>
            <button className="btn btn-dark m-5" id={props.id}>{props.name}</button>
        </>
    )
}
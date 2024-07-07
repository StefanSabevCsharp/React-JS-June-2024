export default function TodoItem(props) {

    const status = ["todo"];

    if(props.isCompleted){
        status.push("is-completed");
    }


    return (
        <tr className={status.join(" ")}>
            <td>{props.text}</td>
            <td>{props.isCompleted ? "Completed" : "Incomplete"}</td>
            <td className="todo-action">
                <button className="btn todo-btn" onClick={ () => props.changeStatusHandler(props.id)}>Change status</button>
            </td>
        </tr>
    );
}

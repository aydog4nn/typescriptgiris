import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck, FaRegEdit } from "react-icons/fa";
import { TodoType } from "../redux/types/Types";
import { useDispatch } from "react-redux";
import { removeToById, updateTodo } from "../redux/todoSlice";
import { useState } from "react";

interface TodoProps {
    todoProps: TodoType;
}

function Todo({ todoProps }: TodoProps) {
    const { id, content } = todoProps;
    const dispatch = useDispatch();
    const [editable, setEditable] = useState<boolean>(false);
    const [newTodo, setNewTodo] = useState<string>(content);
    const handleRemoveTodo = () => {
        dispatch(removeToById(id));
    };
    const handleUpdateTodo = () => {
        const payload:TodoType = {
            id:id,
            content:newTodo
        }
        dispatch(updateTodo(payload))
        setEditable(false);
    }
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                border: "1px solid lightgrey",
                padding: "16px",
                marginTop: "25px",
                borderRadius: "5px",
            }}
        >
            {editable ? (
                <input
                    type="text"
                    style={{width:"400px", border:"none",borderBottom:"1px solid lightgrey",outline:"none"}}
                    value={newTodo}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setNewTodo(e.target.value)
                    }
                />
            ) : (
                <div>{content}</div>
            )}

            <div>
                <IoMdRemoveCircleOutline
                    onClick={handleRemoveTodo}
                    className="icons"
                    style={{ marginRight: "8px" }}
                />
                {editable ? (
                    <FaCheck className="icons" onClick={handleUpdateTodo} />
                ) : (
                    <FaRegEdit
                        onClick={() => setEditable(true)}
                        className="icons"
                    />
                )}
            </div>
        </div>
    );
}

export default Todo;

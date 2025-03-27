import React, { useState } from "react";

export const TaskComp: React.FC = () => {
    const [task, setTask] = useState<string>(""); // Estado para o texto da tarefa
    const [isCompleted, setIsCompleted] = useState<boolean>(false); // Estado para o status da tarefa

    const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    };

    const handleCheckboxChange = () => {
        setIsCompleted(!isCompleted);
    };

    return (
        <div className="border border-gray-300 p-4 rounded-md max-w-md">
            <input
                type="text"
                value={task}
                onChange={handleTaskChange}
                placeholder="Digite sua tarefa aqui"
                 className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex items-center">
                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={isCompleted}
                        onChange={handleCheckboxChange}
                        className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span>Marcar como concluída</span>
                </label>
            </div>
            <div className={`mt-4 ${isCompleted ? "text-green-600" : "text-red-600"}`}>
                {isCompleted ? "Tarefa concluída!" : "Tarefa pendente"}
            </div>
        </div>
    );
};

export default TaskComp;
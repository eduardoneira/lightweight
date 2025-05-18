import {useParams} from "react-router-dom";
import routines from "../data/routines";

const RoutinePage = () => {
    const {id} = useParams();
    const routine = routines.find((r) => r.id === id);

    if (!routine) return <p className="p-4">Routine not found</p>;

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-3">{routine.name}</h1>
            <ul className="list-disc pl-6">
                {routine.exercises.map((exercise, index) => (
                    <li key={index}>{exercise}</li>
                ))}
            </ul>
        </div>
    );
};

export default RoutinePage;

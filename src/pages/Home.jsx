import React, { useEffect, useState } from "react";

const Home = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetch('/exercises.json')
            .then(res => res.json())
            .then(data => setExercises(data));
    }, []);


    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">My Exercises</h1>
            {exercises.length === 0 ? (
                <p>No exercises added yet.</p>
            ) : (
                <ul className="space-y-2">
                    {exercises.map((exercise, index) => (
                        <li
                            key={index}
                            className="border p-3 rounded-lg shadow hover:bg-gray-100"
                        >
                            <h2 className="text-lg font-semibold">{exercise.name}</h2>
                            <p>Entries: {exercise.logs.length}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Home;

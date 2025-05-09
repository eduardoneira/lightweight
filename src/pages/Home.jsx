import React from "react";
import { Link } from "react-router-dom";
import routines from "../data/routines";

const Home = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">My Workout Routines</h1>
            <ul className="space-y-3">
                {routines.map((routine) => (
                    <li key={routine.id}>
                        <Link
                            to={`/routine/${routine.id}`}
                            className="block border p-3 rounded shadow hover:bg-gray-100"
                        >
                            {routine.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;

import { useState } from "react";
import PrioItem from "./PrioItem";
import { useStore } from '../../data/store.js';

const PrioList = () => {
    const todos = useStore(state => state.todos);
    const [searchTerm, setSearchTerm] = useState("");

    // Filtrera todos baserat på om de är gjorda och om de matchar sökordet
    const items = todos.filter(t => !t.done && t.text.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="prio-list">
            <h2>Vad ska jag göra nu?</h2>
            <div className="list-container">
                <input
                    type="search"
                    placeholder="Filtrera uppgifter"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <div className="prio-items">
                    {items.map((item, index) => (
                        <PrioItem key={item.id} item={item} num={index + 1} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PrioList;

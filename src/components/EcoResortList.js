import React from 'react';

function EcoResortList({ resorts }) {
    return (
        <div>
            {resorts.map((resort) => (
                <div key={resort._id}>
                    <h2>{resort.name}</h2>
                    <p>{resort.description}</p>
                    <p>Location: {resort.location}</p>
                    <img src={resort.imageUrl} alt={resort.name} />
                </div>
            ))}
        </div>
    );
}

export default EcoResortList;

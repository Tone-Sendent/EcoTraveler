import React, { useState } from 'react';

function BookingForm({ resort }) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleBooking = () => {
        // Handle booking logic here
    };

    return (
        <div>
            <h2>Book {resort.name}</h2>
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            <button onClick={handleBooking}>Book Now</button>
        </div>
    );
}

export default BookingForm;

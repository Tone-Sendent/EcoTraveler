import React from 'react';
import EcoResortList from './components/EcoResortList';
import TravelExperience from './components/TravelExperience';
import BookingForm from './components/BookingForm';
import EcoPartners from './components/EcoPartners';
import PaymentGateway from './components/PaymentGateway';

function App() {
    return (
        <div className="App">
            <header>
                <h1>Eco Traveler</h1>
            </header>
            <EcoResortList resorts={[]} /> {/* Pass in resorts data here */}
            <TravelExperience />
            {/* Include BookingForm per resort as needed */}
            <EcoPartners />
            <PaymentGateway />
            <footer>
                &copy; 2023 Eco Traveler
            </footer>
        </div>
    );
}

export default App;

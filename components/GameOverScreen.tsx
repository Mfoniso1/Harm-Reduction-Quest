import React, { useState } from 'react';
import Button from './Button';
import { CLINICS } from '../data/clinics';

interface GameOverScreenProps {
  score: number;
  safetyLevel: number;
  onRestart: () => void;
}

const cities = ['Abuja', 'Lagos', 'Port Harcourt'];
type City = 'Abuja' | 'Lagos' | 'Port Harcourt' | null;

const GameOverScreen: React.FC<GameOverScreenProps> = ({ score, safetyLevel, onRestart }) => {
    const [selectedCity, setSelectedCity] = useState<City>(null);
    const [referralEmail, setReferralEmail] = useState('');
    const [referralMessage, setReferralMessage] = useState('');
    const [counsellorMessage, setCounsellorMessage] = useState('');

    const handleReferral = (e: React.FormEvent) => {
        e.preventDefault();
        if (referralEmail) {
            setReferralMessage(`+50 HRQ Coins! Referral sent to ${referralEmail}.`);
            setReferralEmail('');
        }
    };

    return (
        <main className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 min-h-screen text-white flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-4xl mx-auto bg-black/40 backdrop-blur-lg p-6 md:p-8 rounded-2xl shadow-2xl border border-white/30 text-white">
                <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-2 text-center">Quest Complete!</h1>
                <p className="text-center text-gray-300 mb-6">Here's your mission summary.</p>

                <div className="flex justify-center items-center gap-8 bg-white/10 p-4 rounded-xl mb-8">
                    <div className="text-center">
                        <div className="text-lg font-bold uppercase tracking-wider text-gray-300">Final Score</div>
                        <div className="text-5xl font-bold text-cyan-300">{score}</div>
                    </div>
                    <div className="text-center">
                        <div className="text-lg font-bold uppercase tracking-wider text-gray-300">Safety Level</div>
                        <div className="text-5xl font-bold text-green-400">{safetyLevel}%</div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column: Find Help & Referrals */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold mb-3 text-yellow-300">Find Help Near You</h2>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {cities.map(city => (
                                    <button 
                                        key={city}
                                        onClick={() => setSelectedCity(city as City)}
                                        className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${selectedCity === city ? 'bg-cyan-500 text-white' : 'bg-white/20 hover:bg-white/30'}`}
                                    >
                                        {city}
                                    </button>
                                ))}
                            </div>
                            {selectedCity && (
                                <div className="bg-black/30 p-4 rounded-lg max-h-48 overflow-y-auto">
                                    <ul className="space-y-3">
                                        {CLINICS[selectedCity].map(clinic => (
                                            <li key={clinic.name} className="text-sm border-b border-white/10 pb-2 last:border-b-0">
                                                <p className="font-bold">{clinic.name}</p>
                                                <p className="text-xs text-gray-400">{clinic.address}</p>
                                                <a href={`mailto:${clinic.contact}?subject=Appointment Request from HRQ App`} className="text-cyan-400 hover:underline text-xs font-semibold">Book Appointment</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                         <div>
                            <h2 className="text-2xl font-bold mb-3 text-yellow-300">Get More HRQ Coins!</h2>
                            <p className="text-sm text-gray-300 mb-4">Refer a friend to earn more coins and unlock a better experience. Every referral helps spread awareness!</p>
                            <form onSubmit={handleReferral} className="flex gap-2">
                                <input 
                                    type="email"
                                    value={referralEmail}
                                    onChange={(e) => setReferralEmail(e.target.value)}
                                    placeholder="Friend's email"
                                    className="flex-grow bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                                    required
                                />
                                <Button type="submit" variant="primary" className="py-2 text-sm">Refer</Button>
                            </form>
                            {referralMessage && <p className="text-green-400 text-sm mt-2">{referralMessage}</p>}
                        </div>
                    </div>

                    {/* Right Column: Speak to a Counsellor */}
                    <div>
                        <h2 className="text-2xl font-bold mb-3 text-yellow-300">Speak with a Health Counsellor</h2>
                        <p className="text-sm text-gray-300 mb-4">Have questions? Need to talk? Send a confidential message directly to a counsellor.</p>
                        <textarea
                            value={counsellorMessage}
                            onChange={(e) => setCounsellorMessage(e.target.value)}
                            rows={5}
                            placeholder="Type your message here..."
                            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-cyan-400 focus:outline-none mb-3"
                        ></textarea>
                         <a 
                            href={`mailto:mfonisoakpatang@gmail.com?subject=Message from Harm Reduction Quest User&body=${encodeURIComponent(counsellorMessage)}`}
                            className="w-full text-center block px-6 py-3 font-bold rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400"
                        >
                            Send Message
                        </a>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <Button onClick={onRestart} className="text-xl px-10 py-4">
                        Play Again
                    </Button>
                </div>
            </div>
        </main>
    );
};

export default GameOverScreen;

import React, { useState } from 'react';
import { useStep } from '../context/StepContext';
import { motion, AnimatePresence } from "framer-motion";

import StartWork from './stepsComp/StartWork';
import EndWork from './stepsComp/EndWork';
import LastScreen from './stepsComp/LastScreen';
import MyBoard from './MyBoard';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { step } = useStep();

    return (
        <div className="home-container">
            {/* שלבי העבודה */}
            {(step === 1) ? <StartWork /> : (step === 2) ? <EndWork /> : <LastScreen />}

            <div className="relative h-screen w-screen bg-gray-100 flex justify-center items-center">
                {/* כפתור לפתיחת הרכיב */}
                <button onClick={() => setIsOpen(true)} className='details-button'>
                    <img src="images/arrow-details-up-white.png" alt="arrow-details-up" />
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", stiffness: 100, damping: 15 }}
                            drag="y"
                            dragConstraints={{ top: 0, bottom: 100 }}
                            onDragEnd={(event, info) => {
                                if (info.offset.y > 50) setIsOpen(false);
                            }}
                            className="fixed bottom-0 left-0 w-full h-2/3 bg-white shadow-xl rounded-t-lg z-50 flex flex-col"
                        >
                            {/* אזור הגרירה העליון */}
                            <motion.div 
                                drag="y"
                                dragConstraints={{ top: 0, bottom: 0 }}
                                className="w-full h-10 flex justify-center items-center cursor-grab"
                            >
                                <div className="w-12 h-1 bg-gray-400 rounded-full"></div>
                            </motion.div>

                            {/* תוכן פנימי עם גלילה */}
                            <div className="flex-1 overflow-y-auto p-4">
                                <MyBoard />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default Home;

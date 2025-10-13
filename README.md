
# Harm Reduction Quest

Harm Reduction Quest is an interactive, gamified educational experience designed to teach important principles of harm reduction, focusing on HIV and HCV prevention among people who inject drugs. The app presents a 20-question quiz in an engaging "Urban Survival Mission" format, complete with a "Candy Crush" style game board that provides rewarding visual feedback for correct answers.

## ✨ Features

-   **Interactive Quiz**: 20 multiple-choice questions covering critical topics like safe injection practices, disease transmission, overdose prevention, and community resources.
-   **Gamified Interface**: A dynamic game board with colorful candies that "crush" and animate when a user answers a question correctly, making learning more engaging.
-   **Scoring & Progress Tracking**:
    -   A **score** that increases with each correct answer.
    -   A **Safety Level** meter that goes up or down based on answers, providing immediate feedback on decision-making.
    -   **Badges** awarded for mastering specific safety concepts (e.g., 'Peer Ally', 'Clean Streets').
-   **Accessibility-Focused Audio**:
    -   **Text-to-Speech**: A speaker icon reads the question, options, and a concluding instruction aloud, powered by the browser's Web Speech API.
    -   **Sound Effects**: Instant audio feedback with a chime for correct answers and a buzz for incorrect ones.
    -   **Global Sound Control**: A master mute/unmute button in the header gives the user full control over all application sounds.
-   **Engaging UI/UX**:
    -   A welcoming start screen with a stylized doctor icon.
    -   Clean, modern design with a dark, immersive theme.
    -   Smooth animations for candy crushing, score pop-ups, and new candies dropping in.
-   **Responsive Design**: The interface is fully responsive and works seamlessly on desktop, tablet, and mobile devices.

## 🚀 How to Play

1.  **Start the Quest**: Open the application to the landing page and click the "Start Quest" button.
2.  **Answer the Questions**: Read the question and the associated scenario. Click on the option you believe is correct.
3.  **Listen and Learn**: Click the speaker icon next to the question to have it read aloud.
4.  **Watch the Board**: If you answer correctly, watch the candy board for a rewarding animation and a "Good Job!" message.
5.  **Track Your Progress**: Keep an eye on your score, safety level, and earned badges in the header.
6.  **Complete the Mission**: Progress through all 20 questions to complete your quest and solidify your harm reduction knowledge.

## 🛠️ Tech Stack

-   **Frontend**: React, TypeScript
-   **Styling**: Tailwind CSS (via CDN for simplicity)
-   **APIs**:
    -   **Web Speech API**: Used for the text-to-speech functionality.
    -   **Web Audio API**: Used for generating custom sound effects for correct/incorrect answers.
-   **Module Loading**: The app uses modern browser features like `importmap` to load React modules directly without a build step.

## 📁 File Structure

The project is organized into several key directories and files:

```
.
├── components/          # Reusable React components
│   ├── Button.tsx
│   ├── GameBoard.tsx    # The candy crush style grid
│   ├── Header.tsx       # Displays score, safety level, etc.
│   ├── QuestionRenderer.tsx # Renders the current question
│   └── StartScreen.tsx  # The initial landing page
├── data/
│   └── questions.ts     # Contains all 20 quiz questions and answers
├── utils/
│   └── audio.ts         # Utility for playing Web Audio API sound effects
├── App.tsx              # Main application component, manages all state
├── constants.ts         # Application-wide constants (board size, candy types)
├── index.html           # Main HTML entry point, includes styles and scripts
├── index.tsx            # Renders the React application
├── metadata.json        # Application metadata
├── types.ts             # All TypeScript type definitions
└── README.md            # This file
```

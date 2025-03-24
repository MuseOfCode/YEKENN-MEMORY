# YEKENN Memory Game

## Overview
The **YEKENN Memory Game** is a fun and interactive memory matching game built with **React**. The game is designed to challenge your memory by presenting a series of cards that need to be matched based on their values. The MVP (Minimum Viable Product) version is developed to establish the core game functionality and logic. The game will be continuously developed with more features, enhancements, and improvements by myself and Yejun Guan.

### Features
- **Card Matching**: The game involves a set of cards that are shuffled and placed face down. Players need to flip two cards at a time and try to match the values.
- **Timer**: A countdown timer tracks the remaining time to complete the game. The timer starts when the first card is flipped.
- **Win Condition**: The player wins the game once all the pairs of cards are matched.
- **Music**: A fun background track (Spider Dance) plays during the game, starting when the first card is flipped.

### The features of this MVP
- Timer functionality that starts once the first card is flipped.
- Card flipping mechanism with matching logic.
- Game logic to detect win and loss conditions.
- Sound effects, including background music when the game starts.

## Installation

1. **Clone the repository**:
```
   git clone https://github.com/MuseOfCode/YEKENN-MEMORY.git
```


2. **Install dependencies**:
Navigate to the project directory and install the required dependencies:
```
cd YEKENN-MEMORY npm install
```

3. **Start the development server**:
```
npm run dev
```

The application should now be running on `http://localhost:5173` (or another port if specified).

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Hooks**: For managing state and side effects within functional components.
- **use-sound**: A hook used for adding sound functionality (background music and sound effects).
- **CSS**: Styling for the components and overall layout.

---

## How Features Evolved and Future Improvements

### Feature Development
The core functionality of the game, including the **card matching logic**, **custom timer** and **leaderboard** was built to establish the MVP of the game. These features were developed with React and focused on creating a smooth and interactive user experience. As development progressed, new features like **player name validation** and **localStorage leaderboard persistence** were added to improve the gameplay experience.

The current version of the game serves as the foundation for future enhancements. The initial development was focused on ensuring that the game logic is solid and that the UI provides clear and intuitive feedback. Moving forward, additional features will be added, such as sound effects, difficulty levels and animations.

### Future Features & Improvements
- **Sound Effects**: Add sound effects for card matching, no match and game completion.
- **Difficulty Levels**: Implement different levels of difficulty (more cards, faster timer, etc.).
- **Backend Sync**: Sync the leaderboard with a backend service (e.g., Firebase, Node.js API) to enable real-time updates and data persistence across devices.
- **Visual Effects & Animations**: Improve the game’s aesthetics with animations for card flips, matched pairs and game transitions.
- **Mobile Optimisation**: Enhance the responsiveness and layout for mobile devices to improve the overall user experience.

### Collaboration & Ongoing Development
The development of this memory game will be a collaborative effort between myself and Yejun Guan, with additional features and improvements being continuously added. Some parts of the game’s features, such as backend integration or advanced animations, might be developed elsewhere. You can follow my collaborator's GitHub [here](https://github.com/wonton1979) to track ongoing contributions and development.

---
### Gameplay

[YEKENMEMORYGP.webm](https://github.com/user-attachments/assets/6bd4cb76-d610-4259-8377-40b403a81dad)



---
## Credits

- **Game Logic and Features**: Developed by Yejun Guan && Ken'Terria Reaves.
- **UI**: Ken'Terria Reaves.
- **Background Music**: "Spider Dance" by Toby Fox (Used with permission).



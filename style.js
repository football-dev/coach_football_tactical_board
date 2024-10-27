/* General Page Styling */
body {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f0f0;
}

/* Control Buttons */
.controls {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
}

.add-player {
    padding: 10px 15px;
    background-color: #006400;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.add-player:hover {
    background-color: #228B22;
}

/* Field Styling */
.field {
    width: 800px;
    height: 500px;
    background-color: #006400; /* Dark green field */
    position: relative;
    border: 5px solid #ffffff;
    box-sizing: border-box;
    overflow: hidden;
}

/* Center Circle */
.center-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    border: 2px solid white;
    border-radius: 50%;
    transform: translate(-50%, -50%);
}

/* Vertical Half Line */
.half-line {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background-color: white;
    transform: translateX(-50%);
}

/* Goal Boxes */
.goal-box {
    position: absolute;
    width: 80px;
    height: 200px;
    border: 2px solid white;
}

.left-goal {
    left: 0;
    top: 50%;
    transform: translateY(-50%);
}

.right-goal {
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

/* Penalty Boxes */
.penalty-box {
    position: absolute;
    width: 200px;
    height: 350px;
    border: 2px solid white;
}

.left-penalty {
    left: 0;
    top: 50%;
    transform: translateY(-50%);
}

.right-penalty {
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

/* Player Styling */
.player {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    cursor: grab;
    font-size: 18px;
    font-weight: bold;
    color: white;
    border: 2px solid #000;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

/* Team-specific Colors */
.team-a {
    background-color: #FF4500; /* Team A Color */
}

.team-b {
    background-color: #1E90FF; /* Team B Color */
}

/* Player Selection Styling */
.player.selected {
    outline: 2px solid #FFD700; /* Highlight selected players */
}

/* Selection Box Styling */
.selection-box {
    position: absolute;
    border: 2px dashed #FFD700;
    background-color: rgba(255, 215, 0, 0.2);
    pointer-events: none;
    z-index: 999;
}

/* Player Hover Effect */
.player:hover {
    transform: scale(1.1);
    transition: transform 0.2s;
}

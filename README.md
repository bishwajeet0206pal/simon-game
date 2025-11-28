# 🎮 Simon Game

A classic memory game built with HTML, CSS, and JavaScript featuring jQuery animations and sound effects. Test your memory by repeating increasingly complex color sequences!

![Simon Game](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## 🎯 About The Game

The Simon Game is a memory and concentration game where players must repeat random sequences of lights and sounds. Each level adds one more step to the sequence, making it progressively harder. One wrong move and it's game over!

## ✨ Features

- 🎨 **Interactive UI** - Vibrant color buttons with smooth animations
- 🔊 **Sound Effects** - Unique sounds for each color button
- 📈 **Progressive Difficulty** - Each level adds one more step to the sequence
- ⚡ **Visual Feedback** - Button animations and game-over flash effects
- 🎮 **Keyboard Controls** - Press any key to start/restart the game
- 📱 **Responsive Design** - Works on various screen sizes

## 🛠️ Technologies Used

- **HTML5** - Structure and content
- **CSS3** - Styling and animations
- **JavaScript (ES5)** - Game logic and interactivity
- **jQuery 3.7.1** - DOM manipulation and event handling

## 📁 Project Structure

```
Simon Game Challenge Starting Files/
│
├── index.html          # Main HTML file
├── styles.css          # Styling and animations
├── game.js            # Complete game logic
├── sounds/            # Audio files folder
│   ├── red.mp3
│   ├── blue.mp3
│   ├── green.mp3
│   ├── yellow.mp3
│   └── wrong.mp3
└── README.md          # This file
```

## 🚀 How to Play

1. **Start**: Press any key on your keyboard to begin
2. **Watch**: The game will highlight a colored button with sound
3. **Repeat**: Click the button(s) in the correct sequence
4. **Progress**: Each level adds one more button to the sequence
5. **Game Over**: Make a mistake and you'll need to restart!

## 💻 Installation & Setup

### Method 1: Direct Download

1. Clone or download this repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/simon-game.git
   ```

2. Navigate to the project folder:
   ```bash
   cd simon-game
   ```

3. Open `index.html` in your web browser

### Method 2: Live Server (Recommended)

1. Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code

2. Right-click on `index.html` and select "Open with Live Server"

## 🎯 How It Works

### Game Flow

```
Start → Generate Sequence → Show Sequence → User Input → Check Answer
         ↑                                                      ↓
         └──────────────── Correct ──────────────────────────┘
                                    ↓
                                  Wrong
                                    ↓
                               Game Over
```

### Key Functions

- **`nextSequence()`** - Generates and displays the next color in the sequence
- **`animatePress()`** - Provides visual feedback when buttons are pressed
- **`playSound()`** - Plays audio for button interactions
- **`checkAnswer()`** - Validates user input against the game pattern
- **`startOver()`** - Resets the game state for a new game

## 🎨 Code Highlights

### Random Sequence Generation
```javascript
function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    
    var randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
    playSound(randomChosenColour);
    animatePress(randomChosenColour);
}
```

### Answer Validation
```javascript
function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}
```

## 🎓 Learning Outcomes

This project demonstrates:
- ✅ DOM Manipulation with jQuery
- ✅ Event Handling (keyboard and click events)
- ✅ Arrays and array methods
- ✅ Conditional logic and control flow
- ✅ Functions and callbacks
- ✅ setTimeout for delayed execution
- ✅ Audio API for sound effects
- ✅ CSS animations and transitions

## 🔮 Future Enhancements

- [ ] Add difficulty levels (Easy, Medium, Hard)
- [ ] Implement high score tracking with localStorage
- [ ] Add multiplayer mode
- [ ] Create mobile-responsive touch controls
- [ ] Add colorblind-friendly mode
- [ ] Implement speed variations
- [ ] Add visual themes/skins

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- Inspired by the classic Simon electronic game (1978)
- Sound effects and assets from various open-source resources
- Built as part of web development learning journey

---

⭐ **Star this repo if you found it helpful!** ⭐

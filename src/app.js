import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
};

var knowEmoji = Object.keys(emojiDictionary);

export default function App() {
  const [userInput, setuserInput] = useState("");

  const [meaning, setmeaning] = useState("");

  function emojiHandler(event) {
    console.log(event.target.value);
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    console.log(meaning);

    if (meaning === undefined) {
      meaning = "Not Found in our Database";
    }

    setmeaning(meaning);
    setuserInput(userInput);
  }

  function emojiClick(emoji) {
    var meaning = emojiDictionary[emoji];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <input onChange={emojiHandler}></input>
      <div>
        Meaning of {userInput} is {meaning}
        <p>
          Check em out :
          {knowEmoji.map(function (emoji) {
            return (
              <span
                onClick={() => emojiClick(emoji)}
                style={{ fontSize: "35px", cursor: "pointer" }}
                key={emoji}
              >
                {emoji}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
}

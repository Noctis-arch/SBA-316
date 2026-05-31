const playlistForm = document.getElementById("playlist-form");
const nameInput = document.getElementById("name-input");
const moodSelect = document.querySelector("#mood-select");
const resultTitle = document.querySelector("#result-title");
const playlistContainer = document.getElementById("playlist-container");
const errorMessage = document.getElementById("error-message");
const savedMoodText = document.getElementById("saved-mood-text");
const songTemplate = document.getElementById("song-template");

const playlists = {
  chill: [
    { title: "Show Me How", artist: "Men I Trust" },
    { title: "Sweet Boy", artist: "Malcolm Todd" },
    { title: "Reflections", artist: "The Neighbourhood" }
  ],
  sad: [
    { title: "Cry", artist: "Cigarettes After Sex" },
    { title: "Wildflower", artist: "Billie Eilish" },
    { title: "No One Noticed", artist: "The Marías" }
  ],
  hype: [
    { title: "Swim", artist: "Chase Atlantic" },
    { title: "Into It", artist: "Chase Atlantic" },
    { title: "The Prom", artist: "Glaive" }
  ],
  focus: [
    { title: "Heavy", artist: "The Marías" },
    { title: "Slow Down", artist: "Chase Atlantic" },
    { title: "Nervous", artist: "The Neighbourhood" }
  ]
};

playlistForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const userName = nameInput.value.trim();
  const selectedMood = moodSelect.value;

    if (userName.length < 2 || selectedMood === "") {
    errorMessage.textContent = "Please enter your name and choose a mood.";
    return;
  }

  errorMessage.textContent = "";

  localStorage.setItem("lastMood", selectedMood);

  resultTitle.textContent = `${userName}'s ${selectedMood} playlist`;

  changeMoodTheme(selectedMood);
  createPlaylistCards(selectedMood);

  setTimeout(function () {
    savedMoodText.textContent = `Last mood picked: ${selectedMood}`;
  }, 300);
});

function changeMoodTheme(mood) {
  document.body.classList.remove(
    "chill-theme",
    "sad-theme",
    "hype-theme",
    "focus-theme"
  );

  document.body.classList.add(`${mood}-theme`);
}
//PIANO KEYS CONSTRUCTOR
function Keys(name, value, note, color) {
  this.name = name;
  this.value = value;
  this.note = note;
  this.color = color;
}

//PIANO KEYS
const keyNotes = [
  {
    value: 0,
    name: "DO",
    note: "C1",
    color: "white",
  },
  {
    value: 1,
    name: "DO#",
    note: "C#1",
    color: "black",
  },
  {
    value: 2,
    name: "RE",
    note: "D1",
    color: "white",
  },
  {
    value: 3,
    name: "RE#",
    note: "D#1",
    color: "black",
  },
  {
    value: 4,
    name: "MI",
    note: "E1",
    color: "white",
  },
  {
    value: 5,
    name: "FA",
    note: "F1",
    color: "white",
  },
  {
    value: 6,
    name: "FA#",
    note: "F#1",
    color: "black",
  },
  {
    value: 7,
    name: "SOL",
    note: "G1",
    color: "white",
  },
  {
    value: 8,
    name: "SOL#",
    note: "G#1",
    color: "black",
  },
  {
    value: 9,
    name: "LA",
    note: "A1",
    color: "white",
  },
  {
    value: 10,
    name: "LA#",
    note: "A#1",
    color: "black",
  },
  {
    value: 11,
    name: "SI",
    note: "B1",
    color: "white",
  },
  {
    value: 12,
    name: "DO",
    note: "C2",
    color: "white",
  },
  {
    value: 13,
    name: "DO#",
    note: "C#2",
    color: "black",
  },
  {
    value: 14,
    name: "RE",
    note: "D2",
    color: "white",
  },
  {
    value: 15,
    name: "RE#",
    note: "D#2",
    color: "black",
  },
  {
    value: 16,
    name: "MI",
    note: "E2",
    color: "white",
  },
  {
    value: 17,
    name: "FA",
    note: "F2",
    color: "white",
  },
  {
    value: 18,
    name: "FA#",
    note: "F#2",
    color: "black",
  },
  {
    value: 19,
    name: "SOL",
    note: "G2",
    color: "white",
  },
  {
    value: 20,
    name: "SOL#",
    note: "G#2",
    color: "black",
  },
  {
    value: 21,
    name: "LA",
    note: "A2",
    color: "white",
  },
  {
    value: 22,
    name: "LA#",
    note: "A#2",
    color: "black",
  },
  {
    value: 23,
    name: "SI",
    note: "B2",
    color: "white",
  },
];

//ASIGNAR OBJECT DATA A CADA DIV 
const keyDivs = document.querySelectorAll('.key');

const keyJson = JSON.stringify(keyNotes);
sessionStorage.setItem('keyNotes', keyJson);

for (let i = 0; i < keyNotes.length; i++) {
  keyDivs[i].dataset.keyObject = JSON.stringify(keyNotes[i]);
  console.log(keyDivs[i]);
}

// ARRAY OF ONLY KEY NAMES
const keyNames = keyNotes.map((note) => note.name);

// MELODIES
// Este es simplemente un banco de melodías para que el usuario pueda acceder.


const songs = [
  {
    title: "Feliz Cumpleaños",
    difficulty: "normal",
    notes: [
      keyNotes[0],
      keyNotes[0],
      keyNotes[2],
      keyNotes[0],
      keyNotes[5],
      keyNotes[4],
      keyNotes[0],
      keyNotes[0],
      keyNotes[2],
      keyNotes[0],
      keyNotes[7],
      keyNotes[5],
      keyNotes[0],
      keyNotes[0],
      keyNotes[12],
      keyNotes[9],
      keyNotes[5],
      keyNotes[5],
      keyNotes[4],
      keyNotes[2],
      keyNotes[10],
      keyNotes[10],
      keyNotes[9],
      keyNotes[5],
      keyNotes[7],
      keyNotes[5],
    ],
  },

  {
    title: "Estrellita",
    difficulty: "easy",
    notes: [
      keyNotes[0],
      keyNotes[0],
      keyNotes[7],
      keyNotes[7],
      keyNotes[9],
      keyNotes[9],
      keyNotes[7],
      keyNotes[5],
      keyNotes[5],
      keyNotes[4],
      keyNotes[4],
      keyNotes[2],
      keyNotes[2],
      keyNotes[0],
      keyNotes[7],
      keyNotes[7],
      keyNotes[5],
      keyNotes[5],
      keyNotes[4],
      keyNotes[4],
      keyNotes[2],
      keyNotes[7],
      keyNotes[7],
      keyNotes[5],
      keyNotes[5],
      keyNotes[4],
      keyNotes[4],
      keyNotes[2],
      keyNotes[0],
      keyNotes[0],
      keyNotes[7],
      keyNotes[7],
      keyNotes[9],
      keyNotes[9],
      keyNotes[7],
      keyNotes[5],
      keyNotes[5],
      keyNotes[4],
      keyNotes[4],
      keyNotes[2],
      keyNotes[7],
      keyNotes[0],
    ],
  },

  {
    title: "In The End",
    difficulty: "normal",
    notes: [
      keyNotes[3],
      keyNotes[10],
      keyNotes[10],
      keyNotes[6],
      keyNotes[5],
      keyNotes[5],
      keyNotes[5],
      keyNotes[5],
      keyNotes[6],
      keyNotes[3],
      keyNotes[10],
      keyNotes[10],
      keyNotes[6],
      keyNotes[5],
      keyNotes[5],
      keyNotes[5],
      keyNotes[5],
      keyNotes[6],
      keyNotes[3],
      keyNotes[10],
      keyNotes[10],
      keyNotes[6],
      keyNotes[5],
      keyNotes[5],
      keyNotes[5],
      keyNotes[5],
      keyNotes[6],
      keyNotes[3],
      keyNotes[10],
      keyNotes[10],
      keyNotes[6],
      keyNotes[5],
    ],
  },

  {
    title: "Quien Se Ha Tomado Todo El Vino",
    difficulty: "hard",
    notes: [
      keyNotes[9],
      keyNotes[12],
      keyNotes[16],
      keyNotes[9],
      keyNotes[12],
      keyNotes[16],
      keyNotes[9],
      keyNotes[12],
      keyNotes[16],
      keyNotes[14],
      keyNotes[12],
      keyNotes[11],
      keyNotes[9],
      keyNotes[7],
      keyNotes[11],
      keyNotes[14],
      keyNotes[7],
      keyNotes[11],
      keyNotes[14],
      keyNotes[7],
      keyNotes[11],
      keyNotes[14],
      keyNotes[12],
      keyNotes[14],
      keyNotes[16],
    ],
  },
];

//ALMACENAR LOS OBJETOS DE LAS MELODIAS EN JSON Y LOCALSTORAGE
const songJson = JSON.stringify(songs);
localStorage.setItem('songs', songJson);

let songNotesArr= [];

//MOSTRAR LAS MELODÍAS EN EL LABEL 
const songsTitle1 = document.getElementById('song-1');
const songsTitle2 = document.getElementById('song-2');
const songsTitle3 = document.getElementById('song-3');
const songsTitle4 = document.getElementById('song-4');
songsTitle1.innerText = songs[0].title;
songsTitle2.innerText = songs[1].title;
songsTitle3.innerText = songs[2].title;
songsTitle4.innerText = songs[3].title;

const songsNotes1 = document.getElementById('song-notes');
const songsNotes2 = document.getElementById('song-notes');
const songsNotes3 = document.getElementById('song-notes');
const songsNotes4 = document.getElementById('song-notes');

//FILTRAR SÓLO EL NOMBRE DE LAS NOTAS DE LAS MELODÍAS PARA MOSTRAR DEBAJO DEL LABEL
const HBNotes = songs[0].notes.map((el) => el.name);
const TTLSNotes = songs[1].notes.map((el) => el.name);
const ITENotesNotes = songs[2].notes.map((el) => el.name);
const QSHTTEVNotes = songs[3].notes.map((el) => el.name);


// **CORREGIR** CUANDO SELECCIONE LAS CANCIONES EN EL LABEL, LAS NOTAS DE CADA CANCIÓN DEBERÍAN MOSTRARSE POR DEBAJO.
// **POR EL MOMENTO SÓLO SE VE EL ÚLTIMO INNERTEXT
songsNotes1.innerText = HBNotes;
songsNotes2.innerText = TTLSNotes;
songsNotes3.innerText = ITENotesNotes;
songsNotes4.innerText = QSHTTEVNotes;
 


//PLAY SOUND FUNCTION
function playSound(filename) {
  let snd = new Audio(`./tunes/${filename}.mp3`);
  snd.play();
};

const fileNames = [
  'C3', 'Db3', 'D3', 'Eb3', 'E3', 'F3', 'Gb3', 'G3', 'Ab3', 'A3', 'Bb3', 'B3',
  'C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4',
  'C5'
];

const noteDivs = document.querySelectorAll('.key');

for(let i = 0; i<fileNames.length; i++) {
  const note = fileNames[i];
  const div = keyDivs[i];

  div.addEventListener('click', function() {
    playSound(note);
  })
}

//VOLUME CONTROL



//SEARCHING SONGS BY TITLE AND/OR DIFFICULTY
//UN BUSCADOR DEL BANCO DE MELODÍAS. TODAVÍA EL USUARIO NO TIENE ACCESO A ESTO. ES SÓLO PARA MOSTRAR EL MÉTODO USADO.

const result = songs.map((el) => el.title);
console.log(result);

const result2 = songs.map((el) => el.difficulty);
console.log(result);

//USER SONGS (A DESARROLLAR. NECESITO DESARROLLAR LA FUNCIONALIDAD DE UN BOTÓN DE GRABAR Y QUE SE 
// ALMACENE LA INFORMACIÓN DE LOS INPUTS QUE EL USUARIO CLICKEA EN UN NUEVO ARRAY)
const newSong = [];

//POR EL MOMENTO LAS NOTAS SE INGRESAN DE FORMA MANUAL DESDE UN PROMPT. CON EL DOM, LAS NOTAS VAN A SER INGRESADAS A TRAVÉS DE UN
//PIANO ONLINE HECHO CON HTML Y CSS CON BOTONES COMO INPUTS.

// while (true) {
//   const noteInput = prompt(
//     'Seleccioná las notas de tu canción. Cuando termines, simplemente escribe "Salir".\n' +
//       keyNames.join("\n")
//   );

//   if (noteInput === "Salir") {
//     break;
//   } else if (!keyNames.includes(noteInput)) {
//     alert(
//       'Error: La nota ingresada no coincide con ninguna de las opciones mencionadas. Procura ingresarlas en mayúsculas y si ya terminaste, escribe "Salir" (La "S" es mayúscula). Por favor, intenta nuevamente.'
//     );
//   } else {
//     newSong.push(noteInput);
//   }
// }

// const newUserSong = prompt("Dale un nombre a tu nueva canción!");
// alert(
//   `Tu nueva canción se llama ${newUserSong} y las notas de tu canción son ${newSong}`
// );

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

for (let i = 0; i < keyNotes.length; i++) {
  keyDivs[i].dataset.keyObject = JSON.stringify(keyNotes[i]);
}


// ARRAY OF ONLY KEY NAMES
const keyNames = keyNotes.map((note) => note.name);

// MELODIES
let songsList = JSON.parse(localStorage.getItem('songsList')) || [];

if(songsList.length === 0) {
  fetch('./songs.json')
    .then(f => f.json()
      .then(data => {
        if(data.length > 0) {
          songsList = data;
          localStorage.setItem('songsList', JSON.stringify(songsList));
      }
    })
      .catch(error => {
        console.log(error);
      })
    )
      .catch(err => {
        console.log(err);
    });
};
console.log(songsList);
//ALMACENAR LOS OBJETOS DE LAS MELODIAS EN JSON Y LOCALSTORAGE
// const songJson = JSON.stringify(songs);
// localStorage.setItem('songs', songJson);

// let songNotesArr= [];

//MOSTRAR LAS MELODÍAS EN EL LABEL 

const songsTitle1 = document.getElementById('song-1');
const songsTitle2 = document.getElementById('song-2');
const songsTitle3 = document.getElementById('song-3');
const songsTitle4 = document.getElementById('song-4');
// const songsTitle5 = document.getElementById('song-5');

songsTitle1.innerText = songsList[0].title;
songsTitle2.innerText = songsList[1].title;
songsTitle3.innerText = songsList[2].title;
songsTitle4.innerText = songsList[3].title;
// songsTitle5.innerText = songsList[4].title;


const selectElement = document.getElementById('default');
const songNotesDiv = document.getElementById('song-notes');

selectElement.addEventListener('change', function() {
  
  const selectedIndex = selectElement.selectedIndex -1;
  const selectedSongNotes = songsList[selectedIndex].notes;
  songNotesDiv.innerText = selectedSongNotes.join(' ');
});


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


//  USER SONGS
//  FUNCIÓN DE BOTÓN DE GRABAR: SE ALMACENA LA INFORMACIÓN DE LOS INPUTS QUE EL USUARIO CLICKEA EN UN NUEVO ARRAY.


let newSong = [];
let recording = false;

const keys = document.querySelectorAll('.key');

keys.forEach(key => {
  key.addEventListener('click', () => {
    const note = key.getAttribute('id');
    if (recording) {
      if (newSong.length < 20) {
        newSong.push(note);
      }
    }
  });
});

const record = document.querySelectorAll('.record');
record.forEach(btn => {
  btn.addEventListener('click', () => {
    const event = btn.value;
    if(event === 'start') {
      recording = true;
      console.log('toastify');
    };
    if (event === "finish") {

      Swal.fire({
        title: 'Nueva canción',
        html: `<input type="text" id="name" class="swal2-input" placeholder="Name">

    `,
        confirmButtonText: 'Crear',
        focusConfirm: false,
        preConfirm: () => {
          const name = Swal.getPopup().querySelector('#name').value
          if (!name) {
            Swal.showValidationMessage(`Complete todos los campos`)
          }
          return { title: name, difficulty: 'custom', notes: newSong}
        }
      }).then((result) => {
        addSong(result.value);
        Swal.fire("Canción creada correctamente")
        newSong = [];

      });

    console.log('RECORDING STOPPED');
      recording = false;
    }
  })
});


const addSong = (song) => {
  songsList.push(song);
  localStorage.setItem('songsList', JSON.stringify(songsList));

}



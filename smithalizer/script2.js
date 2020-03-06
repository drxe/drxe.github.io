var notes = {
  A: 1,
  B: 3,
  C: 4,
  D: 6,
  E: 8,
  F: 9,
  G: 11,
  b: -1,
  "#": 1,
  x: 2
};
var alphabet = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7
};
var inversions3 = {
  0: "",
  1: "⁶",
  2: "⁶₄",
  3: ""
};
var inversions7 = {
  0: "⁷",
  1: "⁶₅",
  2: "⁴₃",
  3: "⁴₂"
};
var checker = {
  "12a1": "Diminished Second",
  "1a0": "Augmented First",
  "1a1": "Minor Second",
  "2a1": "Major Second",
  "2a2": "Diminished Third",
  "3a1": "Augmented Second",
  "3a2": "Minor Third",
  "4a2": "Major Third",
  "4a3": "Diminished Fourth",
  "5a2": "Augmented Third",
  "5a3": "Perfect Fourth",
  "6a3": "Augmented Fourth",
  "6a4": "Diminished Fifth",
  "7a4": "Perfect Fifth",
  "7a5": "Diminished Sixth",
  "8a4": "Augmented Fifth",
  "8a5": "Minor Sixth",
  "9a5": "Major Sixth",
  "9a6": "Diminished Seventh",
  "10a5": "Augmented Sixth",
  "10a6": "Minor Seventh",
  "11a6": "Major Seventh",
  "11a7": "Diminished Eighth",
  "12a6": "Augmented Seventh",
  "12a7": "Perfect Eighth",
  "1a7": "Augmented Eighth",
  "34": "Minor Triad",
  "43": "Major Triad",
  "33": "Diminished Triad",
  "44": "Augmented Triad",
  "3411": "Minor Major Seventh",
  "3410": "Minor Seventh",
  "4311": "Major Seventh",
  "4310": "Dominant Seventh",
  "4411": "Augmented Major Seventh",
  "4410": "Augmented Seventh",
  "3310": "Half-Diminished Seventh",
  "339": "Diminished Seventh"
};
var notation = {
  "12a1": "d2",
  "1a0": "A1",
  "2a1": "M2",
  "3a1": "A2",
  "4a2": "M3",
  "5a2": "A3",
  "6a3": "A4",
  "7a4": "P5",
  "8a4": "A5",
  "9a5": "M6",
  "10a5": "A6",
  "11a6": "M7",
  "12a6": "A7",
  "1a1": "m2",
  "2a2": "d3",
  "3a2": "m3",
  "4a3": "d4",
  "5a3": "P4",
  "6a4": "d5",
  "7a5": "d6",
  "8a5": "m6",
  "9a6": "d7",
  "10a6": "m7",
  "11a7": "d8",
  "12a7": "P8",
  "1a7": "A8",
  "34": "m",
  "43": "",
  "33": "°",
  "44": "⁺",
  "3411": "mᴹ",
  "3410": "m",
  "4311": "ᴹ",
  "4310": "",
  "4411": "⁺ᴹ",
  "4410": "⁺",
  "3310": "ø",
  "339": "°"
};
var bplacement = {
  A: 58,
  B: 51.5,
  C: 45,
  D: 38,
  E: 31,
  F: 71,
  G: 64.5 //46.5 = octave
};
var tplacement = {
  A: 44.5,
  B: 38,
  C: 32,
  D: 25,
  E: 18,
  F: 58,
  G: 51 //46.5 = octave
};
var drawlist = {
  F: 1,
  G: 2,
  A: 3,
  B: 4,
  C: 5,
  D: 6,
  E: 7
};
var miscinfo = {
  sharps:
    "Order of Sharps: F C G D A E B<br/>Sharp Major Scales: G D A  E  B  F# C#<br/>Sharp Minor Scales: E B F# C# G# D# A#",
  flats:
    "Order of Flats: B E A D G C F<br/>Flat Major Scales: F Bb Eb Ab Db Gb Cb<br/>Flat Minor Scales: D G  C  F  Bb Eb Ab",
  "major chords": "I ii iii IV V vi vii°",
  "nat minor chords": "i ii° III iv v VI VII",
  "harm minor chords": "i ii° III⁺ iv V VI vii°",
  "mel minor chords": "i ii III IV V vi vii°"
};
var constructKey1 = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7
};
var constructKey2 = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "E",
  6: "F",
  7: "G"
};
var qualP = {
  P: 0,
  A: 1,
  d: -1
};
var qualE = {
  M: 0,
  m: -1,
  A: 1,
  d: -2
};
var quanT = {
  1: 0,
  2: 2,
  3: 4,
  4: 5,
  5: 7,
  6: 9,
  7: 11,
  8: 12
};
var qualityDeterminer = {
  "": [4, 3, 3],
  M: [4, 3, 4],
  m: [3, 4, 3],
  mM: [3, 4, 4],
  o: [3, 3, 3],
  "/o": [3, 3, 4],
  "+": [4, 4, 2],
  "+M": [4, 4, 3]
};
var determineInvert = {
  "7": 0,
  "": 0,
  "6": 1,
  "6/4": 2,
  "6/5": 1,
  "4/3": 2,
  "4/2": 3
};
var iNotation = {
  "7": "Root",
  "": "Root",
  "6": "First",
  "6/4": "Second",
  "6/5": "First",
  "4/3": "Second",
  "4/2": "Third"
};
var cochmo = false;
var inverted = 0;
var seventh = false;
var thirdi = false;
var textoutput = document.getElementById("infoout");
var imgoutput = document.getElementById("piccie");
var imgctx = imgoutput.getContext("2d");
var bclef = new Image();
bclef.onload = function() {
  imgctx.drawImage(bclef, 0, 0, 200, 140, 0, 0, 180, 120);
};
bclef.src =
  "https://cdn.glitch.com/764e77c4-4477-4f7f-a6af-4af3e3688a10%2FLandscape%20Manuscript%20Paper%20kids%20super%20big%20bass%20clef.jpg";
var tclef = new Image();
tclef.onload = function() {
  imgctx.drawImage(tclef, 0, 0, 200, 140, 0, 100, 180, 120);
};
tclef.src =
  "https://cdn.glitch.com/764e77c4-4477-4f7f-a6af-4af3e3688a10%2FLandscape%20Manuscript%20Paper%20kids%20super%20big%20treble%20clef.jpg";
var drawnote = new Image();
drawnote.src =
  "https://cdn.glitch.com/764e77c4-4477-4f7f-a6af-4af3e3688a10%2F98932-200.png?v=1570715333627";
var sharp = new Image();
sharp.src =
  "https://cdn.glitch.com/764e77c4-4477-4f7f-a6af-4af3e3688a10%2F764e77c4-4477-4f7f-a6af-4af3e3688a10_music_sharp_sign%20(3).png?v=1571316227485";
var flat = new Image();
flat.src =
  "https://cdn.glitch.com/764e77c4-4477-4f7f-a6af-4af3e3688a10%2F764e77c4-4477-4f7f-a6af-4af3e3688a10_music_flat_sign%20(4).png?v=1571315999744";
var dsharp = new Image();
dsharp.src =
  "https://cdn.glitch.com/764e77c4-4477-4f7f-a6af-4af3e3688a10%2F764e77c4-4477-4f7f-a6af-4af3e3688a10_Double_sharp_sign.svg%20(2)%20(1).png?v=1571316318892";
var whichKind = {
  "#": sharp,
  b: flat,
  x: dsharp
};
var forDrawin;
var constructionSeventh;
function main(data) {
  //'data' comes from HTML input
  imgctx.clearRect(0, 0, 1200, 1000);
  imgctx.drawImage(tclef, 0, 0, 200, 140, 0, 100, 180, 120);
  imgctx.drawImage(bclef, 0, 0, 200, 140, 0, 0, 180, 120);
  if (data in miscinfo) {
    //checks for misc. info
    textoutput.innerHTML = miscinfo[data]; //output to HTML
  } else {
    let invertCheck = data.split(" "); //splits big string into list
    let iLen = invertCheck.length - 1; //gets last string in list
    inverted = 0; //declaration
    forDrawin = invertCheck;
    if (
      //if last string is a number,
      invertCheck[iLen] == "1" || //continues the interval process
      invertCheck[iLen] == "2" || //by shifting strings to be in
      invertCheck[iLen] == "3" //root position, saves invert info
    ) {
      let a = parseInt(invertCheck.pop()); //gets inversion number, removes from list
      inverted = a; //stores number
      let forDrawinA = data.split(" ");
      forDrawinA.pop();
      forDrawin = forDrawinA;
      if (inverted > 3) {
        //removes unnecessary inversions
        inverted = inverted - 3;
      }
      while (a != 0) {
        //if there is an inversion
        let b = invertCheck.pop(); //take last note
        invertCheck.splice(0, 0, b); //shift to front of list
        a += -1; //inversion complete
      }
    } //!!!!!end inversion portion!!!!!
    let sep = invertCheck; //root position list of notes
    let x = 0; //declaration
    let y = 1; //
    let z = sep.length - 1; //
    let intervalList = ""; //end declaration
    while (z != 0) {
      if (z == 3) {
        //if seventh, turn to triad
        z = 2; //seventh runs separately, below
      }
      let interval = doInterval(sep[x], sep[y]); //gets interval of two notes in int form
      intervalList = intervalList + String(interval); //adds to list of intervals
      z = z - 1;
      x = x + 1; //next two notes
      y = y + 1;
    } //!!!!!end interval portion!!!!!
    seventh = false; //declaration
    thirdi = false; //end declaration
    if (sep.length == 4) {
      //runs if seventh
      seventh = true; //used later in notation
      let sev = doSeventh(sep[0], sep[3]); //calculates interval of first and last notes
      intervalList = intervalList + String(sev); //adds to list
    }
    if (sep.length > 2) {
      //runs if third or seventh
      thirdi = true; //used later in notation
      let notat = notator(sep, intervalList); //notates using notes and interval list
      textoutput.innerHTML = outputtextC(checker[intervalList], notat); //output using HTML
      drawThings(forDrawin);
    } else if (sep.length == 2) {
      //runs if one interval
      let intNotation = intnot(sep, intervalList); //notates differently using notes and interval list
      textoutput.innerHTML = outputtextI(intNotation[1], intNotation[0]); //output using HTML
      drawThings(forDrawin);
    }
  }
}
function drawThings(allNotesMaster) {
  let pq = allNotesMaster.length;
  let pp = 0;
  let goUpOne = 0;
  while (pq > 0) {
    let toip = allNotesMaster[pp][0];
    let px = 0;
    let tnip;
    let fort = 0;
    let dlip = drawlist[toip];
    if (
      (allNotesMaster[allNotesMaster.length - 1][0] == "D" ||
        allNotesMaster[allNotesMaster.length - 1][0] == "C") &&
      allNotesMaster.length == 4 &&
      inverted == 0
    ) {
      fort = 46.5;
    }
    if (
      (allNotesMaster[allNotesMaster.length - 1][0] == "D" ||
        allNotesMaster[allNotesMaster.length - 1][0] == "C") &&
      allNotesMaster.length == 2 &&
      drawlist[allNotesMaster[0][0]] - drawlist[allNotesMaster[1][0]] == 1
    ) {
      fort = 46.5;
    }
    if (
      allNotesMaster.length == 2 &&
      pq == 1 &&
      drawlist[allNotesMaster[0][0]] - drawlist[allNotesMaster[1][0]] == 0
    ) {
      px = px - 46.5;
    }
    if (pq != allNotesMaster.length) {
      tnip = drawlist[allNotesMaster[pp - 1][0]];
    } else {
      tnip = dlip;
    }
    if (dlip < tnip || goUpOne > 0) {
      px = px - 46.5;
      goUpOne++;
    }
    let coolFunShift = 0;
    if (dlip - tnip == 1 || dlip - tnip == -6) {
      coolFunShift = 15;
    }
    if (bplacement[toip] + px < 4 || bplacement[toip] + px > 72) {
      let xtra = 0;
      if (drawlist[toip] == 6) {
        xtra = 7;
      }
      imgctx.beginPath();
      imgctx.moveTo(
        95 + coolFunShift + 30 - 15,
        bplacement[toip] + px + 30 + xtra
      );
      imgctx.lineTo(
        95 + coolFunShift + 30 + 15,
        bplacement[toip] + px + 30 + xtra
      );
      imgctx.lineWidth = 1.5;
      imgctx.stroke();
    }
    if (tplacement[toip] + px < 4) {
      if (fort == 0) {
        let xtra = 0;
        if (drawlist[toip] == 6 || drawlist[toip] == 4) {
          xtra = 7;
        }
        imgctx.beginPath();
        imgctx.moveTo(
          95 + coolFunShift + 30 - 15,
          100 + tplacement[toip] + px + 30 + xtra
        );
        imgctx.lineTo(
          95 + coolFunShift + 30 + 15,
          100 + tplacement[toip] + px + 30 + xtra
        );
        imgctx.lineWidth = 1.5;
        imgctx.stroke();
      }
    }
    imgctx.drawImage(
      drawnote,
      95 + coolFunShift,
      bplacement[toip] + px,
      60,
      60
    );
    imgctx.drawImage(
      drawnote,
      95 + coolFunShift,
      100 + tplacement[toip] + px + fort,
      60,
      60
    );
    let goodNotes = allNotesMaster[pp].split("");
    pp = pp + 1;
    pq = pq - 1;
    if (goodNotes.length >= 1) {
      let shift = 0;
      let addition;
      for (var goodNote in goodNotes) {
        if (goodNotes[goodNote] in whichKind) {
          addition = whichKind[goodNotes[goodNote]];
          imgctx.drawImage(
            addition,
            70 + shift + coolFunShift,
            bplacement[toip] + px + 14.5,
            30,
            30
          );
          imgctx.drawImage(
            addition,
            70 + shift + coolFunShift,
            100 + tplacement[toip] + px + 14.5 + fort,
            30,
            30
          );
          shift += 10;
        }
      }
    }
  }
}
function doInterval(n1, n2) {
  //calculates interval in int form
  let n1a = advancedNoting(n1); //gets numerical value of note name
  let n2a = advancedNoting(n2); //ditto
  let noteTwo; //makes second note above first if it is not already
  if (n2a <= n1a) {
    noteTwo = 12 + n2a;
  } else {
    noteTwo = n2a;
  }
  let interval = noteTwo - n1a; //returns numerical value of interval between notes
  return interval;
}
function doSeventh(n1, n2) {
  //calculates seventh interval in int form
  let n12 = advancedNoting(n1); //gets numerical value of note name
  let n22 = advancedNoting(n2); //ditto
  let noteTwo; //ensures interval is a positive number
  if (n22 - n12 < 0) {
    noteTwo = 12 + n22;
  } else {
    noteTwo = n22;
  }
  let interval = noteTwo - n12; //returns numerical value of interval between notes
  return interval;
}
function vibecheck(n1, n2, placed) {
  if (alphabet[n1] > alphabet[n2]) {
    placed = placed + 46.5;
  }
  return placed;
}
function advancedNoting(noise) {
  //gets numerical value of note
  let newNote = noise.split(""); //splits note and accidental into list
  let noteval = 0; //declaration
  for (var char in newNote) {
    //loop for each character
    let tempval = notes[newNote[char]]; //gets value of each character using 'notes' dict
    noteval = noteval + tempval; //adds to total
  }
  return parseInt(noteval); //returns note value in int form
}
function notator(fullChord, name) {
  //returns notation as list
  let root = fullChord[0]; //first note of list of all notes
  let after = notation[name]; //gets notation using intervals
  let last = ""; //declaration
  if (seventh) {
    //runs if seventh
    last = inversions7[inverted]; //applies inversion symbol based on inversion check
  } else if (thirdi) {
    //runs if not seventh but third
    last = inversions3[inverted]; //applies inversion symbol based on inversion check
  }
  return String(root) + after + last; //returns notation as string
}
function intnot(words, number) {
  //returns notation for single interval as string
  let lett1 = alphabet[words[0].split("")[0]]; //gets number for letter name of note 1
  let lett2 = alphabet[words[1].split("")[0]]; //gets number for letter name of note 2
  if (lett2 <= lett1) {
    //ensures note two is on top
    lett2 = lett2 + 7;
  }
  let subtract = lett2 - lett1; //gets interval of letter values
  number = number + "a" + String(subtract); //creates a string consisting of letter value interval and earlier real interval
  return [checker[number], notation[number]]; //returns worded notation and symbol notation as list
}
function outputtextC(i, i2) {
  return "Chord: " + i + "<br/>Notation: " + i2; //output text for HTML
}
function outputtextI(i, i2) {
  return "Interval: " + i + "<br/>Notation: " + i2; //output text for HTML
}
function intervalConstruction(nontes) {
  let masterList = nontes.split(" ");
  let ival = masterList[0].split("");
  let nonte = masterList[1];
  let qual = ival[0]; //letter
  let quan = ival[1]; //num
  let qualProc;
  if (quan == 1 || quan == 4 || quan == 5 || quan == 8) {
    qualProc = qualP[qual];
  } else {
    qualProc = qualE[qual];
  }
  let newNoteV = quan - 1;
  let newNoteN = nonte.split("")[0];
  let rootThing = constructKey1[newNoteN];
  rootThing = rootThing + newNoteV;
  if (rootThing > 7) {
    rootThing = rootThing - 7;
  }
  let newNote2 = constructKey2[rootThing];
  let wholeInterval = [];
  wholeInterval.push(nonte);
  let toAdd = newNote2;
  let ppx = 0;
  while (quanT[quan] + qualProc !== doInterval(nonte, toAdd) && ppx < 10) {
    if (quanT[quan] + qualProc < doInterval(nonte, toAdd)) {
      if (quanT[quan] + qualProc < doInterval(nonte, toAdd) - 1) {
        toAdd = toAdd + "bb";
      } else {
        toAdd = toAdd + "b";
      }
    } else if (quanT[quan] + qualProc > doInterval(nonte, toAdd)) {
      if (quanT[quan] + qualProc > doInterval(nonte, toAdd) + 1) {
        toAdd = toAdd + "x";
      } else {
        toAdd = toAdd + "#";
      }
    }
  ppx ++;
  }
  wholeInterval.push(toAdd);
  drawThings(wholeInterval);
  textoutput.innerHTML = "Notes: " + wholeInterval.join(" ");
}
function invertConstruction(dachord, deinversion) {
  let chord = dachord;
  let icx = determineInvert[deinversion];
  inverted = icx;
  textoutput.innerHTML = chord;
  while (icx > 0) {
    let icy = chord.shift();
    chord.push(icy);
    icx--;
  }
  return chord;
}
function constructBabey(daNote, daQuality, daInversion) {
  let pureChord = getNoteList(daNote);
  let intervalValues = qualityDeterminer[daQuality];
  textoutput.innerHTML = pureChord;
  let m = pureChord.length - 1;
  let cbx = 0;
  let tooAdd;
  while (m > 0) {
    if (intervalValues[cbx] < doInterval(pureChord[cbx], pureChord[cbx + 1])) {
      if (
        intervalValues[cbx] <
        doInterval(pureChord[cbx], pureChord[cbx + 1]) - 1
      ) {
        tooAdd = pureChord[cbx + 1] + "bb";
      } else {
        tooAdd = pureChord[cbx + 1] + "b";
      }
      pureChord.splice(cbx + 1, 1, tooAdd);
      //textoutput.innerHTML = tooAdd;
    } else if (
      intervalValues[cbx] > doInterval(pureChord[cbx], pureChord[cbx + 1])
    ) {
      if (
        intervalValues[cbx] >
        doInterval(pureChord[cbx], pureChord[cbx + 1]) + 1
      ) {
        tooAdd = pureChord[cbx + 1] + "x";
      } else {
        tooAdd = pureChord[cbx + 1] + "#";
      }
      pureChord.splice(cbx + 1, 1, tooAdd);
      //textoutput.innerHTML = tooAdd;
    }
    else {
      cbx++;
      m += -1;
    }
    textoutput.innerHTML = pureChord;
  }
  let invertedChord = invertConstruction(pureChord, daInversion);
  textoutput.innerHTML = invertedChord;
  return invertedChord;
  //textoutput.innerHTML = invertedChord;
}
function getNoteList(root) {
  let root2 = root.split("")[0];
  let loopit = 2;
  if (constructionSeventh) {
    loopit = 3;
  }
  let wholeNotes = [];
  wholeNotes.push(root);
  let noteOneNum;
  let noteTwoNum;
  let currNote = root2;
  while (loopit > 0) {
    noteOneNum = constructKey1[currNote];
    noteTwoNum = noteOneNum + 2;
    if (noteTwoNum > 7) {
      noteTwoNum = noteTwoNum - 7;
    }
    currNote = constructKey2[noteTwoNum];
    wholeNotes.push(currNote);
    loopit += -1;
  }
  return wholeNotes;
}
function buildMeAScale(theScale) {
  //1 is letter -> num, 2 is num -> letter
}
function newMainBaybee(letsGo) {
  constructionSeventh = false;
  imgctx.clearRect(0, 0, 1200, 1000);
  imgctx.drawImage(tclef, 0, 0, 200, 140, 0, 100, 180, 120);
  imgctx.drawImage(bclef, 0, 0, 200, 140, 0, 0, 180, 120);
  if (cochmo) {
    let scales = letsGo.split(" ");
    let scaleUno = scales[0];
    let scaleDos = scales[1];
    
  }
  else {
  if (
    (letsGo.split("")[0] == "P" ||
    letsGo.split("")[0] == "M" ||
    letsGo.split("")[0] == "m" ||
    letsGo.split("")[0] == "d" ||
    letsGo.split("")[0] == "A") && letsGo.split(" ").length == 2 && parseInt(letsGo.split("")[1]) * 0 == 0
  ) {
    intervalConstruction(letsGo);
  } else if (letsGo.split(" ").length == 1) {
    let letsGo2 = letsGo.split("");
    let pureNote = letsGo2.shift();
    let pureNotation;
    let nmbx = letsGo2.length;
    symboloop: while (nmbx > 0) {
      if (
        letsGo2[0] == "A" ||
        letsGo2[0] == "B" ||
        letsGo2[0] == "C" ||
        letsGo2[0] == "D" ||
        letsGo2[0] == "E" ||
        letsGo2[0] == "F" ||
        letsGo2[0] == "G" ||
        letsGo2[0] == "#" ||
        letsGo2[0] == "x" ||
        letsGo2[0] == "b"
      ) {
        let notePart = letsGo2.shift();
        pureNote = pureNote + notePart;
        nmbx += -1;
      } else {
        pureNotation = letsGo2;
        //textoutput.innerHTML = pureNotation;
        break symboloop;
      }
    }
    let coolNotation = "";
    let coolInversion = "";
    let pnx = pureNotation.length;
    inversioloop: while (pnx > 0) {
      if (
        pureNotation[0] == "4" ||
        pureNotation[0] == "5" ||
        pureNotation[0] == "6" ||
        pureNotation[0] == "7"
      ) {
        textoutput.innerHTML = pnx;
        coolInversion = pureNotation.join("");
        if (
          coolInversion == "6/5" ||
          coolInversion == "4/3" ||
          coolInversion == "4/2" ||
          coolInversion == "7"
        ) {
          constructionSeventh = true;
        }
        break inversioloop;
      } else {
        let shifter = pureNotation.shift();
        coolNotation = coolNotation + shifter;
        textoutput.innerHTML = coolNotation;
      }
      pnx--;
    }
    //textoutput.innerHTML = coolNotation + " " + coolInversion;
    let wholeChord = constructBabey(pureNote, coolNotation, coolInversion);
    drawThings(wholeChord);
    textoutput.innerHTML =
      "Notes: " +
      wholeChord.join(" ") +
      "<br/>Inversion: " +
      iNotation[coolInversion] +
      " Position";
  } else {
    main(letsGo);
  }}
}
function customSubmit() {
  //HTML custom press enter to submit
  document.getElementById("subbut").click(); //clicks '+' button on enter
  return false; //makes form not submit, keeps text
}
function doSpoiler() {
  let text = document.getElementById("stext");
  if (text.innerHTML == "HOW TO INPUT STUFF [CLICK]") {
    text.innerHTML =
      "Notate/Show: Notes in order from low to high (inversion at the end if needed).<br/>Examples: A C E F 1, A C F 1, F A<br/>Construct: Normal chord notation<br/>(m, mM, M, o, /o, +, +M)<br/>Sevenths: C#mM6/5<br/>Triads: C#M6/4<br/>Intervals: A5 D#";
  } else {
    text.innerHTML = "HOW TO INPUT STUFF [CLICK]";
  }
}
var yabutton = document.getElementById("cochbut");
function doCoCh() {
  if (cochmo) {
    cochmo = false;
    yabutton.style.backgroundColor = "";
  }
  else {
    cochmo = true;
    yabutton.style.backgroundColor = "#c9c9c9";
  }
}

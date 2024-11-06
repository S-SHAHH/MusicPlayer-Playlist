import "./App.css";
import { useState } from "react";
// import ReactAudioPlayer from "react-audio-player";
import $ from "jquery";
// import audio from "react";

function App() {
  const [sList, updSong] = useState({
    songName: "Save Ur tears",
    sors: "./src/songs/01.mp3",
    img: "",
  });

  // $(".wndw1").on("load", function () {
  //   $(".wndw1").css({
  //     backgroundColor: "black",
  //     width: "800px",
  //     height: "700px",
  //   });
  // });

  return (
    <div className="App">
      <div className="wndw1">
        <button
          id="closbtn"
          onClick={() => {
            $(".wndw1").hide();
          }}
        >
          X
        </button>
        <div className="sWndw">
          <h3>{sList.songName}</h3>

        </div>
        <div id="aud">
          <audio src={sList.sors} title={sList.songName} type="audio/mp3" autoplay controls />
        </div>
        <div>
          <button
            id="nxtbtn"
            onClick={e => {
              updSong({
                songName: e.target.songName,
                // src: /              )
              });
            }}
          >
            Nxt_S
          </button>
        </div>
        <div id="sList">
          <div id="slitms">
            <img src="" alt="" />
          </div>
          <div id="slitms">
            <img src="" alt="" />
          </div>
          <div id="slitms">
            <img src="" alt="" />
          </div>
          <div id="slitms">
            <img src="" alt="" />
          </div>
          <div id="slitms">
            <img src="" alt="" />
          </div>
          <div id="slitms">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

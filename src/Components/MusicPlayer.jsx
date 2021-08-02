import React, { useRef } from 'react'
import Styled from "styled-components";

let Container = Styled.div`
    width: 100%;
    height: 65%;
    background-image: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wallpapersafari.com%2F33%2F9%2FRVz5Dv.jpg&f=1&nofb=1");
     background-size: cover;
     background-position: center;
     border-radius: 5px;
     position: relative;
     .time {
        border: 3px solid rgb(225,18,93);
        color: white;
        position: absolute;
        padding: 10px 20px;
        border-radius: 20px;
        font-size: 14px;
        bottom: 0%;
        left: 0%;
        background: rgb(28,27,32);
     }
     .play {
         display: flex;
         position: absolute;
         bottom: 15%;
         gap: 20px;
         left: 2%;
     }
       .play-button {
            height: 45px;
            width: 45px;
            background: rgb(197,20,88);
            border-radius: 50%;
            display: grid;
            place-content: center;
            font-size: 25px;
            color: white;

        }
        .player {
            width: 12em;
            height: 30px;
            overflow: hidden;
        }
`
export default function MusicPlayer() {
    let playerRef = useRef();
    return (
        <Container>
            <div className="time">An hour left</div>
            <div className="play">
                <div className="play-button">►</div>
                <audio className="player" useRef={playerRef} src="" autoPlay controls />
            </div>
        </Container>
    )
}

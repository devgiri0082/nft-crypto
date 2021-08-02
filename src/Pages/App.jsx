import React from 'react'
import Styled from "styled-components";
import AudioCard from "../Components/AudioCard";
let Container = Styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    padding: 10px 20px;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
`
export default function App() {
    return (
        <Container>
            <AudioCard />
            <AudioCard />
            <AudioCard />
            <AudioCard />
        </Container>
    )
}

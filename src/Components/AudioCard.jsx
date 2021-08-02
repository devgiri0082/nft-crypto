import React from 'react'
import styled from 'styled-components'
import MusicPlayer from './MusicPlayer'

let Container = styled.div`
    height: 95%;
    width: 30%;
    border-radius: 10px;
    background: #323038;
    padding: 25px;
    .title {
        font-size: 25px;
        margin-top: 20px;
        color: white;
    }
    .company {
        display: flex;
        margin-top: 10px;
        align-items: center;
        gap: 20px;
        
        .logo {
            border-radius: 50%;
            height: 50px;
            width: 50px;
            position: relative;
            &::after {
            content: "✓";
            display: grid ;
            color: white;
            place-content: center;
            background: rgb(65,123,238);
            height: 22px;
            width: 22px;
            border: 3px solid white;
            position: absolute;
            bottom: -10%;
            right: -20%;
            border-radius: 50%;

            
        }
        }
        img {
            height: 100%;
            width: 100%;
            border-radius: 50%;
        }
        .username {
            color: rgb(182,181,185);
        }
    }
    hr {
        margin-top: 20px;
        border: none;
        background: gray;
        height: 1px;
    }
    .info {
        margin-top: 10px;
        .price-title {
            color: rgb(172,171,175);
        }
        .stats {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            color: white;
            .price {
                font-size: 25px;
            }
            .likes {
                color: rgb(164,164,166);
                font-size: 17px;
            }
        }
    }
    @media only screen and (max-width: 40em) {
        width: 100%;
        height: 100%;
     }

`
export default function AudioCard() {
    return (
        <Container>
            <MusicPlayer />
            <div className="title">
                Michael Jackson's Thriller...
            </div>
            <div className="company">
                <div className="logo">
                    <img src="https://www.closinglogos.com/images/a/a0/Aa3e8a05ced33cca14097fad390918c0.png" alt="sony company logo" />
                </div>
                <div className="username">@SonyMusic</div>
            </div>
            <hr />
            <div className="info">
                <div className="price-title">
                    Current Price
                </div>
                <div className="stats">
                    <div className="price">
                        5.67 BNB
                    </div>
                    <div className="likes">&#9825; 89</div>
                </div>
            </div>
        </Container>
    )
}

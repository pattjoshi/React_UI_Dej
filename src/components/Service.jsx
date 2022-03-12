import React, { useState } from "react";
import styled from "styled-components";
import How from '../img/how.png'
import MiniCard from './MiniCard'
import Play from '../img/play.png';

const Container = styled.div`
   display: flex;
`

const Left = styled.div`
  width:50%;
  position: relative;
`

const Image = styled.img`
   display: ${(props) => props.open && "none"};
   height: 83%;
    padding-top: 53px;
    margin-left: -131px;
`

const Video = styled.video`
  display: ${(props) => !props.open && "none"};
  height: 300px;
  position: absolute;
  top: 0;
  bottom: 20px;
  right: 50px;
  margin: auto;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
   padding:50px;
   display:flex;
   flex-direction:column;
`

const Title = styled.h1`
  
`

const Desc = styled.p`
  font-size:20px;
  margin-top:20px;
  color:#555;
`

const CardContainer = styled.div`
   display:flex;
   justify-center:space-between;
   margin-top:50px;
`

const Right = styled.div`
  width:50%;
`
const Button = styled.button`
  width: 180px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  padding: 15px;
  margin-top: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 9px;
`;



const Service = () => {
    // useState 
    const [open, setopen] = useState(false);
    return (
        <>
            <Container>
                <Left>
                    <Image open={open} src={How} />
                    <Video
                        open={open}
                        autoPlay
                        loop
                        controls
                        src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
                    />
                </Left>
                <Right>
                    <Wrapper>
                        <Title>Simple process to start</Title>
                        <Desc>
                            We provide digital experience services to startups and small
                            businesses to looking for a partner of their digital media, design &
                            development, lead generation and communications requirents. We work
                            with you, not for you. Although we have a great resources
                        </Desc>
                        <CardContainer>
                            <MiniCard />
                            <MiniCard />
                            <MiniCard />

                        </CardContainer>

                        <Button onClick={() => setopen(true)}>
                            <Icon src={Play} /> How it's Works </Button>
                    </Wrapper>
                </Right>

            </Container>
        </>
    )
}

export default Service

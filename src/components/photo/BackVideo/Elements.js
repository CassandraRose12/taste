import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
color: tan;
font-size: 58px;
text-align: center;
margin-top: 200px;
text-shadow: 0px 0px 2px black;

@media screen and (max-width: 768px) {
font-size 30px;
}`;
export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 34px;
  text-align: center;
  max-width: 600px;
  text-shadow: 0px 0px 2px black;
`;

export const FirstImage = styled.div`
  background: white;
  display: flex;
  justify-content: left;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const ImgBg = styled.div`
 position: absolute;
 top: 1;
 right: 0;
 bottom 0;
 left 0;
 padding-left: 50px;
 width: 50%;
 height: 90%;
 overflow: hidden;
 margin-bottom: 20px;
 justify-content: left;
 `;

export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const ImgContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: relative;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const ImgH1 = styled.h1`
position: relative;
  color: tan;
  font-size: 58px;
  text-align: center;
  margin-top: 290px;
    left: 160px;
    display: flex;
    justify-content: left;
  text-shadow: 0px 0px 2px black;

`;

export const ImgP1 = styled.p`
  position: relative;
    left: 160px;
  margin-top: 24px;
  color: #fff;
  font-size: 34px;
  text-align: center;
  max-width: 600px;
  text-shadow: 0px 0px 2px black;
`;

export const SecondImage = styled.div`
  background: white;
  display: flex;
  justify-content: right;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const Img2Bg = styled.div`
 position: absolute;
 top: 0;
 right: 0;
 bottom 0;
 left 0;
 padding-left: 50px;
 width: 50%;
 height: 90%;
 overflow: hidden;
 margin-bottom: 20px;
 justify-content: right;
 `;

export const Image2Bg = styled.img`
  width: 50%;
  height: 80%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  margin-top: 70px;
`;

export const Img2Content = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: relative;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const Img2H1 = styled.h1`
position: relative;
  color: tan;
  font-size: 58px;
  text-align: center;
  margin-top: 290px;
    left: 160px;
    display: flex;
    justify-content: right;
  text-shadow: 0px 0px 2px black;

`;

export const Img2P1 = styled.p`
  position: relative;
    left: 160px;
  margin-top: 24px;
  color: #fff;
  font-size: 34px;
  text-align: center;
  max-width: 600px;
  text-shadow: 0px 0px 2px black;
`;

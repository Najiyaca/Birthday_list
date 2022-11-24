import React, { useState } from 'react'
import styled from 'styled-components'


import Img1 from "../../assets/images/Ellipse -1.png"
import img2 from "../../assets/images/Ellipse -2.png"
import img3 from "../../assets/images/Ellipse -3.png"
import img4 from "../../assets/images/Ellipse -4.png"
import img5 from "../../assets/images/Ellipse 1.png"

export default function Birthdaylist() {

  const [day,setDay] = useState([
    
   { Image:img4, 
    name:"Griffin Wooldridge",
      age:"20 years",
  },

    { name:"Haster Hogen",
    age:"23 years",
    Image:img3,
    },

  { name:"Danny Winget",
  age:"25 years",
  Image:img2,
  },

  { name:"Joshua vergara",
  age:"23 years",
  Image:Img1,
  },

  { name:"Jon Rettinger",
  age:"20 years",
  Image:img5,
  },

  ])
const renderdays = () =>{
 return day.map((days)=>(

  <>
    <Item>
        <Image src={days.Image} /> 
        <Contentbox>
            <Subheading>{days.name}</Subheading>
            <Age>{days.age}</Age>
        </Contentbox>
      </Item>
      </>
  ))
}

const  clearall = ()=>{
  setDay([])
  
}
  return (
    <Container>
      <Heading>5 birthdays today</Heading>
      <Items>
     { renderdays()}
      </Items>
      <Btn onClick={()=> clearall()}>Clear All</Btn>
    </Container>
  )
}

const Container = styled.div`
text-align:center;`;

const Heading = styled.h1`
font-size:29px;
margin-bottom: 20px;`;

const Items = styled.div`
width: 50%;
margin: 0 auto;`;

const Item = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top:20px;`;

const Image =styled.img`
  border-radius:50%;
  width:90px;`;

const Subheading = styled.h3`
  margin-left: 20px;`;

const Contentbox = styled.div`
  text-align:center;`;

const Age = styled.p`
  color:grey;
  margin-right: 46px;
  margin-bottom:20px;`;

const Btn = styled.button`
  border: 1px solid #d43d94;
  background-color:#d43d94;
  padding:8px 120px;
  border-radius:5px;
  color:white;
  cursor: pointer;`;

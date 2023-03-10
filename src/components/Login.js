//  import styled from "styled-components";
// const Login = (props) => {
//     return(
//     <Container>
//         <Content>Content</Content>
//     </Container>
//     );
//     const Container = styled.section`
//     overflow:hidden;
//     display:flex;
// `;
//     const Content = styled.div``;
    
// };
// export default Login;
import styled from "styled-components";

import React from 'react'
 
const Login = (props) => {
  return (
    
    <Container>
             <Content>
              <CTA>
                <CTALogoOne src="/images/cta-logo-one .svg" alt="Logo" />
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                  Get Premier access to Raya and the Last Dragon for an 
                  additional fee with a Disney + Subscription.As of 
                  03/06/22, the price od Disney+ and the Disney Bundle
                   will increase by $1.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
              </CTA>
              <BgImage/>
             </Content>
     </Container>
);
     
     
    
 };
 const Container = styled.section`
 overflow: hidden;
 display: flex;
 flex-direction: coloumn;
 text-align: center;
 height: 100vh;
`;
const Content = styled.div`
margin-bottom: 10vw;
width: 100%;
position: relative;box-sizing: border-box;
displey: flex;
justify-content: center;
align-items: center;
flex-direction: coloumn;
padding: 80px 40px;
height: 100%;
`;

const BgImage = styled.div`
height: 100%;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
background-image: url("/images/login-background.jpg");
position: absolute;
top: 0;
right: 0;
left: 0;
z-index: -1;
`;
const CTA = styled.div`
margin-bottom: 2vw;
max-width: 650px;
flex-wrap: wrap;
display: flex;
flex-direction: coloumn;
justify-content: center;
margin-top: 0;
align-items: center;
text-align: center;
margin-right: auto;
margin-left: auto;


`;

const CTALogoOne = styled.img`
margin-bottom: 12px;
max-width: 600px;
min-height: 1px;
display: block;
width: 100%;
//  margin-left:22vw;
margin-top: 8vw;


`;

const SignUp = styled.a`
font-weight: bold;
color: #f9f9f9;
background-color: #0063e5;

margin-bottom: 12px;
width: 100%;
letter-spacing: 1.5px;
font-size: 18px;
padding: 16.5px 0;
border: 1px solid transparent;
border-radious: 4px;
&:hover {
  
}
background-color: blue;
`;

const Description  = styled.p`
color: hsla(0, 0%, 95.3%, 1);
  font-size: 15px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;

`;
const CTALogoTwo = styled.img`
max-width: 600px;
margin-bottom:20px;
display: inline-block;
vertical-align: bottom;
width: 100%;


`;




export default Login;

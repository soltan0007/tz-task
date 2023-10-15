import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #000000;
  margin-top: 50px;
  color: white;
`;

const AddressBlock = styled.div`
  flex: 1;
  padding: 10px;
  margin-left: 60px;
`;

const SocialMediaLinks = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 80px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Address = styled.p`
  font-size: 1rem;
  margin: 5px 0;
`;

const SocialLink = styled.a`
  font-size: 1rem;
  margin: 5px 0;
  text-decoration: none;
  color: #0077B5; /* LinkedIn blue, replace with your desired color */
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialNetwork = () => {
    return (
        <Container>
            <AddressBlock>
                <Title>team@vnv.solutions</Title>
                <Address>Karla Miklʹosha, 7</Address>
                <Address>Lviv, Ukraine</Address>
            </AddressBlock>
            <SocialMediaLinks>
                <Title>Social Media</Title>
                <SocialLink href="https://www.facebook.com/your-company" target="_blank">
                    Facebook
                </SocialLink>
                <SocialLink href="https://www.instagram.com/your-company" target="_blank">
                    Instagram
                </SocialLink>
                <SocialLink href="https://www.twitter.com/your-company" target="_blank">
                    Twitter
                </SocialLink>
                {/* Add more social media links here */}
            </SocialMediaLinks>
        </Container>
    );
};

export default SocialNetwork;

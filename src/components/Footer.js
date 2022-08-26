import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import telegram from '../assets/img/Telegram_logo.svg';
import discord from '../assets/img/discord.svg';
import twitter from '../assets/img/twitter.png';
import youtube from '../assets/img/youtube.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://t.me/thephoenixguild"><img src={telegram} alt="link to join our telegram group" /></a>
              <a href="https://discord.gg/jgpnT8f2"><img src={discord} alt="link to join our discord server" /></a>
              <a href="https://twitter.com/PhoenixGuildHQ"><img src={twitter} alt="link to join our twitter page" /></a>
              <a href="https://www.youtube.com/channel/UC8-2HndxrRrDjnGNbCAdJBg/"><img src={youtube} alt="link to join our youtube channel" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

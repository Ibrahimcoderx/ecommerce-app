import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import Link from 'next/link';

// input group 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


import style from '../Footer/Footer.module.css'
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook} from "react-icons/bs";

const Footer = () => {
  return (

    <div>

     <section className={style.FoterSec}>

        <Container>

            <div className={style.Foter}>


                <div className={style.FoterItem}>

                    <img src="/images/home/logo.png" alt="" />

                    <h2>NEWS LETTER</h2>

                    <p>Subscribe to our news letter to get lettest update</p>

                    <InputGroup className="mb-3">
                        <Form.Control
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        />
                        <Button id="button-addon2" variant="danger">
                        Subscribe
                        </Button>
                    </InputGroup>

                    <p>Follow Us on</p>

                    <AiFillInstagram className={style.Foterfas}/> <BsFacebook className={style.Foterfas2}/>


                </div>

                <div className={style.FoterItem}>

                    <h2>DOWNLOAD OUR APP</h2>
                    <img src="/images/home/img4.png" alt="" />

                </div>

                <div className={style.FoterItem}>

                <h2>MY ACCOUNT</h2>

                <ul>
                    <li>
                        <Link href="">Profile</Link>
                    </li>
                    <li>
                        <Link href="">My Address</Link>
                    </li>
                    <li>
                        <Link href="">Live Chat</Link>
                    </li>
                    <li>
                        <Link href="">My Order</Link>
                    </li>
                
                </ul>


                </div>

                <div className={style.FoterItem}>

                <h2>QUICK LINK</h2>

                <ul>
                    <li>
                        <Link href="">Contact Us</Link>
                    </li>
                    <li>
                        <Link href="">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link href="">Terms and Condition</Link>
                    </li>
                    <li>
                        <Link href="">About Us</Link>
                    </li>
                    <li>
                        <Link href="">FAQ</Link>
                    </li>
                
                </ul>

                </div>

            </div>

        </Container>

     </section>

    </div>
  )
}

export default Footer
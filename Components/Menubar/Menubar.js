
import { Container,Row,Col } from 'react-bootstrap'
import Link from 'next/link'
import styles from '../Menubar/Menubar.module.css'

// icon

import { IoSearchOutline,IoCartSharp} from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
import {GoThreeBars } from "react-icons/go";

// offcanvas

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


const Menubar = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (

    <div className={styles.ManubarMain}>

        <section>

            <Container fluid className={styles.ConPad}>

                <Container>

                <Row>

                    <Col>

                        <div className={styles.LinkDivMain}>

                            <Link href=""> <img src="/images/home/logo.png" alt="" /> </Link>

                            <Link href=""> Home </Link>

                            <div className={styles.LinkDivDropdodnMain}>

                                <Link href="">Categories</Link>

                                        <div className={styles.LinkDivDropdodn}>

                                            <ul>
                                                <li>
                                                    <Link href="">কমল পানি</Link> 
                                                    <MdKeyboardArrowRight></MdKeyboardArrowRight>
                                                </li>

                                                <li>
                                                    <Link href="">নাস্তা</Link> 
                                                    <MdKeyboardArrowRight></MdKeyboardArrowRight>
                                                </li>

                                                <li>
                                                    <Link href="">মুদি</Link> 
                                                    <MdKeyboardArrowRight></MdKeyboardArrowRight>
                                                </li>

                                                <li>
                                                    <Link href="">শাড়ি</Link> 
                                                    <MdKeyboardArrowRight></MdKeyboardArrowRight>
                                                </li>

                                                <li>
                                                    <Link href="">কমল পানি</Link> 
                                                    <MdKeyboardArrowRight></MdKeyboardArrowRight>
                                                </li>

                                                <li>
                                                    <Link href="">কমল পানি</Link> 
                                                    <MdKeyboardArrowRight></MdKeyboardArrowRight>
                                                </li>
                                                                                            
                                            
                                            </ul>

                                        </div>
                            </div>

                            <Link href=""> Favorite </Link>


                            <div className={styles.InputTxtDiv}>

                                <input className={styles.InputTxt} type="text" />
                                <Link href=""><IoSearchOutline></IoSearchOutline></Link>
                                
                            </div>

                            <Link href=""> <IoCartSharp className={styles.InputCart}></IoCartSharp> </Link>

                            <Link href=""> <CiLock className={styles.Inputlock}></CiLock> Login </Link>


                        </div>

                    
                    {/* Mobile menu */}

                        <div className={styles.MobileMenu}>

                            <div className={styles.MenubarDiv}>

                                <div className={styles.logoDiv}>
                                    <img src="/images/home/logo.png" alt="img" /> 
                                </div>

                                <div className={styles.MobileTabs}>

                                    <Button className={styles.MeniBarIcon} onClick={handleShow}>
                                         <GoThreeBars/>
                                    </Button>

                                    <Offcanvas show={show} onHide={handleClose}>

                                    <Offcanvas.Header closeButton className={styles.offcanvasheader}></Offcanvas.Header>

                                        <Offcanvas.Body className={styles.CanVasMobBg}>

                                            <div className={styles.middleMenuDiv}>

                                                <Link className={styles.Link2} href='#'>Home</Link>

                                                <Link className={styles.Link3} href='#'>Shop</Link>

                                                <Link href="">শাড়ি</Link> 

                                                <Link href="">কমল পানি</Link> 

                                                <Link className={styles.Link4} href='#'>About Us</Link>

                                                <Link className={styles.Link5} href='#'>Contact Us</Link>

                                            </div>

                                        {/* right */}

                                        <div className={styles.lastMenuDiv}>

                                            

                                        </div>

                                    </Offcanvas.Body>

                                    </Offcanvas>

                                </div>

                                
                            </div>

                        </div>



                    </Col>

                </Row>


                </Container>

            </Container>

        </section>
        

    </div>

  )

}

export default Menubar
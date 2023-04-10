import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Link from 'next/link'
import styles from '../Menubar/Menubar.module.css'
import { IoSearchOutline,IoCartSharp} from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";


const Menubar = () => {

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
                                                    <Link href="">কমল পানি</Link> 
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

                                                <li>
                                                    <Link href="">কমল পানি</Link> 
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

                    </Col>

                </Row>


                </Container>

            </Container>

        </section>
        

    </div>

  )

}

export default Menubar
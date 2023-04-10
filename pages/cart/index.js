import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Link from 'next/link'
import Menubar from '@/Components/Menubar/Menubar'
import Footer from '@/Components/Footer/Footer'
import { MdDelete } from "react-icons/md";

// input group 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const index = () => {

  return (

    <div className='CartPage'>

        <Menubar></Menubar>

        {/* =============================================================================================
                Cart
        =================================================================================================*/}

        <section>

            <Container>
                
                <Row>

                    <Col lg={6}>

                        <div className='CartItemDev'>

                            <div className='CartItem1Div'>

                                    <div>
                                        <img src="images/home/img.png" alt="" />
                                    </div>

                                    <div>

                                        <p>Marboro advance 5pcs</p>

                                        <p>5 pc</p>

                                    </div>

                            </div>



                            <div className='CartItem1Div2'>

                                <div  className='CartItem2Link'>

                                    <p>300.20 ৳</p>

                                    <Link href="">-</Link>

                                    <Link  className='CartItem2Link2' href="">2</Link>

                                    <Link href="">+</Link>

                                </div>

                                <div className='CartItem2LinkDlet'>

                                    <Link href=""><MdDelete></MdDelete></Link>

                                </div>

                            </div>

                        </div>

                    </Col>

                    <Col lg={6}>

                        <div className='CartItemDev2'>

                            <InputGroup className="mb-3">

                                <Form.Control
                                placeholder="Recipient's username"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                />
                                <Button id="button-addon2" variant="danger">
                                Apply
                                </Button>

                            </InputGroup>

                            <div className='CartItemDev2ItemPrice'>

                                <ul>
                                    <li>
                                        <p>Item Price</p>

                                        <p>600.00 ৳</p>
                                        
                                    </li>
                                    <li>
                                        <p>Vat/Txt</p>

                                        <p> <span>(+)</span> 0.00 ৳</p>

                                    </li>
                                    <li>
                                        <p>Discount</p>

                                        <p><span>(-)</span> 20.00 ৳</p>

                                    </li>
                                    <li>
                                        <p>Coupon Discount</p>

                                        <p><span>(-)</span> 0.00 ৳</p>

                                    </li>

                                    <li>
                                        <p>Delivery Fee</p>

                                        <p><span>(+)</span> 0.00 ৳</p>

                                    </li>

                                    <li>

                                       <div className='Hr'></div>

                                    </li>

                                    <li className='lastLi'>
                                        <p>Total Amount</p>

                                        <p>650.00 ৳</p>

                                    </li>

                                </ul>


                            </div>

                        </div>

                    </Col>

                </Row>

            </Container>

        </section>
     

        {/* =============================================================================================
                Footer
        =================================================================================================*/}
        <Footer></Footer>
        
    </div>

  )
}

export default index
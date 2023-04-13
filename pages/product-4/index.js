import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Link from 'next/link'
import Menubar from '@/Components/Menubar/Menubar'
import Footer from '@/Components/Footer/Footer'
import { HiDotsVertical } from "react-icons/hi";
import Dropdown from 'react-bootstrap/Dropdown';
import { AiFillStar } from "react-icons/ai";

const index = () => {

  return (

    <div className='Product-1'>

      <Menubar></Menubar>

      {/* =============================================================================================
             Product -All
      =================================================================================================*/}

      <section>

        <Container>

          <div className='buttonmainDiv'>

            <div className='buttonDiv1'>

                <Link className='button1' href="'">
                  <button>All</button>
                </Link>

            </div>

            <div className='buttonDiv2'>

            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <Link href=""><HiDotsVertical></HiDotsVertical></Link>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Price: Low to high</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Price: High to Low</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Ascending</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Descending</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            </div>

          </div>
          
        </Container>

      </section>

      {/* =============================================================================================
             Product -All
      =================================================================================================*/}


    <section>

      <Container>

            <div className='HomeProduct'>

                  <h2>All Product </h2>

                  <Link href="">View All  </Link>
            </div>

            <Row>

                  <Col sm={6} lg={3}>
                        <div className='HomeCard'>

                              <img src="/images/home/img8.png" alt="" />
                              <h4>Coca - 600ml </h4>
                              <div> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
                              <h6>1.6ltr</h6>
                              <h3>46.00 ৳</h3>

                        </div>
                  </Col>

                  <Col sm={6} lg={3}>
                        <div className='HomeCard'>
                              <img src="/images/home/img8.png" alt="" />
                              <h4>Coca - 600ml </h4>
                              <div> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
                              <h6>1.6ltr</h6>
                              <h3>46.00 ৳</h3>

                        </div>
                  </Col>

                  <Col sm={6} lg={3}>
                        <div className='HomeCard'>
                              <img src="/images/home/img8.png" alt="" />
                              <h4>Coca - 600ml </h4>
                              <div> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
                              <h6>1.6ltr</h6>
                              <h3>46.00 ৳</h3>

                        </div>
                  </Col>

                  <Col sm={6} lg={3}>
                        <div className='HomeCard'>
                              <img src="/images/home/img8.png" alt="" />
                              <h4>Coca - 600ml </h4>
                              <div> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
                              <h6>1.6ltr</h6>
                              <h3>46.00 ৳</h3>

                        </div>
                  </Col>

                  <Col sm={6} lg={3}>
                        <div className='HomeCard'>
                              <img src="/images/home/img8.png" alt="" />
                              <h4>Coca - 600ml </h4>
                              <div> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
                              <h6>1.6ltr</h6>
                              <h3>46.00 ৳</h3>

                        </div>
                  </Col>

                  <Col sm={6} lg={3}>
                        <div className='HomeCard'>
                              <img src="/images/home/img8.png" alt="" />
                              <h4>Coca - 600ml </h4>
                              <div> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
                              <h6>1.6ltr</h6>
                              <h3>46.00 ৳</h3>

                        </div>
                  </Col>

                  <Col sm={6} lg={3}>
                        <div className='HomeCard'>
                              <img src="/images/home/img8.png" alt="" />
                              <h4>Coca - 600ml </h4>
                              <div> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
                              <h6>1.6ltr</h6>
                              <h3>46.00 ৳</h3>

                        </div>
                  </Col>

                  <Col sm={6} lg={3}>
                        <div className='HomeCard'>
                              <img src="/images/home/img8.png" alt="" />
                              <h4>Coca - 600ml </h4>
                              <div> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
                              <h6>1.6ltr</h6>
                              <h3>46.00 ৳</h3>

                        </div>
                  </Col>

            </Row>

      </Container>

    </section>

      <div className="section-gap"></div>


      {/* =============================================================================================
            Footer
      =================================================================================================*/}


      <Footer></Footer>



    </div>
    
  )
}

export default index
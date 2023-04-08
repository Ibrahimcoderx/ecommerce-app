import Menubar from '@/Components/Menubar/Menubar'
import Carosel from '@/Components/Carosel/Carosel';
import Slider from '@/Components/Slider/Slider';
import { Container,Row,Col } from 'react-bootstrap';
import Link from 'next/link';
import { AiFillStar } from "react-icons/ai";
import Footer from '@/Components/Footer/Footer';

export default function Home() {

  return (

    <div className='HomePage'>

      {/* =====================================================================================
            Banner
      =======================================================================================*/}

      <Menubar></Menubar>

      <Carosel></Carosel>
      
      <Slider></Slider>
      

      {/* =====================================================================================
            Allproduct home
      =======================================================================================*/}
      <section>

            <Container>

                  <div className='HomeProduct'>

                        <h2>All Product </h2>

                        <Link href="">View All  </Link>
                  </div>

                  <Row>

                        <Col sm={6} lg={3}>
                              <div className='HomeCard'>

                                    <img src="/images/home/img3.png" alt="" />
                                    <h4>Coca - 600ml </h4>
                                    <div> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
                                    <h6>1.6ltr</h6>
                                    <h3>46.00 ৳</h3>

                              </div>
                        </Col>

                        <Col sm={6} lg={3}>
                              <div className='HomeCard'>
                                    <img src="/images/home/img3.png" alt="" />
                                    <h4>Coca - 600ml </h4>
                                    <div> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
                                    <h6>1.6ltr</h6>
                                    <h3>46.00 ৳</h3>

                              </div>
                        </Col>

                        <Col sm={6} lg={3}>
                              <div className='HomeCard'>
                                    <img src="/images/home/img3.png" alt="" />
                                    <h4>Coca - 600ml </h4>
                                    <div> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
                                    <h6>1.6ltr</h6>
                                    <h3>46.00 ৳</h3>

                              </div>
                        </Col>

                        <Col sm={6} lg={3}>
                              <div className='HomeCard'>
                                    <img src="/images/home/img3.png" alt="" />
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

      {/* =====================================================================================
          Footer
      =======================================================================================*/}

      <Footer></Footer>

      {/* =====================================================================================
            Banner
      =======================================================================================*/}


      {/* =====================================================================================
            Banner
      =======================================================================================*/}


      {/* =====================================================================================
            Banner
      =======================================================================================*/}


      {/* =====================================================================================
            Banner
      =======================================================================================*/}


      {/* =====================================================================================
            Banner
      =======================================================================================*/}




    </div>
  )
}

import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import Subtitle from "./../shared/Subtitle";
import ekper from "../assets/images/ekper.png";

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import HomestayUnggulan from "../Featured-tours/HomestayUnggulan";
import TourUnggulan from "../Featured-tours/TourUnggulan";
import ArtikelTerkait from "../Featured-tours/ArtikelTerkait";
import LayananList from "../services/LayananList";

const Home = () => {
  return (
    <>
      {/*====== HERO SECTION START=====*/}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <h1>
                  Temukan pengalaman mengeksplorasi Indonesia bersama
                  <span className="highlight"> TOUR'U</span>
                </h1>
                <p>
                  <span className="highlight1">Tour’u</span> membantu kamu
                  menemukan informasi pelayanan jasa Tour Guide dan Homestay
                  yang akan membuat perjalananmu menjadi lebih berkesan.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg03} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/*====== HERO SECTION END=====*/}

      {/* =============== LAYANAN START ==========*/}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h2 className="services__title">Layanan yang kami tawarkan</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/* =============== LAYANAN END ==========*/}

      {/* =============== PENYEDIA START ==========*/}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h2 className="services__title">
                Jadi bagian dari penyedia jasa
              </h2>
            </Col>
            <LayananList />
          </Row>
        </Container>
      </section>
      {/* =============== PENYEDIA END ==========*/}

      {/* =============== ARTIKEL START ==========*/}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Artikel Terkait"} />
            </Col>
            <ArtikelTerkait />
          </Row>
        </Container>
      </section>
      {/* =============== ARTIKEL END ==========*/}

      {/* =============== HOMESTAY UNGGULAN START ==========*/}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Homestay Unggulan Kami"} />
            </Col>
            <HomestayUnggulan />
          </Row>
        </Container>
      </section>
      {/* =============== HOMESTAY UNGGULAN END ==========*/}

      {/* =============== EXPERIEES START ==========*/}
      <Container>
        <Row>
          <Col lg="6">
            <div className="experience__content">
              <h2>
                Dengan tour guide yang berpengalaman, perjalanan mu akan terasa
                lebih menyenangkan!
              </h2>
            </div>

            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>4k+</span>
                <h6>Pengalaman</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6>Trip Sukses</h6>
              </div>
              <div className="counter__box">
                <span>5k+</span>
                <h6>Warga Lokal</h6>
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="experience__img">
              <img src={ekper} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
      {/* =============== EXPERIENCES END ==========*/}

      {/* =============== TOUR GUIDE UNGGULAN START ==========*/}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Tour Guide Unggulan Kami"} />
            </Col>
            <TourUnggulan />
          </Row>
        </Container>
      </section>
      {/* =============== TOUR GUIDE UNGGULAN END ==========*/}
    </>
  );
};

export default Home;

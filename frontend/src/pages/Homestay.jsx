import React, { useState, useEffect } from "react";
import CommonSection from "../shared/CommonSectionHome";

import "../styles/tour.css";
import HomestayCard from "../shared/HomestayCard";
import SearchBar from "../shared/SearchBar";
import tourData from "../assets/data/tours";
import { Container } from "reactstrap";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Homestay = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const pages = Math.ceil(5 / 4);
    setPageCount(pages);
  }, [page]);

  return (
    <>
      <CommonSection />
      <section>
        <Container>
          <Row>
            <h2 className="tourtitle">Homestay</h2>
            <div className="horizontal"></div>
          </Row>
          <Row className="top">
            <Col xxl="7">
              <div className="pilih">
                <p>Pilih Homestay yang kamu inginkan!</p>
              </div>
              <SearchBar />
            </Col>

            <Col xxl="5">
              <div className="pilih1">
                <p>Apakah kamu mau mendaftarkan Homestay?</p>
              </div>
              <div className="daftar">
                <Link>Daftar menjadi Homestay</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {tourData?.map((tour) => (
              <Col lg="3" className="mb-4" key={tour.id}>
                <HomestayCard tour={tour} />
              </Col>
            ))}

            <Col lg="12">
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map((number) => (
                  <span
                    key={number}
                    onClick={() => setPage(number)}
                    className={page === number ? "active__page" : ""}
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Homestay;

import React, { useState, useEffect } from "react";
import CommonSection from "../shared/CommonSection";

import "../styles/tour.css";
import TourCard from "../shared/TourCard";
import SearchBar from "../shared/SearchBar";
import tourData from "../assets/data/tours";
import { Container } from "reactstrap";
import { Row } from "reactstrap";
import { Col } from "reactstrap";

const Tours = () => {
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
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {tourData?.map((tour) => (
              <Col lg="3" className="mb-4" key={tour.id}>
                <TourCard tour={tour} />
              </Col>
            ))}

            <Col>
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3"></div>
              {[...Array(pageCount).keys()].map((number) => (
                <span key={number} onClick={number}>
                  {number + 1}
                </span>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Tours;

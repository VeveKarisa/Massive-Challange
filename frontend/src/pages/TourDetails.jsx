import React from "react";
import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import tourData from "../assets/data/tours";
import calculateAvgRating from "./../utils/avgRating";

const TourDetails = () => {
  const { id } = useParams();

  //STATISTIK DATA UNTUK MEMANGGIL API DAN LOAD DATA DARI DATABASE
  const tour = tourData.find((tour) => tour.id === id);

  //DESTRUCTURE PROPERTIES DARI OBJEK TOUR
  const {
    photo,
    title,
    desc,
    price,
    address,
    reviews,
    city,
    distance,
    maxGroupSize,
  } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col>
              <div className="tour__content">
                <img src={photo} alt="" />
                <div className="tour__info">
                  <h2>{title}</h2>
                  <div className="= d-flex align-items-center gap-5">
                    <span className="tour__rating d-flex align-items-center gap-1">
                      <i
                        class="ri-star-fill"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>
                      {calculateAvgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? (
                        "Not rated"
                      ) : (
                        <span>({reviews?.length})</span>
                      )}
                    </span>
                  </div>
                  <span>
                    <i class="ri-map-pin-line"></i> {city}
                  </span>
                  <div className="tour__extra-details">
                    <span>Rp.{price}/orang</span>
                  </div>
                  <h5>Deskripsi</h5>
                  <p>{desc}</p>
                </div>

                {/*==========REVIEW=========*/}
                <div className="tour__reviews mt-4">
                  <h4>Review ({reviews?.length} reviews)</h4>
                </div>
                <Form>
                  <div className="d-flex align-items-center ap-3 mb-4 rating__group"></div>
                </Form>
                {/*==========REVIEW=========*/}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TourDetails;

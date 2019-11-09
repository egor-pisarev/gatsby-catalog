import {Link} from "gatsby"
import React from "react"
import {Container, Row, Col, Button} from "react-bootstrap"

const MainBanner = ({siteTitle, bannerImage}) => (
    <section className="banner_part" style={{ }}>
        <Container>
            <Row>
                <Col>
                    <div className="banner_text">
                        <div className="banner_text_iner">
                            <h1>Committed
                            to <span>Superior</span> Quality
                            and Results</h1>
                            <p>Moving male there under air air beast lesser creeping saying wherein two void can' ness saw set meat our. Whose give day. Morning own fifth from Were moved darkness. Female bring abundantly and research  </p>
                            <a href="#" className="btn_1">View project </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)


export default MainBanner

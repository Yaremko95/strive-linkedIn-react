import React, { Component } from "react";
import ContainerCard from "../cards/ContainerCard";
import BrowserMapMemberContainer from "../browsemap/BrowseMapContainer";
import { Col, Row } from "react-bootstrap";
import PostForm from "../../form/PostForm";
import ModalCustom from "../modals/ModalCustom";
import {} from "react-fontawesome";
import UpdateData from "../../../data/UpdateData";

const colStyle = {
  border: "0.2px #d9d9d9 solid",
  padding: "32px",
  color: "#666666",
};
const firstcolStyle = {
  display: "flex",
  alignItems: "center",
  //  padding:'32px'
};
const insidecolStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // padding:'32px'
};
const modalStyle = {
  width: "75%",
  margin: "auto",
};
class InteractionCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    {
      console.log("THESEPROPSSSS", this.props);
    }
    return (
      <ContainerCard background="white" padding="0">
        <Row>
          <Col md={6} style={colStyle}>
            <ModalCustom
              title={"Create a post"}
              button={
                <div style={firstcolStyle}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M17 13.75l2-2V20a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1h8.25l-2 2H5v12h12v-5.25zm5-8a1 1 0 01-.29.74L13.15 15 7 17l2-6.15 8.55-8.55a1 1 0 011.41 0L21.71 5a1 1 0 01.29.71zm-4.07 1.83l-1.5-1.5-6.06 6.06 1.5 1.5zm1.84-1.84l-1.5-1.5-1.18 1.17 1.5 1.5z"></path>
                  </svg>
                  <div style={{ paddingLeft: "7px", fontWeight: "600" }}>
                    Start a post{" "}
                  </div>
                </div>
              }
            >
              <UpdateData
                method={"POST"}
                endpoint={`https://striveschool.herokuapp.com/api/posts/`}
                {...this.props}
              >
                <PostForm />
              </UpdateData>
            </ModalCustom>
          </Col>
          <Col md={2} style={colStyle}>
            <div style={insidecolStyle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M21 6h-3l-1.5-3h-9L6 6H3a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1V7a1 1 0 00-1-1zM7.36 8l1.5-3h6.28l1.5 3H20v2h-3.42a5 5 0 00-9.16 0H4V8h3.36zm7.76 4A3.13 3.13 0 1112 8.88 3.13 3.13 0 0115.13 12zM4 18v-7h3.1a5 5 0 109.8 0H20v7H4z"></path>
              </svg>
            </div>
          </Col>
          <Col md={2} style={colStyle}>
            <div style={insidecolStyle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M21 5.92a1 1 0 00-.57.18L17 8.5V7a1 1 0 00-1-1H3a1 1 0 00-1 1v10a1 1 0 001 1h13a1 1 0 001-1v-1.5l3.43 2.4a1 1 0 00.57.18 1 1 0 001-1V6.92a1 1 0 00-1-1zM15 16H4V8h11v8zm2-5.21l3-2.1v6.62l-3-2.1v-2.42z"></path>
              </svg>
            </div>
          </Col>
          <Col md={2} style={colStyle}>
            <div style={insidecolStyle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M14.13 2H5a1 1 0 00-1 1v18a1 1 0 001 1h14a1 1 0 001-1V7.88zM18 20H6V4h7v5h5v11zM8 12h8v1H8v-1zm0 3h6v1H8v-1z"></path>
              </svg>
            </div>
          </Col>
        </Row>
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#f3f6f8",
          }}
        >
          <p
            style={{
              color: "#0073bc",
              fontWeight: "bold",
              margin: "0",
              padding: "10px",
              paddingLeft: "18px",
            }}
          >
            Write an article
            <span style={{ color: "#666666", fontWeight: "lighter" }}>
              {" "}
              on LinkedIn
            </span>
          </p>
        </Row>
      </ContainerCard>
    );
  }
}

export default InteractionCard;

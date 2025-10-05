import Link from "next/link";
import {
  Button,
  ListGroup,
  ListGroupItem,
  Form,
  InputGroup,
  Row,
  Col,
} from "react-bootstrap";
import { LuFilePenLine } from "react-icons/lu";
import { BsGripVertical } from "react-icons/bs";
import { FaEllipsisV, FaCheckCircle } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";

export default async function Assignments({ params }) {
  const { cid } = await params;
  return (
    <div id="wd-assignments">
      <Row className="mb-4">
        <Col md={6}>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Search..."
              id="wd-search-assignment"
            />
          </InputGroup>
        </Col>
        <Col md={6} className="text-end">
          <Button
            variant="outline-secondary"
            className="me-2"
            id="wd-add-assignment-group"
          >
            <AiOutlinePlus className="me-1" /> Group
          </Button>
          <Button variant="danger" id="wd-add-assignment">
            <AiOutlinePlus className="me-1" /> Assignment
          </Button>
        </Col>
      </Row>

      <ListGroup className="rounded-0" id="wd-assignments-list">
        <ListGroupItem className="wd-assignment-group p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <span className="fw-bold">ASSIGNMENTS</span>
              <span className="badge bg-light text-dark ms-2">
                40% of Total
              </span>
            </div>
            <div>
              <Button variant="outline-primary" size="sm" className="me-2">
                <AiOutlinePlus className="me-1" />
              </Button>
              <FaEllipsisV className="text-muted" />
            </div>
          </div>
          <ListGroup className="wd-assignment-items rounded-0">
            <ListGroupItem className="wd-assignment p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-3 fs-3" />
              <div className="p-2 rounded me-3">
                <LuFilePenLine color="green" size={25} />
              </div>
              <div className="flex-grow-1">
                <Link
                  href={`/Courses/${cid}/Assignments/123`}
                  className="text-decoration-none text-dark"
                >
                  <div className="fw-bold">A1</div>
                  <div className="text-danger small">Multiple Modules</div>
                  <div className="text-muted small">
                    <strong>Not available until</strong> May 6 at 12:00am |
                    <strong> Due</strong> May 13 at 11:59pm | 100 pts
                  </div>
                </Link>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className="text-success me-2" />
                <FaEllipsisV className="text-muted" />
              </div>
            </ListGroupItem>
            <ListGroupItem className="wd-assignment p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-3 fs-3" />
              <div className="p-2 rounded me-3">
                <LuFilePenLine color="green" size={25} />
              </div>
              <div className="flex-grow-1">
                <Link
                  href={`/Courses/${cid}/Assignments/124`}
                  className="text-decoration-none text-dark"
                >
                  <div className="fw-bold">A2</div>
                  <div className="text-danger small">Multiple Modules</div>
                  <div className="text-muted small">
                    <strong>Not available until</strong> May 13 at 12:00am |
                    <strong> Due</strong> May 20 at 11:59pm | 100 pts
                  </div>
                </Link>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className="text-success me-2" />
                <FaEllipsisV className="text-muted" />
              </div>
            </ListGroupItem>
            <ListGroupItem className="wd-assignment p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-3 fs-3" />
              <div className="p-2 rounded me-3">
                <LuFilePenLine color="green" size={25} />
              </div>
              <div className="flex-grow-1">
                <Link
                  href={`/Courses/${cid}/Assignments/125`}
                  className="text-decoration-none text-dark"
                >
                  <div className="fw-bold">A3</div>
                  <div className="text-danger small">Multiple Modules</div>
                  <div className="text-muted small">
                    <strong>Not available until</strong> May 20 at 12:00am |
                    <strong> Due</strong> May 27 at 11:59pm | 100 pts
                  </div>
                </Link>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className="text-success me-2" />
                <FaEllipsisV className="text-muted" />
              </div>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}

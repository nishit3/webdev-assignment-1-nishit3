import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
  return (
    <div id="wd-people-table">
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Tony</span>{" "}
              <span className="wd-last-name">Stark</span>
            </td>
            <td className="wd-login-id">001234561S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-01</td>
            <td className="wd-total-activity">10:21:32</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Nishit</span>{" "}
              <span className="wd-last-name">Chaudhary</span>
            </td>
            <td className="wd-login-id">001234661S</td>
            <td className="wd-section">S103</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2021-10-01</td>
            <td className="wd-total-activity">10:22:32</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Bruce</span>{" "}
              <span className="wd-last-name">Wayne</span>
            </td>
            <td className="wd-login-id">001233361S</td>
            <td className="wd-section">S102</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2021-11-01</td>
            <td className="wd-total-activity">10:22:32</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Clark</span>{" "}
              <span className="wd-last-name">Kent</span>
            </td>
            <td className="wd-login-id">001234661S</td>
            <td className="wd-section">S110</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-11</td>
            <td className="wd-total-activity">10:25:32</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Jack</span>{" "}
              <span className="wd-last-name">Ryan</span>
            </td>
            <td className="wd-login-id">001233331S</td>
            <td className="wd-section">S122</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2021-14-01</td>
            <td className="wd-total-activity">10:29:32</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

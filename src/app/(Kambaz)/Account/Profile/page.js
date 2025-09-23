import Link from "next/link";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input
        defaultValue="nishit.9"
        placeholder="username"
        className="wd-username"
      />
      <br />
      <input
        defaultValue="123"
        placeholder="password"
        type="password"
        className="wd-password"
      />
      <br />
      <input defaultValue="Nishit" placeholder="First Name" id="wd-firstname" />
      <br />
      <input
        defaultValue="Chaudhary"
        placeholder="Last Name"
        id="wd-lastname"
      />
      <br />
      <input defaultValue="2003-09-03" type="date" id="wd-dob" />
      <br />
      <input
        defaultValue="nishitchaudhary@northeastern.edu"
        type="email"
        id="wd-email"
      />
      <br />
      <select defaultValue="STUDENT" id="wd-role">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <br />
      <Link href="Signin"> Sign out </Link>
    </div>
  );
}

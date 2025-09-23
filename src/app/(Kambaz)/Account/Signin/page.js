import Link from "next/link";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="page-content">
      <h3>Sign in</h3>
      <form className="card">
        <input placeholder="username" className="wd-username" /> <br />
        <input
          placeholder="password"
          type="password"
          className="wd-password"
        />{" "}
        <br />
        <Link href="/Dashboard" id="wd-signin-btn">
          {" "}
          Sign in{" "}
        </Link>{" "}
        <br />
        <Link href="Signup" id="wd-signup-link">
          {" "}
          Sign up{" "}
        </Link>
      </form>
    </div>
  );
}

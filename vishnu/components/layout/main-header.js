import Link from "next/link";
import { useSession, signOut } from "next-auth/client";
import { useRouter } from "next/router";

import classes from "./main-header.module.css";

function MainHeader() {
  const [session, loading] = useSession();
  const router = useRouter();

  function logoutHandler() {
    signOut();
  }

  const authHandler = (e) => {
    e.preventDefault();
    router.push("/auth");
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        {!session && !loading && (
          <Link href="/">
            <a>Vishnu</a>
          </Link>
        )}
        {session && (
          <Link href="/dashboard">
            <a>Vishnu</a>
          </Link>
        )}
      </div>
      <nav className={classes.navigation}>
        <ul>
          {!session && !loading && (
            <li>
              <Link href="/#about">ABOUT</Link>
            </li>
          )}
          {!session && !loading && (
            <li>
              <Link href="/#faq">FAQ</Link>
            </li>
          )}

          {session && (
            <li>
              <Link href="/chat">CHAT</Link>
            </li>
          )}
          {session && (
            <li>
              <Link href="/connect">CONNECT</Link>
            </li>
          )}
          {session && (
            <li>
              <Link href="/profile">PROFILE</Link>
            </li>
          )}
          <li>
            <Link href="/emergency">Emergency Assistance</Link>
          </li>
          <li>
            <Link href="/contact">Contact-Us</Link>
          </li>

          {!session && !loading && (
            <li>
              <button onClick={authHandler}>REGISTER</button>
            </li>
          )}
          {session && (
            <li>
              <button onClick={logoutHandler}>LOGOUT</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;

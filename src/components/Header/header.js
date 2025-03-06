import headerClasses from "./header.module.css";

function Header() {
  return (
    <header className={headerClasses.header}>
      <div className={headerClasses.logo_container}>
        <a href="/" title="quicc.ai">
          <img src="/assets/images/quicc_logo_black.png" alt="logo" />
        </a>
      </div>
      <div className={headerClasses.right_container}>
        <button type="button" className="primaryBtn">Log in</button>
        <button type="button" className="primaryBtn">Sign up</button>
      </div>
    </header>
  );
}

export default Header;

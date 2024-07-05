import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`${styles.Navbar} container`}>
        <div className='logo'>
            <img src="/images/logo.png" alt="logo-img"/>
        </div>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar
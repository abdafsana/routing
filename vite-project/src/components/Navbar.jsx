import { Link } from "react-router-dom";

const Navbar = () => {
  const styles = {
    nav: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      padding: "15px",
      backgroundColor: "#222",
    },
    link: {
      color: "white",
      textDecoration: "none",
      fontWeight: "bold",
    },
  };

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Haqqında</Link>
      <Link to="/projects" style={styles.link}>İş Nümunələri</Link>
      <Link to="/contact" style={styles.link}>Əlaqə</Link>
    </nav>
  );
};

export default Navbar;

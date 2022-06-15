import react from "react";
import reactDom from "react-dom";

var year = new Date().getFullYear();

function Footer() {
    return (
        <footer>
            <p>Copyright &copy; {year}</p>
        </footer>
    );
}

export default Footer;
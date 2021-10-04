import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className = {"menu " + (menuOpen && "active")}>
            <ul>
                <li><a href="#about" onClick = {() => setMenuOpen(!menuOpen)}>About</a></li>
                <li><a href="#resume2" onClick = {() => setMenuOpen(!menuOpen)}>Resume</a></li>
                <li><a href="#projects" onClick = {() => setMenuOpen(!menuOpen)}>Projects</a></li>
                <li><a href="#contact" onClick = {() => setMenuOpen(!menuOpen)}>Contact</a></li>
            </ul>
        </div>
    )
}

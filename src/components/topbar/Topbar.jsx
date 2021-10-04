import "./topbar.scss"

export default function Topbar({menuOpen, setMenuOpen}) {

    return (
        <div className= {"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left" a link="white" vlink="white">
                    <a href="#intro" className="logo" id="coolLogo" onClick = {() => menuOpen === false ? setMenuOpen(menuOpen) :
                setMenuOpen(!menuOpen)}><img src = "images/logo.png"/></a>
                </div>
                <div className="right" >
                    <div className="links">
                        <a className="active" href="#about" id="coolLink">About</a>
                        <a className="active" href="#resume2" id="coolLink">Resume</a>
                        <a className="active" href="#projects" id="coolLink">Projects</a>
                        <a className="active" href="#contact" id="coolLink">Contact</a>
                    </div>
                    <div className="hamburguer" onClick = {() => setMenuOpen(!menuOpen)}>
                        <span className = "line1"></span>
                        <span className = "line2"></span>
                        <span className = "line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

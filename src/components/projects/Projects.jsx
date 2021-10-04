import "./projects.scss"

export default function Projects() {
    return (
        <div className="projects" id="projects">
            <h2>Projects</h2>
            <div className="container">
                <div className="item">
                    <img src="images/1blackjack.png" alt=""/>
                    <a href="https://github.com/Edwinngwong/BlackJack" target="_blank" >
                        <p>
                            <h4>Blackjack</h4>
                            <h5>Java + github</h5>
                        </p>
                    </a>
                    <h3>BlackJack</h3>
                </div>
                <div className="item">
                    <img src="images/characterSorter.png" alt=""/>
                    <a href="https://github.com/Edwinngwong/CharacterSorting" target="_blank" >
                        <p>
                            <h4>Character Sorter</h4>
                            <h5>Java + github</h5>
                        </p>
                    </a>
                    <h3>Character Sorter</h3>
                </div>
                <div className="item">
                    <img src="images/portfolioIcon.png" alt=""/>
                    <a href="https://github.com/Edwinngwong/PortfolioWebsite" target="_blank" >
                        <p>
                            <h4>Portfolio</h4>
                            <h5>ReactJS + github</h5>
                        </p>
                    </a>
                    <h3>Portfolio Website</h3>
                </div>
                <div className="item">
                    <img src="images/classregistrationicon.png" alt=""/>
                    <a href="https://github.com/Edwinngwong/ClassRegistrationSystem" target="_blank" >
                        <p>
                            <h4>Class Registration</h4>
                            <h5>Java + SQL + github</h5>
                        </p>
                    </a>
                    <h4>Class Registration System</h4>
                </div>
                <div className="item">
                    <img src="images/libraryicon.png" alt=""/>
                    <a href="https://github.com/Edwinngwong/LibrarySystem" target="_blank" >
                        <p>
                            <h4>Library System</h4>
                            <h5>C# + github</h5>
                        </p>
                    </a>
                    <h3>Library System</h3>
                </div>
            </div>
        </div>
    )
}

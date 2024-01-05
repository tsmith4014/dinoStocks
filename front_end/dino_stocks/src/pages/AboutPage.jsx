const AboutPage = () => {
    return (
        <>
            <header>
                <h1 className="about-title">DinoStocks 101</h1>
            </header>

            <section className="dino-info">
                <div className="dino-section intro">
                    <div className="dino-text">
                        <h2>Introduction to DinoStocks</h2>
                        <p>Welcome to DinoStocks, where we learn about the exciting world of stocks using our favorite dinosaurs! Here, you are investing in a dinosaur theme park. Each dinosaur will return profits based on its popularity with visitors.</p>
                    </div>
                    <img src="/dino_theme_park.jpg" />
                </div>

                <div className="dino-section stocks">
                    <img src="/dinostocks.jpg" />
                    <div className="dino-text">
                        <h2>What are Stocks?</h2>
                        <p>Usually, stocks are pieces of a company that you can own. With DinoStocks, each stock is a piece of the dinosaur that you own.</p>
                    </div>

                </div>

                <div className="dino-section market">
                    <div className="dino-text">
                        <h2>DinoStock Market</h2>
                        <p>Just like the stock market, the popularity and revenue of a dinosaur can go up and down. The DinoStock market is a place where can buy and sell stocks of a particular dinosaur and make money based on if that dino's stock is up or down.</p>
                    </div>
                    <img src="/dino_computer.jpg" />
                </div>
                <div className="dino-tips">
                    <h2 className="dino-tips-title">Important Dino Tips</h2>
                    <ul className="dino-tips-list">
                        <li className="dino-tips-list-item">Don't put all your eggs (money) in one dinosaur nest.</li>
                        <li className="dino-tips-list-item">Watch the DinoStock market, but don't let it roar too loud in your head.</li>
                        <li className="dino-tips-list-item">Invest for the long term, like a dinosaur's lifespan.</li>
                    </ul>
                </div>
            </section>

            <footer>
                <p>© 2023 DinoStocks 101. Roar into the Future!</p>
            </footer>
        </>
    );
}
export default AboutPage;
import "./App.scss";

import icon from "./assets/logo.svg";
import earthImg from "./assets/earth-3d.png";
import orbitsImg from "./assets/orbits.svg";
import spacecraftImg from "./assets/spacecraft.png";

import cartImg from "./assets/cart.svg";
import cartGradientImg from "./assets/cart-gradient.svg";

import spaceOffer1Img from "./assets/space_39625.jpg";
import spaceOffer2Img from "./assets/space_39627.jpg";
import spaceOffer3Img from "./assets/space_39613.jpg";
import spaceOffer4Img from "./assets/space_39628.jpg";

const spaceOffers = [
  {
    id: "1",
    image: spaceOffer1Img,
    title: "Move the borders of reality!",
    description: "Go on a space adventure ",
    link: "#",
  },
  {
    id: "2",
    image: spaceOffer2Img,
    title: "Space is not just stars and planets",
    description: "it is a majestic journey to ",
    link: "#",
  },
  {
    id: "3",
    image: spaceOffer3Img,
    title: "For those who dream of stars",
    description: "Our offer: make your dream come true",
    link: "#",
  },
  {
    id: "4",
    image: spaceOffer4Img,
    title: "Fulfill your fantastic dreams",
    description: "Space has never been so close",
    link: "#",
  },
];

function App() {
  return (
    <div className="root-container">
      <header className="header-menu">
        <div className="header-menu__icon">
          <img src={icon} alt="logo" />
        </div>
        <input
          type="checkbox"
          id="menu-toggle"
          className="header-menu__burger-menu-toggle"
        />
        <label htmlFor="menu-toggle" className="header-menu__burger-menu">
          <span />
        </label>
        <ul className="header-menu__menu-items">
          <li className="header-menu__menu-items__item">
            <a href="">
              <span className="header-menu__menu-items__item--common">
                Home
              </span>
              <span className="header-menu__menu-items__item--gradient">
                Home
              </span>
            </a>
          </li>
          <li className="header-menu__menu-items__item">
            <a href="">
              <span className="header-menu__menu-items__item--common">
                Products
              </span>
              <span className="header-menu__menu-items__item--gradient">
                Products
              </span>
            </a>
          </li>
          <li className="header-menu__menu-items__item">
            <a href="">
              <img
                className="header-menu__menu-items__item--common"
                src={cartImg}
                alt="cart common"
              />
              <img
                className="header-menu__menu-items__item--gradient"
                src={cartGradientImg}
                alt="cart gradient"
              />
            </a>
          </li>
        </ul>
      </header>

      <section className="header-section">
        <div className="header-section__content-container">
          <div className="header-section__composition">
            <img
              className="header-section__composition__earth"
              src={earthImg}
              alt="earth image"
            />
            <img
              className="header-section__composition__orbit"
              src={orbitsImg}
              alt="orbit image"
            />
            <img
              className="header-section__composition__spacecraft"
              src={spacecraftImg}
              alt="spacecraft image"
            />
          </div>
          <div className="header-section__titles">
            <h1 className="header-section__titles__main">
              Discover the vast expanses of{" "}
              <span className="header-section__titles__main--pink">space</span>
            </h1>
            <h4 className="header-section__titles__second">
              Where the possibilities are{" "}
              <span className="header-section__titles__second--yellow">
                endless!
              </span>
            </h4>
            <button className="button button--filled">
              <span className="button__text button__text--filled">
                Learn more
              </span>
            </button>
          </div>
        </div>
        <div className="header-section__background" />
      </section>

      <section className="main-content">
        <h4 className="main-content__title">Offers</h4>
        <div className="main-content__offers">
          {spaceOffers.map((offer) => (
            <div
              key={offer.id}
              className="space-card"
              style={{ backgroundImage: `url(${offer.image})` }}
            >
              <div className="space-card__gradient" />
              <div className="space-card__content">
                <h2 className="space-card__content__title">{offer.title}</h2>
                <p className="space-card__content__description">
                  {offer.description}
                </p>
                <a href={offer.link} className="button button--outlined">
                  <span className="button__text button__text--outlined">
                    Learn more
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="main-content__description">
          <h4 className="main-content__description__title">
            Embark on a space journey
          </h4>
          <input
            type="checkbox"
            id="read-more-toggle"
            className="main-content__description__toggle"
          />
          <p className="main-content__description__text">
            Traveling into space is one of the most exciting and unforgettable
            adventures that can change your life forever. And if you have ever
            dreamed of exploring stars, planets and galaxies, then our company
            is ready to help you realize this dream. We offer a unique
            experience that will allow you to go on a space journey and see all
            the secrets of the universe. We guarantee that every moment in space
            will be filled with incredible impressions, excitement and new
            discoveries. Our team of professionals takes care of your safety and
            comfort so that you can fully enjoy your adventure in space. We
            offer various options for space excursions.
          </p>
          <label
            className="main-content__description__more"
            htmlFor="read-more-toggle"
          >
            Read more
          </label>
          <label
            className="main-content__description__hide"
            htmlFor="read-more-toggle"
          >
            Hide
          </label>
        </div>
      </section>

      <footer className="footer-section">
        <img
          className="footer-section__spacecraft"
          src={spacecraftImg}
          alt="spacecraft image"
        />
        <h3 className="footer-section__title">Exciting space adventure!</h3>
      </footer>
    </div>
  );
}

export default App;

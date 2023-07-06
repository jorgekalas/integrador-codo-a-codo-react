import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { GlobalContext } from "../utils/global.context";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faBars } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import Dropdown from "react-bootstrap/Dropdown";

const NavBar = () => {
	const { toggleTheme, isDarkMode } = useContext(GlobalContext);

	const onChangeTheme = () => {
		toggleTheme();
	};

	return (
		<header>
			<Navbar
				sticky="top"
				expand="sm"
				className={`p-4 navBar ${
					isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
				}`}
			>
				<Container>
					<Link to="/home" className="navbar-brand">
						<div>
							<img
								src="https://raw.githubusercontent.com/jorgekalas/doctor-images/main/logo.png"
								alt="logo"
								className="image-logo-navbar"
							/>
							<span className="title-header">Sistema de gestión de médicos</span>
						</div>
					</Link>
					<Nav className="me-auto text-center navigation-desktop">
						<ul className="navbar-nav mb-2 mb-sm-0 ms-4 ul-navbar">
							<li className="nav-item">
								<Link to="/home" className="nav-link">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/contact" className="nav-link">
									Contacto
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/favs" className="nav-link">
									Favoritos
								</Link>
							</li>
						</ul>
					</Nav>

					<Dropdown className="dropdown-mobile-tablet-button" >
							<Dropdown.Toggle size="lg" >
								<FontAwesomeIcon icon={faBars} />
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<div>
									<Dropdown.Item href="/home">Home</Dropdown.Item>
									<Dropdown.Item href="/favs">Favoritos</Dropdown.Item>
									<Dropdown.Item href="/contact">Contacto</Dropdown.Item>
								</div>
							</Dropdown.Menu>
						</Dropdown>


					<Button
						className="themeButton"
						onClick={onChangeTheme}
						variant="secondary"
						style={{ width: "3rem", height: "3rem", borderRadius: "50%" }}
					>
						

						{isDarkMode ? (
							<FontAwesomeIcon
								icon={faSun}
								size="lg"
								style={{ color: "#FFD700" }}
							/>
						) : (
							<FontAwesomeIcon
								icon={faMoon}
								size="lg"
								style={{ color: "#FFD700" }}
							/>
						)}
					</Button>
				</Container>
			</Navbar>
		</header>
	);
};

export default NavBar;

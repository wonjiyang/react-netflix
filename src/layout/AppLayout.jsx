import { useEffect, useState, useRef } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Container, Navbar, Nav, Form } from 'react-bootstrap';
import { Search, Bell } from 'react-bootstrap-icons';
import './AppLayout.style.css';

function AppLayout() {
  const [showBackground, setShowBackground] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const searchRef = useRef(null);
  const notificationRef = useRef(null);

  // 🔹 스크롤 시 Navbar 배경색 변경
  useEffect(() => {
    const handleScroll = () => setShowBackground(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🔹 검색창 토글
  const toggleSearch = () => {
    setShowSearch(!showSearch);
    setShowNotifications(false);
  };

  // 🔹 알림 토글
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setShowSearch(false);
  };

  // 🔹 검색창 외 클릭 시 자동 닫힘
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
      }
      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target)
      ) {
        setShowNotifications(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div>
      <Navbar
        expand="lg"
        className={`netflix-navbar fixed-top ${
          showBackground ? 'scrolled' : ''
        }`}
        variant="dark"
      >
        <Container fluid>
          {/* 🔹 로고 */}
          <Navbar.Brand as={Link} to="/" className="netflix-logo">
            <img
              src="/logo.png"
              alt="Netflix Logo"
              className="netflix-logo-img"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 netflix-nav" navbarScroll>
              <Nav.Link as={Link} to="/">
                홈
              </Nav.Link>
              <Nav.Link as={Link} to="/movies">
                영화
              </Nav.Link>
              <Nav.Link as={Link} to="/series">
                시리즈
              </Nav.Link>
              <Nav.Link as={Link} to="/mylist">
                내가 찜한 콘텐츠
              </Nav.Link>
            </Nav>

            <Form className="d-flex align-items-center">
              {/* 🔍 검색 */}
              <div className="search-container" ref={searchRef}>
                <Search
                  className="netflix-search-icon"
                  size={20}
                  onClick={toggleSearch}
                />
                {showSearch && (
                  <input
                    type="text"
                    className="netflix-search-input"
                    placeholder="콘텐츠, 장르, 배우 검색..."
                    autoFocus
                  />
                )}
              </div>

              {/* 🔔 알림 */}
              <div className="notification-container" ref={notificationRef}>
                <Bell
                  className="netflix-bell-icon"
                  size={22}
                  onClick={toggleNotifications}
                />
                {showNotifications && (
                  <div className="notification-dropdown">
                    <p>새 알림이 없습니다.</p>
                  </div>
                )}
              </div>

              {/* 👤 프로필 자리 */}
              <div className="netflix-profile"></div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="content-wrapper">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;

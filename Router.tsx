
import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage';

const Router: React.FC = () => {
  // State now holds the full hash, e.g., '#/contact' or '#features'
  const [route, setRoute] = useState(() => window.location.hash || '#');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    // Centralized scroll handling based on route changes
    const path = route.slice(1); // Remove leading '#' -> e.g., '/contact' or 'features'

    if (path.startsWith('/')) {
      // It's a page change, scroll to the top of the page.
      window.scrollTo(0, 0);
    } else if (path) {
      // It's an anchor link on the homepage.
      const element = document.getElementById(path);
      if (element) {
        // We give a slight timeout to ensure the HomePage component has rendered the element
        setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
       // It's the root path ('#'), scroll to top.
       window.scrollTo(0, 0);
    }
  }, [route]); // This effect runs every time the route changes

  const getPageComponent = () => {
    const path = route.slice(1); // e.g., '/contact' or 'features'

    if (path.startsWith('/')) {
      const pageRoute = path.split('?')[0]; // Handle query params
      switch (pageRoute) {
        case '/signup':
          return <SignUpPage />;
        case '/login':
          return <LoginPage />;
        case '/contact':
          return <ContactPage />;
        default:
          // Fallback for any unknown '/...' route is the HomePage
          return <HomePage />;
      }
    }
    // Any other hash that doesn't start with '/' is an anchor on the HomePage
    return <HomePage />;
  };

  return getPageComponent();
};

export default Router;

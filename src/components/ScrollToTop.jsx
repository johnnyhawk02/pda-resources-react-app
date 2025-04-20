import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top only when the pathname changes
    // This prevents scrolling on hash changes within the same page
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency array ensures effect runs only on pathname change

  return null; // This component doesn't render anything
} 
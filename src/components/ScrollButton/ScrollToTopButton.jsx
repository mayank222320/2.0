import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300); // Show after 300px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 hover:bg-blue-700 ${
        showButton ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Scroll to Top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

export default ScrollToTopButton;

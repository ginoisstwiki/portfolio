import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../components/header.css';
import '../components/hero.css';
import '../components/about.css';
import '../components/featured.css';
import '../components/work.css';
import '../components/contact.css';
import '../components/footer.css';
import '../components/mobile-nav.css';
import '../styles/utils.css';

import mobileNav from './utils/mobile-nav';
import darkMode from './utils/dark-mode';
import lazyLoading from './utils/lazy-loading';

mobileNav();
darkMode();
lazyLoading();

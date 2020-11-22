// import { useEffect, useState, useRef } from 'react';

// function useSticky() {
//      const [sticky, setSticky] = useState(false);
//      const stickyRef = useRef();

//      const handleScroll = () => {
//           if (stickyRef.current && typeof window !== 'undefined') {
//                window.pageYOffset >
//                stickyRef.current.getBoundingClientRect().bottom
//                     ? setSticky(true)
//                     : setSticky(false);
//                console.log(
//                     window.pageYOffset,
//                     stickyRef.current.getBoundingClientRect().bottom
//                );
//           }
//      };

//      // This function handles the scroll performance issue
//      const debounce = (func, wait = 2, immediate = true) => {
//           let timeOut;
//           return () => {
//                let context = this,
//                     args = arguments;
//                const later = () => {
//                     timeOut = null;
//                     if (!immediate) func.apply(context, args);
//                };
//                const callNow = immediate && !timeOut;
//                clearTimeout(timeOut);
//                timeOut = setTimeout(later, wait);
//                if (callNow) func.apply(context, args);
//           };
//      };

//      useEffect(() => {
//           window.addEventListener('scroll', debounce(handleScroll));
//           return () => {
//                window.removeEventListener('scroll', () => handleScroll);
//           };
//      }, [debounce, handleScroll]);

//      return { sticky, stickyRef };
// }

// export default useSticky;

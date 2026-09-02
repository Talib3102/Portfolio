import { useEffect, useRef, useState } from "react";

/** Mount expensive visuals only while they are close enough to be seen. */
const useInViewport = (rootMargin = "200px") => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin]);

  return [ref, isVisible];
};

export default useInViewport;

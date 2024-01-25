import { RefObject, useEffect, useState } from "react";

export function useIsVisible(ref: RefObject<HTMLElement | null>): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const handleIntersection: IntersectionObserverCallback = ([entry]) => {
      setIntersecting(entry.isIntersecting);
    };

    const observer = new IntersectionObserver(handleIntersection);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isIntersecting;
}
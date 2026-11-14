import { useEffect } from "react";
import { useLocation } from "react-router";

export function RouteNavigation() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document
        .getElementById(decodeURIComponent(hash.slice(1)))
        ?.scrollIntoView();
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.getElementById("conteudo")?.focus({ preventScroll: true });
    }
  }, [pathname, hash]);

  return null;
}

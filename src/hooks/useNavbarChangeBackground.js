import { useEffect, useState } from "react";

export default function useNavbarChangeBackground() {
  const [isScrolled, setIscrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY > 80 ? setIscrolled(true) : setIscrolled(false)
    );
  });

  return isScrolled;
}

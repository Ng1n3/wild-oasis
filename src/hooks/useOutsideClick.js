import { useEffect, useRef } from "react";

export function useOutsideClick({ close, listeningCaputring = true }) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          console.log("clicked outside");
          close();
        }
      }
      document.addEventListener("click", handleClick, listeningCaputring);

      return () =>
        document.removeEventListener("click", handleClick, listeningCaputring);
    },
    [close, listeningCaputring]
  );

  return ref;
}

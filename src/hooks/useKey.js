import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(() => {
    function callback(event) {
      if (event.code.toLowerCase() === key.toLowerCase()) {
        action();
      }
    }

    document.addEventListener("keydown", callback);
    //cleaning event listener for avoid accumulating event listeners
    return function () {
      document.removeEventListener("keydown", callback);
    };
  }, [action, key]);
}

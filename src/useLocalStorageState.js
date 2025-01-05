import { useState, useEffect } from "react";

export function useLocalStorageState(key) {
  const [value, setValue] = useState(function () {
    let storedValue = localStorage.getItem(key);
    if (!storedValue) storedValue = "[]";
    return JSON.parse(storedValue);
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}

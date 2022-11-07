import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Book Shop | ${title}`;
  }, [title]);
};

export default useTitle;

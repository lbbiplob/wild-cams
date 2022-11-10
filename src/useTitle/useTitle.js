import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-WildCams`;
  }, [title]);
};

export default useTitle;

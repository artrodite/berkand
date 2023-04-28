import React, { useEffect } from "react";

export default function Product() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>product</div>;
}

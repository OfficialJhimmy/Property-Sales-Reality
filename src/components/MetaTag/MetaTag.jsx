import React from "react";
import Helmet from "react-helmet";

function MetaTag({ title }) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}

export default MetaTag;

import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      align="center"
      {...props}
      className="bg-[#007276] pb-2 text-white"
    >
      {"Copyright © "}
      <Link color="inherit" href="https://shopswift.netlify.com/">
        ShopSwift
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Copyright;

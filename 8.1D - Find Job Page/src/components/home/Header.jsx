import * as React from "react";

const headerImageStyle = {
  width: "100%",
  height: "50vh",
  objectFit: "cover",
};

export default function Header() {
  return (
    <div>
      <img
        src="https://number8.com/wp-content/uploads/2021/01/2021-software-development-salary-trends.png"
        alt=""
        style={headerImageStyle}
      />
    </div>
  );
}

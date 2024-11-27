import React from "react";
import Marquee from "react-fast-marquee";
const BreakingNews = () => {
  return (
    <div className="flex p-6 bg-slate-300 rounded-xl">
      <button className="btn btn-secondary">Latest</button>
      <Marquee pauseOnHover={true} speed={150}>
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as...
      </Marquee>
    </div>
  );
};

export default BreakingNews;

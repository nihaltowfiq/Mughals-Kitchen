import React from "react";

const Loading = () => {
  return (
    <div className="text-center p-5" style={{ minHeight: "85vh" }}>
      <span className="fa fa-spinner text-primary fa-4x fa-fw fa-pulse"></span>
    </div>
  );
};

export default Loading;

import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const QuesWrapper = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="ques_wrapper">
      <div className="ques">
        <h3>
          Velit venenatis pretium mattis consectetur massa pretium mattis ?
        </h3>
        <FiChevronDown
          style={{ fontSize: "30px", cursor: "pointer" }}
          onClick={() => setShow(!show)}
        />
      </div>
      {show && (
        <p className="ans">
          Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus
          nisl adipiscing posuere et a. Tincidunt consectetur sapien
          pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit
          massa felis, et. Cursus tortor ut fames sapien a vulputate amet
          malesuada.
        </p>
      )}
    </div>
  );
};

export default QuesWrapper;

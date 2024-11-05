import React from "react";
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "react-awesome-button/dist/themes/theme-red.css";


const Button = () => {
  return (
    <div className="">
      {/* <AwesomeButton type="primary">Primary</AwesomeButton> */}
      {/* <AwesomeButton type="primary" onPress={() => alert("Button clicked!")}>
        Click Me
      </AwesomeButton> */}

      <div>
        <AwesomeButton className="!my-5 text-red-500" type="primary" size="large">
          Primary Button
        </AwesomeButton>
        {/* <AwesomeButton type="secondary" size="medium">
          Secondary Button
        </AwesomeButton>
        <AwesomeButton type="link" size="small">
          Link Button
        </AwesomeButton> */}
      </div>
    </div>
  );
};

export default Button;

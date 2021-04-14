import React from "react";
import PropTypes from "prop-types";
import View from "views/romans/Execute";
import { usePost } from "seed/api"

function Execute(props) {
  const [callExecute, reqExecute] = usePost("/processes/decimal_to_roman", {
    onCompleted: (data) => alert("RESULT: " + JSON.stringify(data))
  })
  const onClick = () => {
    callExecute({
      decimal: 1,
      user_id: 1
    })
  }
  return <View
    onClick={onClick}
  />;
}

Execute.propTypes = {};

export default Execute;
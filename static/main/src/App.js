import React, { useEffect, useState } from "react";
import { invoke } from "@forge/bridge";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    invoke("getConfig", {}).then(setData);
  }, []);
  if (data) {
    return (
      <div>
        <SwaggerUI spec={data} docExpansion='none'/>
      </div>
    );
  }
  return <p>No Swagger file loaded.</p>;
}

export default App;

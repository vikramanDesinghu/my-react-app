import { useState } from "react";
import WelcomeComponent from "../Welcome/Welcome.component";

function BoardComponent() {
  const [user, setUser] = useState("Vikraman");
  function changeUser() {
    setUser(user + 1);
  }
  return (
    <div>
      Welcome all !!!
      <button onClick={changeUser}>change</button>
      <WelcomeComponent user={user} />
    </div>
  );
}
export default BoardComponent;

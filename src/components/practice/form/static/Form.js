import { useRef } from "react";

export function FormComponent() {
  const userNameRef = useRef();
  const passwordRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    console.log(userNameRef.current.value, passwordRef.current.value);
  }
  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
        <div>
          <label>
            User name: <input ref={userNameRef} type="text" name="username" />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input ref={passwordRef} type="password" name="password" />
          </label>
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}

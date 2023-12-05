import "./App.css";
import LoginForm from "./Components/LoginForm";
import Auth from "./Pages/auth";
function App() {
  return (
    <>
      <div className="">
        {/* <h1 className="font-Inter">Hello World!</h1> */}
        <Auth>
          <LoginForm />
        </Auth>
      </div>
    </>
  );
}

export default App;

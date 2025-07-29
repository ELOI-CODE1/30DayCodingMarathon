import './App.css'
function MyApp(){

  return(
  <>
 <fieldset>
    <legend>My Login</legend>
  <label htmlFor="">
    Email: <input type="text" placeholder="Enter in your name"/>
  </label><br/><br/>
  <label>Password: <input type="password" placeholder="Enter in your password"/></label><br/><br/>
  <button>Login</button>
  
 </fieldset>
  </>  );
}
export default MyApp;
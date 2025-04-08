import { Link } from "react-router-dom";

export default function Register(){
    return(
        <div> 
            <form >
                <h2>Registation Form</h2>
                <div>
                    <label > phone number</label>
                    <input type="tel" name="" id="" />
                    <label >password</label>
                    <input type="password" name="" id="" />
                    <button type="submit">submit</button>
                    <button type="reset">reset</button>
                    <Link to="">Click here to Register</Link>
                </div>
            </form>
        </div>
    )
}
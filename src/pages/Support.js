import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar'



    const Support = () => {
    const navigate = useNavigate()

    function clickHandler() {
        navigate("/Home")
    }
    function BackFunction() {
        navigate(-1);
    }


    return(
        <div>
            <div>

            <h1> IF PAYMENT FAILED PLEASE IMMEDIATLY CONTACT THROUGH --</h1>


            <div className="container">
            <p> *If any payment  <span className="highlight"> fails </span> or money is deducted from your bank 
            then there is no need to worry, please visit 3rd floor and file your complaint. or contatct -----</p>

            <p> *Contact =<span> +91 8210310051</span></p>

            <p> *Email-  <span> adityajack8210@gmail.com </span> </p>
            </div>

        
            <Link to="/ComplaintForm" className="link">
                    Make a complaint 
                </Link>


            </div>
            <button onClick={clickHandler} 
            className="link">
                Move to Home page  
            </button>
            <br/>
            <br/>
            <button onClick={BackFunction}
            className="link">
            Back
            </button>
        </div>
    )
}


export default Support 
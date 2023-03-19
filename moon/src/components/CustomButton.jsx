
import React from "react";
import styles from "../styles/CustomButton.module.css";

class CustomButton extends React.Component {
    constructor(props){
        super(props)

    }
    render(){
        return(
        <div>
            <button
                className={styles.btn}
                >
                <div>
                <h1>{this.props.textOne}</h1>
                </div>
                <div>
                <h2>{this.props.textTwo}</h2>
                </div>
            </button>
        </div>
            

        );
    }
};

export default CustomButton;


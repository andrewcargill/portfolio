
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
                {this.props.textOne}
                </div>
                <div>
                {this.props.textTwo}
                </div>
            </button>
        </div>
            

        );
    }
};

export default CustomButton;


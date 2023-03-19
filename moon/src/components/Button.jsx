import React from "react";
import styles from "../styles/CustomButton.module.css";

class Button extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
        <div>
            <h1 className={styles.color}>Button Module</h1>
        </div>

        );
    }
};

export default Button;


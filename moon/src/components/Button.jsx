import React from "react";
import styles from "../styles/CustomButton.module.css";

class CustomButton extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
        <div className={styles.all}>
            <div id={styles.container}>
                <div>
                <h1>Button Module</h1>
                </div>
                <div>
                <h2>Only this</h2>
                </div>
            </div>
        </div>

        );
    }
};

export default CustomButton;


import React from 'react';

const validation = (props) => {
    let validationMessage = "Tekst wystarczająco długi";

    if (props.inputLength <= 5 ){
        validationMessage = "Tekst za krótki";
    }
    return (
        <div>
            <p>{validationMessage}</p>
            {/* {
                props.inputLength > 5 ?
                    <p>Tekst wystarczająco długi</p> :
                    <p>Tesk za krótki!</p>
            } */}
        </div>
    );
}

export default validation;
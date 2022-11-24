import React, {useState, useEffect} from 'react';

const Title = props => {

    const [textTitle, settextTitle] = useState("");

    useEffect(() => {
        animateText("Welcome to the shifumi game !");
    }, []);

    const animateText = (text) => {
        const splittedText = text.split(""); // ['b', 'o']
        let currentText = "";
        let index = 0;
        const anim = setInterval(() => {
            currentText += splittedText[index];
            settextTitle(currentText);
            if (currentText.length === splittedText.length) {
                clearInterval(anim);
            } 
            index++;    
        }, 100);
    }

    return (
        <div className="TitleGame">
            {textTitle}
        </div>
 


    );
}

export default Title;
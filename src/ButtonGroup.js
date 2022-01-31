import React from "react";
import {store} from "./store";
import {setTechnology} from "./actions";

const ButtonGroup = ({technologies}) => (
    <div>
        {technologies.map((tech, i) => (
            <button
                //the tech of the button is grabbed from the dataset of the button
            data-tech={tech}
            key={`btn-${i}`}
            className="hello-btn"
            onClick={dispatchBtnAction}
            >
                {tech}
            </button>
        ))}
    </div>
);

function dispatchBtnAction(e) {
    // e.target.dataset.tech will get the data attribute set on the button, data-tech
    const tech = e.target.dataset.tech;
    store.dispatch(setTechnology(tech));
}

export default ButtonGroup


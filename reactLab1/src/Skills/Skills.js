import React from "react";
import "./Skills.css";

class Skills extends React.Component {
    constructor() {

        super();

    }

    render() {

        let Courses = [
            { courseName: "css5", progress: 80 },
            { courseName: "css", progress: 60 },
            { courseName: "DB", progress: 55 },
            { courseName: "html", progress: 30 },
            { courseName: "html5", progress: 75 },
            { courseName: "js", progress: 40 }
        ]

        return (
            <>
                <div className="fluid-container skill text-white">
                    <div className="text-center">
                        <h2 className="fs-1 head">Skills</h2>
                    </div>
                    <div className="row">
                        <div className="offset-2 col-8 fw-light text-center">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged.
                            </p>
                        </div>
                    </div>

                    <div className="row p-3">
                        <div className="offset-1 fw-light col-4 text-center">
                            <h4 className="fw-light">MY FOCUS</h4>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">FULL STACK</li>
                                <li className="list-group-item">BACK END</li>
                                <li className="list-group-item">WEB DESIGN</li>
                                <li className="list-group-item">FRONT END</li>
                                <li className="list-group-item">WEB DEVELOPMENT</li>
                            </ul>
                        </div>

                        <div className=" col-7 ">
                            {Courses.map((item) => {
                                return (
                                    <div className="progress mt-2 ">
                                        <div
                                            className="progress-bar "
                                            role="progressbar"
                                            style={{ width: `${item.progress}%` }}
                                            aria-valuenow={item.progress}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ><span className="cor">{item.courseName}</span></div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Skills
const content = (
    <div>
        <p>
            Welcome to the MDN learning area. This set of articles aims to guide complete
            beginners to web development with all that they need to start coding websites.
        </p>
        <br/>
        <p>
            The aim of this area of MDN is not to take you from "beginner" to "expert" but to
            take you from "beginner" to "comfortable". From there you should be able to start
            making your way, learning from the {" "}
            <a
            href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started"
            target="_blank"
            >
                rest of MDN
            </a>
            , and other intermediate to
            advanced resources that assume a lot of previous knowledge.
        </p>
        <br/>
        <p>
            If you are a complete beginner, web development can be challenging - we will hold
            your hand and provide enough detail for you to feel comfortable and learn the topics
            properly. You should feel at home whether you are a student learning web
            development (on your own or as part of a class), a teacher looking for class
            materials, a hobbyist, or someone who just wants to understand and more about how
            web technologies work.
        </p>
    </div>
);

const mainContainer = (
    <div className="mainContainer">
        <div>
            <h2>Learn web development</h2>
        </div>
        <div className="content">{content}</div>
    </div>
);

ReactDOM.render(mainContainer, document.getElementById("root"));

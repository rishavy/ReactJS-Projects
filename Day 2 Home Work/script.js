const h1 = React.createElement("h1",{},"Topics covered");

const p1 = React.createElement("p",{ style: { marginLeft: '0' } },"The following is a list of all the topics we cover in the MDN learning area.");

const a1 = React.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web"},"Getting started with the web");

const p2 = React.createElement("p",{},"Provides a partical introduction to web devlopment for complete beginners.");

const a2 = React.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Learn/HTML"},"HTML -- Structuring the web");

const p3 = React.createElement("p",{},"HTML is the language that we use to structure the diffrent parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.");

const a3 = React.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS"},"CSS -- Styling the web");

const p4 = React.createElement("p",{},"CSS is the language that we use to control our web content's style and layout, as well as adding behaviour like animation. This topic provides comprehensive coverage of CSS");

const div = React.createElement("div",{},[h1,p1,a1,p2,a2,p3,a3,p4]);

ReactDOM.render(div, document.querySelector("#root"));
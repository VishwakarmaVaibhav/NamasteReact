const Parent = React.createElement("div", {id: "Parent"} , [
         React.createElement("div", {id:"Child"} ,
           [
            React.createElement("h1", {id:"hello"} , "Hello world!"),
            React.createElement("h2", {} , "This is a paragraph.")]),
        React.createElement("div", {id:"Child2"} ,
            [
             React.createElement("h1", {} , "Hello world!"),
             React.createElement("h2", {} , "This is a paragraph.")]
            )]

);

const data = fetch('https://mocki.io/v1/139173c5-e6c2-4fd4-87c5-176f3b593cfd')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));





const root = ReactDOM.createRoot(document.getElementById("HEAD"));

root.render(Parent);
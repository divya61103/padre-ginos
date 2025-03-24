const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "my first Pizza",
      description: "my fav pizzzaa",
    }),
    React.createElement(Pizza, {
      name: "my first Pizza",
      description: "my fav pizzzaa",
    }),
    React.createElement(Pizza, {
      name: "my second Pizza",
      description: "yolo pizza",
    }),
    React.createElement(Pizza, {
      name: "my third Pizza",
      description: "my yolo",
    }),
    React.createElement(Pizza, {
      name: "my fourth Pizza",
      description: "my okay pizzzaa",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));

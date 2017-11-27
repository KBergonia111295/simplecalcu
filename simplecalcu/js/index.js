"use strict";

var EntryList = function EntryList(props) {
  return React.createElement(
    "div",
    { className: "row" },
    React.createElement(
      "div",
      { className: "large-12 columns" },
      React.createElement(
        "ul",
        null,
        props.items.map(function (itemText, index) {
          return React.createElement(
            "li",
            { key: index + itemText },
            itemText
          );
        })
      )
    )
  );
};

var CalculateApp = React.createClass({
  displayName: "CalculateApp",
  getInitialState: function getInitialState() {
    return { items: [], text: '' };
  },
  onChange: function onChange(e) {
    this.setState({ text: e.target.value });
  },
  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    var value = this.state.text;
    var entry = value + ' = ' + eval(value);
    var nextItems = this.state.items;
    var nextText = '';
    this.state.items.unshift(entry);
    this.setState({ items: nextItems, text: nextText });
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "div",
        { className: "large-12 columns" },
        React.createElement(
          "h3",
          null,
          "Calculate"
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleSubmit.bind(this) },
          React.createElement(
            "div",
            { className: "input-group" },
            React.createElement("input", { className: "input-group-field", type: "text", onChange: this.onChange.bind(this), value: this.state.text }),
            React.createElement(
              "div",
              { className: "input-group-button" },
              React.createElement(
                "button",
                { className: "button", type: "submit" },
                "Submit"
              )
            )
          )
        ),
        React.createElement(EntryList, { items: this.state.items })
      )
    );
  }
});

ReactDOM.render(React.createElement(CalculateApp, null), document.getElementById('app'));
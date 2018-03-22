
jest.mock('Text', () => {
    console.log("Text setup mocks")
    const RealComponent = require.requireActual('Text');
    const React = require('React');
    class Text extends React.Component {
      render() {
        console.log("MOCK TEXT***")
        return React.createElement('native-text', this.props, this.props.children);
      }
    }
    Text.propTypes = RealComponent.propTypes;
    return Text;
  });


jest.mock('View', () => {
    const RealComponent = require.requireActual('View');
    const React = require('React');
    class View extends React.Component {
      render() {
        return React.createElement('native-view', this.props, this.props.children);
      }
    }
    View.propTypes = RealComponent.propTypes;
    return View;
  });

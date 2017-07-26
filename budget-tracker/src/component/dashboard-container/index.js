import React from 'react';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log('app', this.props.app);
  }
  render() {
    return (
      <div>
        <p>Hello Dashboard</p>
      </div>
    );
  }
}

export default DashboardContainer;

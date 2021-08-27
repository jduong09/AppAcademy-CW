import React from 'react';

class Headers extends React.Component {
  render() {
    const selected = this.props.selectedPane;
    const headers = this.props.panes.map((pane, index) => {
      const title = pane.title;
      const klass = index === selected ? 'active' : '';

      return (
        <li 
          key={index}
          className={klass}
          onClick={() => this.props.onTabChosen(index)}>
          {title}{" "}
        </li>
      );
    });
    return (
      <ul className='tab-header'>
        {headers}
      </ul>
      
    );
  }
}

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      selectedTabIdx: 0 
    };

    this.setTabIdx = this.setTabIdx.bind(this);
  }

  setTabIdx(num) {
    this.setState({selectedTabIdx: num});
  }
  
  render() {
    const pane = this.props.panes[this.state.selectedTabIdx];

    return (
      <div>
        <h1>Tabs</h1>
        <div className='widget-tabs'>
          <Headers 
            selectedPane={this.state.selectedTabIdx}
            onTabChosen={this.setTabIdx}
            panes={this.props.panes}>
          </Headers>
          <div className="tab-content">
            <article>
              {pane.content}
            </article>
          </div>
        </div>
      </div>
    )
  }
}

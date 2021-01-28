import React, { Component } from 'react'

class todoViewer extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
       
      };
    };
    
    render() {
        return (
            
            <div>
                <div className="container py-4">
                    <h3>Detailed Summary</h3>
                    <hr />
                    <ul className="list-group w-50">
                        <li className="list-group-item">Task: {this.props.data[this.props.id].title}</li>
                        <li className="list-group-item">Total Time: {this.props.data[this.props.id].time}</li>
                        <li className="list-group-item">Description: {this.props.data[this.props.id].description}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default todoViewer;

import React from 'react';

// class AvailableDice extends Component {    
//     constructor(props) {
//         super(props);

//         this.state = { sides: props.sides };
//         this.onRollClick = this.onRollClick.bind(this);
//     }

//     onRollClick() {
//         console.log(this.props)
//         this.props.handleRoll()
//     }

//     render() {
//         return (
//             <div onClick={this.onRollClick()} >{this.state.sides}
//             </div>      
//         );
//     }
// }

const AvailableDice = ({sides, handleRoll}) => {
    return (
        <li 
        className="list-group-item die"
        onClick={() => handleRoll(sides)}>d{sides}</li>
    )
};

export default AvailableDice;
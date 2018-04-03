import React from 'react';

class Stateful extends React.Component {
   constructor() {
      super();
      this.state = {
         data: 
         [
            {
               "id":1,
               "name":"abc",
               "age":"20"
            },
            {
               "id":2,
               "name":"xyz",
               "age":"30"
            },
            {
               "id":3,
               "name":"pqr",
               "age":"40"
            }
         ]
      }
   }
   render() {
      return (
         <div>
          
            <table>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} 
                     data = {person} />)}
               </tbody>
            </table>
         </div>
      );
   }
}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}
export default Stateful;
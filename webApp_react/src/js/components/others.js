import React from "react";


export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
      items: [],
      mehritems: [ 1, 2, 3, 4, 5 ],
      isLoading: false
    };
  }

  componentDidMount() {
    this.reloadData();
  }

  changeTitle( newTitle ) {
    this.setState( {
      title: newTitle
    } );
  }



  postData() {

    var url = `http://localhost:3000/score/user/new`;
    var data = {
      firstname: 'Draco',
      lastname: 'Malfoy',
      nickname: 'mally',
      passowrd: 'hugigui',
      score: 0
    };

    fetch( url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify( data ), // data can be `string` or {object}!
        headers: {
          'Content-Type': 'application/json'
        }
      } ).then( res => res.json() )
      .catch( error => console.error( 'Error:', error ) )
      .then( response => console.log( 'Success:', response ) );

  }


  render() {




    return ( <
      div >
      <
      button onClick = {
        this.postData.bind( this )
      } > post < /button> <
      button onClick = {
        this.reloadData.bind( this )
      } > get < /button>


      <
      /div>
    );
  }
}
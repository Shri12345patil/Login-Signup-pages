import React, { Component } from 'react';

class myComponent extends Component {
  constructor(props){
      super(props);
      this.state = {
          error : null,
          isLoaded : false,
          posts : []          
      };
  }
  componentDidMount(){
    // I will use fake api from jsonplaceholder website
    // this return 100 posts 
    fetch("http://127.0.0.1:5000/api/books/all")
    .then( response => response.json())
    .then(
        // handle the result
        (result) => {
            this.setState({
                isLoaded : true,
                posts : result
            });
        },

        // Handle error 
        (error) => {
            this.setState({
                isLoaded: true,
                error
            })
        },
    )
}
render() {
  const {error, isLoaded, posts} = this.state;

  if(error){
      return <div>Error in loading</div>
  }else if (!isLoaded) {
      return <div>Loading ...</div>
  }else{
      return(
          <div>
              <ol className="item">
              {
                  posts.map(post => (
                      <li key={post.id} align="start">
                          <div>
                              <p className="title">{post.username}</p>
                              <p className="body">{post.password}</p>
                          </div>
                      </li>
                  ))
              }
              </ol>
          </div>
      );
  }

}
}
export default myComponent;
import React from 'react';
import Nav from './Nav';
import Intro from './Intro';
import Skills from './Skills';

//main page that combine all the subcomponent
class Index extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
  
  }

  render(){
    return(
      <div>
        <Nav />
        <Intro />
        <Skills />
      </div>
    );
  }
};

export default Index;
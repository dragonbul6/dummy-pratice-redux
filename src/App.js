import React from 'react'
import { connect } from 'react-redux';
import {fetchApi} from './js/actions/index'
 
class App extends React.Component{
  
  componentDidMount(){
    this.props.fetchData('http://localhost:3010/api/')
  }
  
  
  render(){
    return(
      <div className="row mt-5">
      <div className="col-md-4 offset-md-1">
        <h2>List of Employee</h2>
        <ul className="list-group list-group-flush">
                {this.props.items.map((item) => (
                    <li className="list-group-item" key={item.id}>
                        {item.first_name} {item.last_name} {item.email} {item.gender}
                    </li>
                ))}
            </ul>
      </div>

    </div>
    )
   
  }
}

const mapStatetoProps = (state) => {
  if(state.items){
    return {items : state.items}
  }else{
    return {items:[]}
  }
  
}

const mapDispatchtoProps = (dispatch) => {
  return {
    fetchData : (url) => dispatch(fetchApi(url))
  
}
}



export default connect(mapStatetoProps,mapDispatchtoProps)(App)

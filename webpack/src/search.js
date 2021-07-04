import React from 'react'
import ReactDOM from 'react-dom'
import './search.less'
import logo from './img/react.jpeg'

class Search extends React.Component {
    render() {
        return (
            <div>
                <img src={logo}></img>
                <div className="search-text">Sddearch Text</div>
            </div>
        )
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
)
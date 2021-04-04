import React, { Component } from 'react'
import "./wallpaper.scss";

class Wallpaper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image: ''
    }
  }
  imageClick = (e) => {
    console.log(e)
    this.setState({
      image: e.target.currentSrc

    })
  }


  render() {
    return (
      <div>
        <div className="row">
          <div className="column">

            <div className="card1">
              <img src={this.state.image}></img>
            </div>

          </div>
        </div>
        <div>
          <div className="row">
            <div className="column">

              <img src="https://m.media-amazon.com/images/I/61Mbp0zDbPL._AC_UL320_.jpg" onClick={(e) => this.imageClick(e)} className="card" alt=""></img>
            </div>
            <div className="column">
              <img src="https://m.media-amazon.com/images/I/61fHJ9+1IWL._AC_UL320_.jpg" className="card" onClick={(e) => this.imageClick(e)} alt=""></img>
            </div>
            <div className="column">
              <img src="https://m.media-amazon.com/images/I/61TRiUGmsLL._AC_UL320_.jpg" className="card" onClick={(e) => this.imageClick(e)} alt=""></img>
            </div>

          </div>
        </div>

      </div>
    )
  }
}

export default Wallpaper;
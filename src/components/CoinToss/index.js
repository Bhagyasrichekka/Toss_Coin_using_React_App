// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    total: 0,
    heads: 0,
    tails: 0,
  }

  tossTheCoin = () => {
    const result = Math.floor(Math.random() * 2)
    if (result === 0) {
      this.setState(prevState => ({
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        total: prevState.total + 1,
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState(prevState => ({
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
        total: prevState.total + 1,
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {imgUrl, total, heads, tails} = this.state

    return (
      <div className="bg">
        <div className="card">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img className="toss-img" src={imgUrl} alt="toss result" />
          <button className="toss-btn" onClick={this.tossTheCoin} type="button">
            Toss Coin
          </button>
          <div className="items">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss

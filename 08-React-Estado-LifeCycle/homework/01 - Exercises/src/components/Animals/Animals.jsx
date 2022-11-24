import React from 'react'

export default class Animals extends React.Component {
  constructor (props) {
    super()
  }

  render() {
    const { animals } = this.props
    return <div>

      {animals.map((e, ind) => (
        
        <div key={ind} >   
          <h5>{e.name}</h5>
          <img src={e.image} alt={e.name} width="300px" />
          <span>{e.specie}</span>

      </div>))}

    </div>
  }
}

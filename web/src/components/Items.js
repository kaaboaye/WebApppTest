import React, { Component } from 'react'
import api from 'superagent'
import { URL } from '../ApiConf'

import Item from './Item'

class Items extends Component {
  constructor(props) {
    super(props)
    this.updateItems = this.updateItems.bind(this)
    this.nameChanged = this.nameChanged.bind(this)
    this.addItem = this.addItem.bind(this)

    this.state = {
      name: "Nazwa",
      items: []
    }

    this.updateItems()
  }

  updateItems()
  {
    api
      .get(URL + 'items')
      .end((err, res) => {
        if (err) console.error(err)

        this.setState({items: res.body})
      })
  }

  nameChanged(e)
  {
    this.setState({name: e.target.value})
  }

  addItem(e)
  {
    api
      .post(URL + 'items')
      .send({name: this.state.name})
      .end((err, res) => {
        if (err) console.error(err)

        this.updateItems()
      })
  }

  render() {
    return (
      <div>
        <input type="text" value={ this.state.name } onChange={ this.nameChanged } />
        <input type="button" value="Dodaj" onClick={ this.addItem } />

        <ul>
          {this.state.items.map(item => <Item
            onChange={ this.updateItems }
            key={ item._id }
            id={ item._id }
            name={ item.name }
            />)}
        </ul>
      </div>
    );
  }
}

export default Items;

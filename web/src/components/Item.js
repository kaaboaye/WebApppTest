import React, { Component } from 'react'
import api from 'superagent'
import { URL } from '../ApiConf'

class Item extends Component {
  constructor(props) {
    super(props)

    this.delItem = this.delItem.bind(this)
  }

  delItem(e)
  {
    api
      .delete(URL + 'items/' + this.props.id)
      .end((err, res) => {
        if (err) console.error(err)

        this.props.onChange()
      })
  }

  render() {
    return (
      <ul onClick={ this.delItem }>
        Jakiś item: { this.props.name }
      </ul>
    );
  }
}

export default Item;

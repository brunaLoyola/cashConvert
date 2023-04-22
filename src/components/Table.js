import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <>
        <div>Table</div>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        {expenses.map((item) => {
          const { exchangeRates, currency } = item;
          return (
            <tbody key={ item.id }>
              <tr key={ item.id }>
                <td>{item.id}</td>
                <td>{item.description}</td>
                <td>{item.tag}</td>
                <td>{item.method}</td>
                <td>{Number(item.value).toFixed(2)}</td>
                <td>{exchangeRates[currency].name}</td>
                <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                <td>{(item.value * exchangeRates[currency].ask).toFixed(2)}</td>
                <td>
                  <button
                    data-testid="delete-btn"
                  >
                    Deletar

                  </button>
                  <button data-testid="edit-btn">Editar</button>

                </td>
              </tr>
            </tbody>
          );
        })}

      </>

    );
  }
}
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,

});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};
export default connect(mapStateToProps)(Table);

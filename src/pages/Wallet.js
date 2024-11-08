import React from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import '../css/wallet.css';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    return (
      <div className="wallet-container">
        <Header />
        <WalletForm />
        <Table />
      </div>
    );
  }
}

export default Wallet;

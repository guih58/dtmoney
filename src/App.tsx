import Modal from 'react-modal'
import { useState } from 'react';
import { Header } from "./components/Header";
import { Dashborad } from "./components/Dashboard";
import { GlobalStyle } from "./styles/globais";
import { NewTransactionModal } from './components/NewTransactionModal';
import {  TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true)
  }
  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false)
  }
  return (
  
    <TransactionsProvider>
    <Header onOpenNewTrasactionModal={handleOpenNewTransactionModal} />
    <Dashborad/>
    
    <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}></NewTransactionModal>
    <GlobalStyle> </GlobalStyle>
    </TransactionsProvider>
  );
}



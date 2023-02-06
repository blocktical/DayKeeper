import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Header from '../UIComponents/header'
import Web3 from 'web3';
import {SECRET_DIARY_CONTRACT_ADDRESS, ABI} from './../contractConfig'


export default function () {

  const [heading, setHeading] = useState('')
  const [context, setContext] = useState('')
  const [account, setAccount] = useState();
  const [contractList, setContractList] = useState();

  useEffect(()=>{
    async function load() {
      const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
      const accounts = await web3.eth.requestAccounts(); // list of metamask accounts
      setAccount(accounts[0]);
      const _contractList = new web3.eth.Contract(ABI,SECRET_DIARY_CONTRACT_ADDRESS);
      setContractList(_contractList);
    }
    load()
  }, [])

  const getDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '/' + mm + '/' + yyyy;

    return formattedToday
  }

  const onSubmitButton = () => {
    console.log("This is Heading - ", heading)
    console.log("This is Context - ", context)
    console.log(account, ' --- ' ,contractList)
    // heading + context + date 
      // pass to the smart contract
      // check my provider is connected or not
      // ask metamask to sign my article with its private key <= which is stored in the metamask
      // i will call the method of the smart contract to write diary
      let date = getDate()
      contractList.methods.writeDaySummary(date, heading, context).send({from: account})
      .on('transactionHash', function(hash){
          console.log('Thi is the Transaction Hash', hash)
      })
      .on('receipt', function(receipt){
        console.log('Thi is the Transaction receipt', receipt)
        setContext('')
        setHeading('')
      })
      .on('confirmation', function(confirmationNumber, receipt){
        console.log('Thi is the Transaction confirmationNumber', confirmationNumber)
      })
      .on('error', function(error, receipt) {
        console.log('Thi is the Transaction error', error)
      });
  }

  return (
    <div style={{backgroundColor:'black', height:'100vh'}}>
      <Header />
        {/* Day Heaing - Input - Text */} 
        {/* Current Date - Automatic Picker - Display Only */}
        <div>
          <InputGroup className="mb-3" style={{paddingTop:'2vh'}}>
            <InputGroup.Text id="basic-addon3">
              {getDate()}
            </InputGroup.Text>
            <Form.Control 
              id="basic-url" 
              placeholder='Write Day Heading' 
              aria-describedby="basic-addon3" 
              value={heading}
              onChange={e => setHeading(e.target.value)}
            />
          </InputGroup>
        </div>
        {/* Day Content - Input - Text */}
        <InputGroup style={{paddingBottom:'2vh'}}>
          <Form.Control 
            as="textarea" 
            rows={25} 
            placeholder='Write your Day Summary Here' 
            aria-label="Write your Day Summary Here" 
            value={context}
            onChange={e => setContext(e.target.value)}
          />
        </InputGroup>
        {/* Submit Button */}
        <Button style={{width:'100%'}} onClick={onSubmitButton}>Submit</Button>
    </div>
  )
}

import 'antd/dist/antd.css';
import React, { useState, useEffect } from 'react';
import { endpoints } from '../../endpoints/endpoints'

function Confirmation(props) {
  
  const params = new URLSearchParams(props.location.search);
  const ref_payco = params.get('ref_payco');

  useEffect(() => {    
    console.log('confir', ' fetching data');
    async function fetchData() {

      await endpoints.bookingRequest.putBooking({
        "payment": {
          "id": ref_payco,        
        },
      });      
    };
    fetchData();
}, []);


  return (
    <div style={{
      backgroundColor: '#282c34',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      color: 'white',
    }}>
      <text>Pago confirmado</text> 
      </div>
  );
}

export default Confirmation;
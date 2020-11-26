import 'antd/dist/antd.css';
import React, { useState, useEffect } from 'react';
import { endpoints } from '../../endpoints/endpoints'

function Confirmation(props) {
  
  const params = new URLSearchParams(global.location.search)
  const ref_payco = params.get('ref_payco');

  useEffect(() => {    
    async function fetchData() {

      await endpoints.bookingRequest.putBooking({
        "payment": {
          "id": ref_payco,        
        },
      });      
    };
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
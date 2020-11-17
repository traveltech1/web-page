import 'antd/dist/antd.css';
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker, Row, Col } from 'antd';
  import React, { useState, useEffect } from 'react';
import firstImg from '../../assets/images/pexelsphoto114251.jpeg';
import logo from '../../assets/images/logo.png';
import secondImg from '../../assets/images/pexelsphoto1367170.jpeg';
import ThirdImg from '../../assets/images/pexelsphoto1054289.jpeg';
import FourImg from '../../assets/images/pexelsphoto167684.jpeg';
import { endpoints } from '../../endpoints/endpoints'
import moment from 'moment';

const monthFormat = 'MM/YYYY';

function Payment() {
  const [componentSize, setComponentSize] = useState('large');
  const [host, setHost] = useState(null);

  useEffect(() => {
    async function fetchData() {
        const result = await endpoints.hosts.getHosts();
        setHost(result);
    };
    fetchData();
  }, []);

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <div className="App">
      <div style={{backgroundColor: '#f29720'}}>
        <h2 style={{ height: '100%', fontSize: 30, paddingInlineStart: 40, margin: 14, marginTop: 9, verticalAlign: 'center', color: 'white'}}>TravelTech</h2>
      </div>
      <div style={{backgroundImage: `url(${ThirdImg})`, backgroundSize: 'cover', height: 800, objectFit: 'fit', width: '100%'}}>
        <div style={{ height: '100%', paddingTop: '3%', paddingRight: '20%', paddingLeft: '20%'}}>
        <h2 style={{color: 'white', textShadow: 'rgb(143 143 143) 2px 2px 4px', textAlign: 'center', fontSize: 36, marginBottom: 50}}>Our hosts will be your friends helping you enjoy your trip like a local</h2>
          <Form
          labelCol={{
            span: 5,
          }}
          wrapperCol={{
            span: 16,
          }}
          layout="horizontal"
          initialValues={{
            size: componentSize,
          }}
          style={{ background: 'rgba(0, 0, 0, 0.7)', borderRadius: 6, paddingTop: 50, paddingBottom: 20}}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
        >
        <Form.Item label={<h3 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white', fontSize: 18}}>Anfitrión</h3>}>
            <Select placeholder="Selecciona un anfitrión">
              {
                host?.map(hst =>{
                  return (
                  <Select.Option key={hst.id} value={hst.id}>{hst.name}</Select.Option>
                  )
                })
              }
            </Select>
          </Form.Item>
          <h3 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white', fontSize: 28, marginLeft: '5%', marginBottom: 30}}>Datos de Pago</h3>
          <Form.Item label={<h3 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white', fontSize: 18}}>Nombre</h3>}>
            <Input placeholder="Jhoe Donald"/>
          </Form.Item>
          <Form.Item label={<h3 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white', fontSize: 18}}>No Tarjeta</h3>}>
            <Input placeholder="4555 0000 4444 7777"/>
          </Form.Item>
          <Form.Item label={<h3 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white', fontSize: 18}}>CVV</h3>}>
            <Input style={{width: 200}}/>
          </Form.Item>
          <Form.Item label={<h3 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white', fontSize: 18}}>Fecha Exp</h3>}>
            <DatePicker style={{width: 200}} defaultValue={moment('01/2015', monthFormat)} format={monthFormat} picker="month" />
          </Form.Item>
          <Form.Item style={{textAlign: 'center', width: '90vw'}}>
            <Button style={{backgroundColor: '#f23e3e', fontSize: 14, height: 50, borderColor: '#f23e3e', color: 'white', fontWeight: '500', paddingTop: 5, width: 200, alignSelf: 'center'}} shape="round" size={'large'}>
              PAGAR
            </Button>
          </Form.Item>
        </Form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
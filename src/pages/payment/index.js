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

  const [form] = Form.useForm();



  function buildEpaycoButton(amount) {
    console.log('EPAYCOOO', window.ePayco)    
    
    const url = 'https://checkout.epayco.co/checkout.js';
  
    const script = document.createElement('script');
    script.src =  url;
    script.async = true;
    script.setAttribute('data-epayco-key', '65afb5be48a6a50793901a14bc038c2f');
    script.setAttribute('class', 'epayco-button');
    script.setAttribute('data-epayco-amount', amount);
    script.setAttribute('data-epayco-tax', '0');
    script.setAttribute('data-epayco-tax-base', '0');
    script.setAttribute('data-epayco-name', 'Solicitud de anfitrion');
    script.setAttribute('data-epayco-description', 'Solicitud de anfitrion');
    script.setAttribute('data-epayco-currency', 'cop');
    script.setAttribute('data-epayco-country', 'CO');
    script.setAttribute('data-epayco-test', 'true');
    script.setAttribute('data-epayco-external', 'false');
    script.setAttribute('data-epayco-response', '');
    script.setAttribute('data-epayco-confirmation', '');
    script.setAttribute('data-epayco-button', 'https://369969691f476073508a-60bf0867add971908d4f26a64519c2aa.ssl.cf5.rackcdn.com/btns/boton_carro_de_compras_epayco4.png');


    // document.body.appendChild(script);
    document.getElementById('firstDiv').appendChild(script);

    return () => {
      // document.body.removeChild(script);
      document.getElementById('firstDiv').removeChild(script);
      
    }
  }

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

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

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  return (
    <div style={{
      backgroundColor: '#282c34',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      color: 'white',
      }}>
      <div style={{backgroundColor: '#f29720'}}>
        <h2 style={{ height: '100%', fontSize: 30, paddingInlineStart: 40, margin: 14, marginTop: 9, verticalAlign: 'center', color: 'white'}}>TravelTech</h2>
      </div>
      <div style={{backgroundImage: `url(${ThirdImg})`, backgroundSize: 'cover', height: 800, objectFit: 'fit', width: '100%'}}>
        <div style={{ height: '100%', paddingTop: '3%', paddingRight: '20%', paddingLeft: '20%'}}>
        <h2 style={{color: 'white', textShadow: 'rgb(143 143 143) 2px 2px 4px', textAlign: 'center', fontSize: 36, marginBottom: 50}}>Our hosts will be your friends helping you enjoy your trip like a local</h2>
          <Form id='firstDiv'
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
          form={form}
          scrollToFirstError
          name="register"
          onFinish={onFinish}
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
            

          </Form.Item>
        </Form>

        <Button onClick={() => buildEpaycoButton(50000)} style={{backgroundColor: '#f29720', fontSize: 14, height: 60, borderColor: '#f29720', color: 'white', fontWeight: '500', paddingTop: 5, width: 200}} shape="round" size={'large'}>
          PAGAR
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
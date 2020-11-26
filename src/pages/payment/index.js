import 'antd/dist/antd.css';
import {
  Form,
  Input,
  Button,
  Select,
  Card, Row, Col } from 'antd';
  import React, { useState, useEffect } from 'react';
import firstImg from '../../assets/images/pexelsphoto114251.jpeg';
import logo from '../../assets/images/logo.png';
import secondImg from '../../assets/images/pexelsphoto1367170.jpeg';
import ThirdImg from '../../assets/images/pexelsphoto1054289.jpeg';
import FourImg from '../../assets/images/pexelsphoto167684.jpeg';
import { endpoints } from '../../endpoints/endpoints'
import moment from 'moment';
import Coverflow from 'react-coverflow';

const { Meta } = Card;

const monthFormat = 'MM/YYYY';

function Payment(props) {
  const [componentSize, setComponentSize] = useState('large');
  const [host, setHost] = useState(null);
  const [selected, setSelected] = useState(null);
  const [showPay, setShowPay] = useState(true);

  const [form] = Form.useForm();

  const prevData = localStorage.getItem('values') !== undefined &&  JSON.parse(localStorage.getItem('values'));

  function buildEpaycoButton(amount) {
    
    const url = 'https://checkout.epayco.co/checkout.js';
  
    const script = document.createElement('script');
    script.src =  url;
    script.async = true;
    script.setAttribute('data-epayco-key', '072e6c48d7bfa1027afde26345d20d4a');
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

    script.setAttribute('data-epayco-response', 'https://travel-web.vercel.app/payment');
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

 const onBooking = async () => {
    const { name, city, email, endDate, startDate, tripType } = prevData;
    if(selected) {
      const result = await endpoints.bookingRequest.postBooking({
        "guest_name": name,
        "guest_email": email,
        "guest_phone": 0,
        "destination": city.toString(),
        "start_date": moment(startDate).format('YYYY-MM-DD'),
        "end_date": moment(endDate).format('YYYY-MM-DD'),
        "host": (selected.id).toString(),
        "trip_type": tripType.toString(),
        "total": 50000,
/*         "payment": {
          "id": "string",
          "payment_id": "string",
          "status": "string",
          "method": "string",
          "type": "string"
        }, */
      });
      if(result) {
        setShowPay(false);
        buildEpaycoButton(50000);
      }
    }
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
        <div style={{ height: '100%', paddingTop: '3%', paddingRight: '20%', paddingLeft: '20%', textAlign: 'center'}}>
        <h2 style={{color: 'white', textShadow: 'rgb(143 143 143) 2px 2px 4px', textAlign: 'center', fontSize: 36, marginBottom: 50}}>Selecciona a tu anfitrión</h2>
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
          style={{ background: 'rgba(0, 0, 0, 0.3)', display: 'flex', flexDirection: 'row', borderRadius: 6, paddingTop: 50, paddingBottom: 20, overflowX: 'auto'}}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
          form={form}
          scrollToFirstError
          name="register"
          onFinish={onFinish}
        >
          {
            host?.map((item,index) => {
              return (
                <Col key={item.id} style={{marginLeft: 10, marginRight: 10}}>
                  <Card
                    onClick={() => setSelected(item)}
                    hoverable
                    style={{ width: 240, borderRadius: 10, borderColor: '#EF9128', borderWidth: item == selected ? 5:0 }}
                    cover={<img alt="example" style={{borderRadius: 10}} src={item.imageUrl} />}
                  >
                    <Meta title={item.name} description={`${item.email}`} />
                  </Card>
                </Col>
              )
            })
          }
        </Form>
        <Form id='firstDiv' style={{marginTop: 20}}>
          {/* */}
        </Form>
          {showPay && <Button onClick={onBooking} style={{backgroundColor: '#f29720', fontSize: 14, height: 60, marginTop: 20, borderColor: '#f29720', color: 'white', fontWeight: '500', paddingTop: 5, width: 200}} shape="round" size={'large'}>
            Reserva
          </Button>}
        </div>
      </div>
    </div>
  );
}

export default Payment;
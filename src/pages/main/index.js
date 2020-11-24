import 'antd/dist/antd.css';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch, } from 'antd';
  import React, { useState, useEffect } from 'react';
import firstImg from '../../assets/images/pexelsphoto114251.jpeg';
import logo from '../../assets/images/logo.png';
import secondImg from '../../assets/images/pexelsphoto1367170.jpeg';
import ThirdImg from '../../assets/images/pexelsphoto1054289.jpeg';
import FourImg from '../../assets/images/pexelsphoto167684.jpeg';
import { endpoints } from '../../endpoints/endpoints'
import { BrowserRouter as Link } from 'react-router-dom';


function Main(props) {
  const [componentSize, setComponentSize] = useState('large');
  const [cities, setCities] = useState(null);
  const [tripTypes, setTripTypes] = useState(null);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 20,
      },
      sm: {
        span: 10,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 24,
      },
    },
  };

  useEffect(() => {
    async function fetchData() {
      Promise.all([
        endpoints.cities.getCities(),
        endpoints.tripTypes.getTripTypes()
      ]).then(function (responses) {
         setCities(responses[0]);
         setTripTypes(responses[1]);
      }).catch(function (error) {
        console.log(error);
      });
    }
    fetchData();
  }, []);

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  console.log('PROPS', props)

  return (
    <div style={{
      backgroundColor: '#282c34',
      minHeight: '100vh',
      maxWidth: '100%',
      overflow: 'hidden',
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      color: 'white',
      }}>
      <div style={{backgroundColor: '#f29720'}}>
        <h2 style={{ height: '100%', fontSize: 30, paddingInlineStart: 40, margin: 14, marginTop: 9, verticalAlign: 'center', color: 'white'}}>TravelTech</h2>
      </div>
      <div style={{
        backgroundImage: `url(${firstImg})`,
        height: 700,
        objectFit: "fill",
        backgroundSize: 'cover',
        width: '100%'
        }}>
        <div style={{textAlign: 'center', height: '100%', paddingTop: '5%', paddingBottom: '5%'}}>
        <img src={logo} alt="second"/>
        <h2 style={{color: 'white', fontSize: 26, marginBottom: 50}}>We Are Travel Agency</h2>
        <Button style={{backgroundColor: '#f29720', fontSize: 14, height: 60, borderColor: '#f29720', color: 'white', fontWeight: '500', paddingTop: 5, width: 200}} shape="round" size={'large'}>
          REQUEST A HOST
        </Button>
        </div>
      </div>
      <div style={{backgroundImage: `url(${secondImg})`, height: 700, backgroundSize: 'cover', width: '100%'}}>
        <div style={{textAlign: 'center', height: '100%', paddingTop: '12%', paddingRight: '10%', paddingLeft: '10%'}}>
        <h2 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white'/* , fontSize: 28 */}}>At Mountain Home Charter Service Inc., our number one concern is customer satisfaction. We believe this can only be accomplished by providing superior service, quality lines, and competitive pricing.

We are a nationwide charter service that serves Springfield, Branson and the surrounding areas with late model MCI Luxury Motorcoaches. Our fine buses boast a 54 to 56 passenger capacity, are equipped with restrooms and feature DVD players and monitors.</h2>
        </div>
      </div>
      <div style={{backgroundImage: `url(${ThirdImg})`, height: 700, backgroundSize: 'cover', width: '100%'}}>
        <div style={{textAlign: 'center', height: '100%', paddingTop: '15%'}}>
        <img src={logo} alt="second"/>
        </div>
      </div>
      <div style={{backgroundImage: `url(${FourImg})`, backgroundSize: 'cover', height: 1000, objectFit: 'fit', width: '100%'}}>
        <div style={{ height: '100%', paddingRight: '20%', paddingLeft: '20%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h1 style={{color: 'white', textShadow: 'rgb(143 143 143) 2px 2px 4px', textAlign: 'center', marginBottom: 20}}>Our hosts will be your friends helping you enjoy your trip like a local</h1>
        <div style={{ background: 'rgba(0, 0, 0, 0.7)', borderRadius: 6, paddingBottom: 20, paddingLeft: 20, paddingRight: 20, maxWidth: 600, minWidth: 300, width: '100%'}}>
          <Form
          /* labelCol={{
            span: 5,
          }}
          wrapperCol={{
            span: 16,
          }} */
          {...formItemLayout}
          layout="vertical"
          initialValues={{
            size: componentSize,
          }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
          form={form}
          scrollToFirstError
          name="register"
          onFinish={onFinish}
        >
          <Form.Item
            name="name"
            label={<h3 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white', fontSize: 18, marginBottom: -10 }}
            rules={[
              {
                required: true,
                message: 'Please input your name!',
                whitespace: true,
              },
            ]}
            >Nombre</h3>}>
            <Input width={'100%'} placeholder="Jhoe Donald"/>
          </Form.Item>
          <Form.Item
           style={{marginTop: -20}}
            name="email"
            label={<h3 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white', fontSize: 18, marginBottom: -10}}
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
            >Email</h3>}>
            <Input placeholder="jhoe@gmail.com"/>
          </Form.Item>
          <Form.Item style={{marginTop: -20}} label={<h3 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white', fontSize: 18, marginBottom: -10}}>Ciudad</h3>}>
            <Select placeholder="Selecciona una ciudad">
              {
                cities?.map(city =>{
                  return (
                  <Select.Option key={city.id} value={city.id}>{city.name}</Select.Option>
                  )
                })
              }
            </Select>
          </Form.Item>
          <Form.Item style={{marginTop: -20}} label={<h3 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white', fontSize: 18, marginBottom: -10}}>Fecha Inicio</h3>}>
            <DatePicker style={{maxWidth: 250, width: '100%'}} placeholder="Selecciona fecha inicial" />
          </Form.Item>
          <Form.Item style={{marginTop: -20}} label={<h3 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white', fontSize: 18, marginBottom: -10}}>Fecha Fin</h3>}>
            <DatePicker style={{maxWidth: 250, width: '100%'}} placeholder="Selecciona fecha final" />
          </Form.Item>
          <Form.Item style={{marginTop: -20}} label={<h3 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white', fontSize: 18, marginBottom: -10}}>Tipo de viaje</h3>}>
            <Select  placeholder="Selecciona el tipo de viaje">
              {
                  tripTypes?.map(trip =>{
                    return (
                    <Select.Option key={trip.id} value={trip.value}>{trip.name}</Select.Option>
                    )
                  })
              }
            </Select>
          </Form.Item>
          <Form.Item style={{textAlign: 'center', width: '100%'}}>
            <Button onClick={() => props.history.push('/payment')} style={{backgroundColor: '#f23e3e', fontSize: 14, height: 50, borderColor: '#f23e3e', color: 'white', fontWeight: '500', paddingTop: 5, width: 200, alignSelf: 'center'}} shape="round" size={'large'}>
              REQUEST A HOST
            </Button>
          </Form.Item>
        </Form>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
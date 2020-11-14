import './App.css';
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
  import React, { useState } from 'react';
import firstImg from './assets/images/pexelsphoto114251.jpeg'
import logo from './assets/images/logo.png';
import secondImg from './assets/images/pexelsphoto1367170.jpeg'
import ThirdImg from './assets/images/pexelsphoto1054289.jpeg'
import FourImg from './assets/images/pexelsphoto167684.jpeg'


function App() {
  const [componentSize, setComponentSize] = useState('large');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <div className="App">
      <div style={{backgroundColor: '#f29720'}}>
        <h2 style={{ height: '100%', fontSize: 30, paddingInlineStart: 40, margin: 14, marginTop: 9, verticalAlign: 'center', color: 'white'}}>TravelTech</h2>
      </div>
      <div className="imgDiv">
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
        <h3 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white', fontSize: 28}}>At Mountain Home Charter Service Inc., our number one concern is customer satisfaction. We believe this can only be accomplished by providing superior service, quality lines, and competitive pricing.

We are a nationwide charter service that serves Springfield, Branson and the surrounding areas with late model MCI Luxury Motorcoaches. Our fine buses boast a 54 to 56 passenger capacity, are equipped with restrooms and feature DVD players and monitors.</h3>
        </div>
      </div>
      <div style={{backgroundImage: `url(${ThirdImg})`, height: 700, backgroundSize: 'cover', width: '100%'}}>
        <div style={{textAlign: 'center', height: '100%', paddingTop: '15%'}}>
        <img src={logo} alt="second"/>
        </div>
      </div>
      <div style={{backgroundImage: `url(${FourImg})`, backgroundSize: 'cover', height: 800, objectFit: 'fit', width: '100%'}}>
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
          <Form.Item label={<h3 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white', fontSize: 18}}>Nombre</h3>}>
            <Input placeholder="Jhoe Donald"/>
          </Form.Item>
          <Form.Item label={<h3 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white', fontSize: 18}}>Email</h3>}>
            <Input placeholder="jhoe@gmail.com"/>
          </Form.Item>
          <Form.Item label={<h3 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white', fontSize: 18}}>Ciudad</h3>}>
            <Select placeholder="Selecciona una ciudad">
                <Select.Option value="cali">Cali</Select.Option>
                <Select.Option value="popayan">Popayán</Select.Option>
                <Select.Option value="bogota">Bogotá</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label={<h3 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white', fontSize: 18}}>Fecha Inicio</h3>}>
            <DatePicker style={{width: 250}} placeholder="Selecciona fecha inicial" />
          </Form.Item>
          <Form.Item label={<h3 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white', fontSize: 18}}>Fecha Fin</h3>}>
            <DatePicker style={{width: 250}} placeholder="Selecciona fecha final" />
          </Form.Item>
          <Form.Item label={<h3 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white', fontSize: 18}}>Tipo de viaje</h3>}>
            <Select  placeholder="Selecciona el tipo de viaje">
                <Select.Option value="negocios">Negocios</Select.Option>
                <Select.Option value="explorador">Explorador</Select.Option>
                <Select.Option value="turismo">Turismo</Select.Option>
                <Select.Option value="cultura">Cultura local</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item style={{textAlign: 'center', width: '90vw'}}>
            <Button style={{backgroundColor: '#f23e3e', fontSize: 14, height: 50, borderColor: '#f23e3e', color: 'white', fontWeight: '500', paddingTop: 5, width: 200, alignSelf: 'center'}} shape="round" size={'large'}>
              REQUEST A HOST
            </Button>
          </Form.Item>
        </Form>
        </div>
      </div>
    </div>
  );
}

export default App;

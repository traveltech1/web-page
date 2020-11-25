import 'antd/dist/antd.css';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  Row, Col, Checkbox
 } from 'antd';
import React, { useState, useEffect } from 'react';
import firstImg from '../../assets/images/0.jpg';
import logo from '../../assets/images/travelTech.jpg';
import secondImg from '../../assets/images/1.jpg';
import ThirdImg from '../../assets/images/2.jpg';
import FourImg from '../../assets/images/4.jpg';
import left from '../../assets/images/pexelsphoto1252869.jpeg';
import Moon from '../../assets/images/moon.png';
import { endpoints } from '../../endpoints/endpoints'
import { BrowserRouter as Link } from 'react-router-dom';
import moment from 'moment';


const Main = (props) => {
  const [componentSize] = useState('large');
  const [cities, setCities] = useState(null);
  const [tripTypes, setTripTypes] = useState(null);
  const [checkNick, setCheckNick] = useState(false);

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    const values2 = await form.validateFields();
      console.log('Success:', values2);
  };

  const onFinishFailed = ({ values, errorFields, outOfDate }) => {
    console.log('Received ERROR: ', values, errorFields, outOfDate);
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

  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      console.log('Success:', values);
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };

  const onEpayco = () => {
    console.log('EPAYCOOO', window.ePayco)
/*     let epa = window.ePayco.checkout;
    epa.open({
      p_key: 'a1c7200f0e2029d11b62bfd863422d5db10a8397',
      'data-epayco-key':'65afb5be48a6a50793901a14bc038c2f',
      'data-epayco-amount':'142800',
      'data-epayco-tax':'22800',
      'data-epayco-tax-base':'120000',
      'data-epayco-name':'Solicitud de anfitrion',
      'data-epayco-description':'Solicitud de anfitrion',
      'data-epayco-currency':'cop',
      'data-epayco-country':'CO',
      'data-epayco-test':'true',
      'data-epayco-external':'true'

    });
    // window.ePayco.open; */
  }

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: 'Invalid Email!',
      number: '${label} is not a valid number!'
    },
  };

  const formItemLayout2 = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 20,
    },
  }

  const formTailLayout2 = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 8,
      offset: 4,
    },
  };

  const onCheckboxChange = (e) => {
    setCheckNick(e.target.checked);
  };

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
        <img width="100px" style={{ height: '100%', paddingInlineStart: 40, margin: 14, marginTop: 9, verticalAlign: 'center', color: 'white'}} src={logo}/>
      </div>

      {/* =========== PRIMERA SECCIÓN ============= */}
      <div style={{
        backgroundImage: `url(${firstImg})`,
        height: 700,
        objectFit: "fill",
        backgroundSize: 'cover',
        width: '100%'
        }}>
        <div style={{textAlign: 'center', height: '100%', paddingTop: '5%', paddingBottom: '5%'}}>
          <img src={logo} alt="second"/>
          <h1 style={{color: 'white', fontSize: 26, marginBottom: 0}}>TRAVELTECH CONECTANDO EL MUNDO A TRAVÉS DE PERSONAS</h1>
          <h3 style={{color: 'white', fontSize: 26, marginBottom: 50}}>El anfitrión perfecto en el destino al que vas. Un match perfecto</h3>
          <Button style={{backgroundColor: '#f29720', fontSize: 14, height: 60, borderColor: '#f29720', color: 'white', fontWeight: '500', paddingTop: 5, width: 200}} shape="round" size={'large'}>
          QUIERO UN ANFITRIÓN
          </Button>
        </div>
      </div>

      {/* =========== SEGUNDA SECCIÓN ============= */}
      <Col xs={0} sm={0} md={24} style={{backgroundImage: `url(${secondImg})`, height: 700, backgroundSize: 'cover', width: '100%'}}>
        <Row style={{textAlign: 'center', height: '100%', display: 'flex', background: 'rgba(0,0,0,0.3)'}}>
          <Col xs={24} sm={24} md={12} style={{width: '50%', height: '100%', padding: '0px 20px 0px 20px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
            <img src={Moon} alt="second"/>
            <h1 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px',position: 'absolute', width: 300, color: 'white', fontSize: 38, marginRight: 20}}>
              ¿QUÉ HACEMOS?
            </h1>
          </Col>
          <Col xs={24} sm={24} md={12} style={{width: '50%', height: '100%', padding: '0px 20px 0px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'left'}}>
            <h2 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white'/* , fontSize: 28 */}}>
            Conectamos tus deseos y el tipo de plan en el que vas con el mejor anfitrión para ti, ya sea si quieres acompañamiento de alguien o si solo quieres contactarlo de vez en cuando.
            </h2>
            <ul>
              <li><h2 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white'}}>Idioma: te contactaremos con un anfitrión que hable tu mismo idioma y te pueda ayudar a planear y acompañar durante tu viaje.</h2></li>
              <li><h2 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white'}}>Destinos locales: Tendrás la oportunidad de conocer lugares increíbles y poco tradicionales de la mano de locales.</h2></li>
              <li><h2 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white'}}>Match: Dependiendo de tu tipo de viaje podrás escoger entres los diferentes anfitriones en tu lugar de destino y así decidir cual cumple con el objetivo de tu viaje.</h2></li>
              <li><h2 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white'}}>En caso de emergencia: Contarás con el apoyo de nuestros anfitriones para ayudarte en cualquier caso de imprevisto, percance o emergencia que se presente durante tu viaje.</h2></li>
            </ul>
          </Col>
        </Row>
      </Col>
      <Col xs={24} sm={24} md={0} style={{backgroundImage: `url(${secondImg})`, height: 1150, backgroundSize: 'cover', width: '100%'}}>
        <Row style={{textAlign: 'center', height: '100%', display: 'flex', background: 'rgba(0,0,0,0.3)'}}>
          <Col xs={24} sm={24} md={12} style={{width: '50%', height: '100%', padding: '0px 20px 0px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'left'}}>
            <h1 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white', fontSize: 38, marginRight: 20}}>
              ¿QUÉ HACEMOS?
            </h1>
            <h2 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white'/* , fontSize: 28 */}}>
            Conectamos tus deseos y el tipo de plan en el que vas con el mejor anfitrión para ti, ya sea si quieres acompañamiento de alguien o si solo quieres contactarlo de vez en cuando.
            </h2>
            <ul>
              <li><h2 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white'}}>Idioma: te contactaremos con un anfitrión que hable tu mismo idioma y te pueda ayudar a planear y acompañar durante tu viaje.</h2></li>
              <li><h2 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white'}}>Destinos locales: Tendrás la oportunidad de conocer lugares increíbles y poco tradicionales de la mano de locales.</h2></li>
              <li><h2 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white'}}>Match: Dependiendo de tu tipo de viaje podrás escoger entres los diferentes anfitriones en tu lugar de destino y así decidir cual cumple con el objetivo de tu viaje.</h2></li>
              <li><h2 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white'}}>En caso de emergencia: Contarás con el apoyo de nuestros anfitriones para ayudarte en cualquier caso de imprevisto, percance o emergencia que se presente durante tu viaje.</h2></li>
            </ul>
          </Col>
        </Row>
      </Col>

      {/* =========== TERCERA SECCIÓN ============= */}
      <Col xs={24} sm={24} md={24} style={{backgroundImage: `url(${secondImg})`, height: 400, backgroundSize: 'cover', width: '100%'}}>
        <Row style={{textAlign: 'center', height: '100%', display: 'flex'}}>
          <Col xs={24} sm={24} md={10} style={{backgroundImage: `url(${left})`, width: '50%', height: '100%'}}>
            <Row style={{textAlign: 'left', width: '100%', height: '100%', display: 'flex', padding: '0px 20px 0px 20px', background: 'rgba(0,0,0,0.3)'}}>
              <h1 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white', fontSize: 38}}>
              SIGUE EN CONTACTO
              </h1>
              <h2 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white'/* , fontSize: 28 */}}>
                Conectamos tus deseos y el tipo de plan en el que vas con el mejor anfitrión para ti, ya sea si quieres acompañamiento de alguien o si solo quieres contactarlo de vez en cuando.
              </h2>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={14} style={{backgroundImage: `url(${firstImg})`, backgroundSize: 'cover', width: '50%', height: '100%'}}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', height: '100%', padding: '0px 20px 0px 20px', background: 'rgba(0,0,0,0.3)', width: '100%', textAlign: 'left'}}>
            <h2 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white'}}>
                Contacto
              </h2>
              <Form form={form} style={{width: '100%'}}>
                <Form.Item
                  {...formItemLayout2}
                >
                  <Input placeholder="Nombre" />
                </Form.Item>
                <Form.Item
                  {...formItemLayout2}
                >
                  <Input placeholder="Correo" />
                </Form.Item>
                <Form.Item
                  {...formItemLayout2}
                >
                  <Input placeholder="Celular" />
                </Form.Item>
                <Form.Item
                  {...formItemLayout2}
                >
                  <Select placeholder="Selecciona el lugar de viaje">
                    <Select.Option value="norteamerica">Norteamérica</Select.Option>
                    <Select.Option value="centroamerica">Centroamérica</Select.Option>
                    <Select.Option value="suramerica">Suramérica</Select.Option>
                    <Select.Option value="caribe">Caribe</Select.Option>
                    <Select.Option value="europa">Europa</Select.Option>
                    <Select.Option value="asia">Asia</Select.Option>
                    <Select.Option value="africa">África</Select.Option>
                    <Select.Option value="oceania">Oceanía</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item>
                  <Checkbox checked={checkNick} onChange={onCheckboxChange} style={{color: 'white'}}>
                    *Aceptar política de datos
                  </Checkbox>
                </Form.Item>
                <Form.Item>
                  <Button type="primary">
                    Enviar
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </Col>

      {/* =========== CUARTA SECCIÓN ============= */}
      <div style={{backgroundImage: `url(${ThirdImg})`, height: 700, backgroundSize: 'cover', width: '100%'}}>
        <div style={{textAlign: 'center', height: '100%', paddingTop: '15%'}}>
          <img src={logo} alt="second"/>
        </div>
      </div>

      {/* =========== QUINTA SECCIÓN ============= */}
      <div style={{backgroundImage: `url(${ThirdImg})`, height: 700, backgroundSize: 'cover', width: '100%'}}>
        <div style={{textAlign: 'center', height: '100%', paddingTop: '15%'}}>
        <img src={logo} alt="second"/>
        </div>
      </div>


      <div style={{backgroundImage: `url(${FourImg})`, backgroundSize: 'cover', height: 1000, objectFit: 'fit', width: '100%'}}>
        <div style={{ height: '100%', paddingRight: '20%', paddingLeft: '20%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h1 style={{color: 'white', textShadow: 'rgb(143 143 143) 2px 2px 4px', textAlign: 'center', marginBottom: 20}}>Our hosts will be your friends helping you enjoy your trip like a local</h1>
        <div style={{ background: 'rgba(0, 0, 0, 0.7)', borderRadius: 6, paddingBottom: 20, paddingLeft: 20, paddingRight: 20, maxWidth: 600, minWidth: 300, width: '100%', paddingTop: 10}}>
        {cities && tripTypes &&
          <Form
          form={form}
          {...formItemLayout}
          layout="vertical"
          size={componentSize}
          // scrollToFirstError
          onFinishFailed={onFinishFailed}
          onFinish={onFinish}
          validateMessages={validateMessages}
        >

            <Form.Item
            name="name"
            label={<h3 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white', fontSize: 18, marginBottom: -10 }}
            rules={[
              {
                required: true,
                message: 'Please input your name!',
                // whitespace: true,
              },
            ]}
            >Nombre</h3>}>
            <Input minLength={5} width={'100%'} placeholder="Jhoe Donald"/>
          </Form.Item>
          <Form.Item
            style={{marginTop: -20}}
            name={['user', 'email']}
            label={<h3 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white', fontSize: 18, marginBottom: -10}}
            rules={[
              {
                required: true,
                type: 'email',
              }
            ]}
            >Email</h3>}>
            <Input  type="email" placeholder="jhoe@gmail.com"/>
          </Form.Item>
          <Form.Item
            name="city"
            style={{marginTop: -20}}
            label={<h3 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white', fontSize: 18, marginBottom: -10}}>Ciudad</h3>}>
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
          <Form.Item
            style={{marginTop: -20}}
            label={<h3 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white', fontSize: 18, marginBottom: -10}}
            name="startDate"
            >Fecha Inicio</h3>}>
            <DatePicker value={moment()} required style={{maxWidth: 250, width: '100%'}} placeholder="Selecciona fecha inicial" />
          </Form.Item>
          <Form.Item
            style={{marginTop: -20}}
            label={<h3 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white', fontSize: 18, marginBottom: -10}}
            name="endDate"
            >Fecha Fin</h3>}>
            <DatePicker value={moment().add(3, 'days')} required style={{maxWidth: 250, width: '100%'}} placeholder="Selecciona fecha final" />
          </Form.Item>
          <Form.Item
            style={{marginTop: -20}}
            label={<h3 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white', fontSize: 18, marginBottom: -10}}
            name="tripType"
            >Tipo de viaje</h3>}>
            <Select required defaultValue={tripTypes[0].value} placeholder="Selecciona el tipo de viaje">
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
            <Button htmlType="submit" /* onClick={() => props.history.push('/payment')} */ style={{backgroundColor: '#f23e3e', fontSize: 14, height: 50, borderColor: '#f23e3e', color: 'white', fontWeight: '500', paddingTop: 5, width: 200, alignSelf: 'center'}} shape="round" size={'large'}>
              REQUEST A HOST
            </Button>
          </Form.Item>
        </Form>}

        </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
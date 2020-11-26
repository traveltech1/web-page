import 'antd/dist/antd.css';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Alert,
  DatePicker,
  Row, Col, Checkbox
 } from 'antd';
import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/travelTech.png';
import final from '../../assets/images/1.jpg'
import alejandra from '../../assets/images/alejandra.jpg';
import angie from '../../assets/images/angie.jpg';
import camilo from '../../assets/images/camilo.jpg';
import chiara from '../../assets/images/chiara.jpg';
import elaine from '../../assets/images/elaine.jpg';
import eren from '../../assets/images/eren.jpg';
import vitor from '../../assets/images/vitor.jpg';
import FourImg from '../../assets/images/4.jpg';
import left from '../../assets/images/pexelsphoto1252869.jpeg';
import { endpoints } from '../../endpoints/endpoints'
import { useHistory } from 'react-router-dom';
import moment from 'moment';


const Main = (props) => {
  const [componentSize] = useState('large');
  const [cities, setCities] = useState(null);
  const [tripTypes, setTripTypes] = useState(null);
  const [checkNick, setCheckNick] = useState(false);
  const [checkFields, setCheckFields] = useState(false);
  const [badDate, setBadDate] = useState(false);

  const [form] = Form.useForm();
  const history = useHistory();

  const toFormRef = useRef(null)

  const scrollToBottom = () => {
    toFormRef.current.scrollIntoView({ behavior: "smooth" })
  }

  const onFinish = async (values) => {
    setCheckFields(false);
    setBadDate(false);
    const values2 = await form.validateFields();
    const leftFields = Object.values(values2).includes(undefined);
    if (leftFields) {
      setCheckFields(true);
    } else {
      if (values2.endDate > values2.startDate) {
        setBadDate(false);
        localStorage.setItem('values', JSON.stringify(values2))
        history.push('/payment');
     } else {
       setBadDate(true);
     }
    }
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


  const onCheckboxChange = (e) => {
    setCheckNick(e.target.checked);
  };

  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  }

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

      {/* =========== PRIMERA SECCIÓN ============= */}

        <div class="fixed-side-navbar">
            <ul class="nav flex-column">
                <li class="nav-item"><a class="nav-link" href="#home"><span>Intro</span></a></li>
                <li class="nav-item"><a class="nav-link" href="#services"><span>Servicios</span></a></li>
                <li class="nav-item"><a class="nav-link" href="#contact-us"><span>Contacto</span></a></li>
                <li class="nav-item"><a class="nav-link" href="#portfolio"><span>Anfitriones</span></a></li>
                <li class="nav-item"><a class="nav-link" href="#better"><span>Lo Mejor</span></a></li>
                <li class="nav-item"><a class="nav-link" href="#anfitrion"><span>Solicítalo</span></a></li>
            </ul>
        </div>

        <div class="parallax-content baner-content" id="home">
            <div class="container">
                <div class="first-content">
                    <img width="550px" src={logo} style={{padding: '40px'}} /><br/>
                    <span><em>TRAVELTECH, CONECTANDO EL MUNDO A TRAVÉS DE PERSONAS</em><br/>El anfitrión perfecto en el destino al que vas. Un match perfecto</span>
                    <div class="primary-button">
                        <a href="#anfitrion">QUIERO UN ANFITRIÓN</a>
                    </div>
                </div>
            </div>
        </div>

      {/* =========== SEGUNDA SECCIÓN ============= */}
      <div class="service-content" id="services">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="left-text">
                        <h4 style={{fontSize:'40px'}}>Qué Hacemos?</h4>
                        <div class="line-dec"></div>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="service-item">
                                <h4>Idioma</h4>
                                <div class="line-dec"></div>
                                <p>Te contactaremos con un anfitrión que hable tu mismo idioma y te pueda ayudar a planear y acompañar durante tu viaje.</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="service-item">
                                <h4>Destinos locales</h4>
                                <div class="line-dec"></div>
                                <p>Tendrás la oportunidad de conocer lugares increíbles y poco tradicionales de la mano de locales.</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="service-item">
                                <h4>Match</h4>
                                <div class="line-dec"></div>
                                <p>Dependiendo de tu tipo de viaje podrás escoger entres los diferentes anfitriones en tu lugar de destino y así decidir cual cumple con el objetivo de tu viaje.</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="service-item">
                                <h4>En caso de emergencia</h4>
                                <div class="line-dec"></div>
                                <p>Contarás con el apoyo de nuestros anfitriones para ayudarte en cualquier caso de imprevisto, percance o emergencia que se presente durante tu viaje.</p>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    </div>

      {/* =========== TERCERA SECCIÓN ============= */}
      <div class="parallax-content contact-content" id="contact-us">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="contact-form">
                        <div class="row">
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
                    </div>
                </div>
                <div class="col-md-6">
                    <h2 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white', fontSize: 38}}>
                        SIGUE EN CONTACTO
                    </h2>
                    <p style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white'/* , fontSize: 28 */}}>
                        Conectamos tus deseos y el tipo de plan en el que vas con el mejor anfitrión para ti, ya sea si quieres acompañamiento de alguien o si solo quieres contactarlo de vez en cuando.
                    </p>
                </div>
            </div>
        </div>
      </div>

      {/* =========== CUARTA SECCIÓN ============= */}
       <div class="parallax-content projects-content" id="portfolio">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div id="owl-testimonials" class="owl-carousel owl-theme">
                        <div class="item">
                            <div class="testimonials-item">
                                <a href="img/1st-big-item.jpg" data-lightbox="image-1"><img src={alejandra} alt=""/></a>
                                <div class="text-content">
                                    <h4>Alejandra Paz, Bordeaux – Francia</h4>
                                    <span>Mujer, 27 años, nació en Bogotá – Colombia, amante de un buen vino, una buena charla, le gusta caminar y conocer sitios nuevos, es muy descomplicada y conoce mucho de cultura, gastronomía y lugares para tomarse una cerveza.</span>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="testimonials-item">
                                <a href="img/2nd-big-item.jpg" data-lightbox="image-1"><img src={eren} alt=""/></a>
                                <div class="text-content">
                                    <h4>Eren Yildiz, Qatar - Qatar</h4>
                                    <span>Hombre, 27 años, nació en Estambul-Turquía, habla inglés, español, curdo, turco, alemán. Le gusta viajar, ama Suramérica, conoce mucho de historia, gastronomía. Le gusta la fiesta, conocer personas nuevas. Ha conocido más de 18 países.</span>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="testimonials-item">
                                <a href="img/3rd-big-item.jpg" data-lightbox="image-1"><img src={vitor} alt=""/></a>
                                <div class="text-content">
                                    <h4>Vitor Sampaio, Fortaleza – Brazil</h4>
                                    <span>Hombre, 26 años, nació en Fortaleza-Brasil, habla español, portugués e inglés. Le gusta el futbol, es emprendedor, es apasionado por el medio ambiente y la sostenibilidad. Conoce mucho de historia, deporte y cultura. Le gusta conocer personas nuevas.</span>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="testimonials-item">
                                <a href="img/5th-big-item.jpg" data-lightbox="image-1"><img src={camilo} alt=""/></a>
                                <div class="text-content">
                                    <h4>Camilo Bello, Taipéi – Taiwan</h4>
                                    <span>Hombre, 32 años, nació en Bogotá-Colombia, habla español, ingles y mandarín. Es apasionado por la historia, la cultura, la gastronomía. Le gusta visitar parques, respirar aire libre y conocer las historias que tienen las personas.</span>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="testimonials-item">
                                <a href="img/6th-big-item.jpg" data-lightbox="image-1"><img src={angie} alt=""/></a>
                                <div class="text-content">
                                    <h4>Angie Rodriguez, Dubái – Emiratos Árabes</h4>
                                    <span>Mujer, 28 años, nació en Bogotá-Colombia, habla español, inglés y algunas cosas en árabe, trabaja en un bar en Dubái, es muy divertida, descomplicada, amante de la fiesta y unos buenos cocteles.</span>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="testimonials-item">
                                <a href="img/2nd-big-item.jpg" data-lightbox="image-1"><img src={elaine} alt=""/></a>
                                <div class="text-content">
                                    <h4>Elaine Burke, Dublin – Irlanda</h4>
                                    <span>Mujer, 27 años, nació en Dublin-Irlanda, habla inglés y español. Le gusta mucho viajar y la fiesta. Conoció la mayoría de países de Suramérica en un “bigtrip” que hizo. Estudia comunicación.</span>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="testimonials-item">
                                <a href="img/1st-big-item.jpg" data-lightbox="image-1"><img src={chiara} alt=""/></a>
                                <div class="text-content">
                                    <h4>Chiara y Simona, Mallorca-España</h4>
                                    <span>Mujeres, 26 años, nacieron en Milán-Italia. Hablan español, inglés, alemán e italiano. Les encanta la gastronomía, los idiomas. Son muy divertidas, porque siempre tienen actividades para hacer. Son excelentes chef y siempre están en una actividad nueva.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* =========== QUINTA SECCIÓN ============= */}
      <div class="parallax-content tabs-content" id="better">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <img src={FourImg} width={'100%'} alt="second"/>
                </div>
                <div class="col-md-6">
                    <h2 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white', fontSize: 30}}>
                        ¿QUÉ ES LO MEJOR DE TRAVEL TECH?
                    </h2>
                    <p style={{color: 'white'}}>
                        ¿Alguna vez has tenido <b>un poco de temor de conocer</b> algún lugar porque no conoces su idioma, su cultura, su religión o sus costumbres? O, Durante tus viajes <b> ¿Te gusta conocer personas nuevas? </b> <br/><br/>
                        TravelTech es la nueva <b>red mundial</b> que esta revolucionando la conexión e interacción entre <b>anfitriones locales y viajeros</b>.
                        Brindamos un acompañamiento pre, durante y post-viaje, asegurando una experiencia inolvidable en donde tendrás la oportunidad de <b>conocer lugares increíbles </b> con la <b>ayuda</b> de nuestros anfritriones que con su experiencia y pasión por ayudarle a los viajeros <b> te harán vivir una mejor experiencia </b>. <br/><br/>
                        Nuestros Anfitriones tienen diferentes características por eso podrás hacer <b>el match perfecto</b> con quien se adecua más a las tuyas. Te brindarán un acompañamiento según tus necesidades.
                    </p>
                </div>
            </div>
        </div>
      </div>

      {/* =========== SEXTA SECCIÓN ============= */}
      <Col xs={24} sm={24} md={24} style={{backgroundImage: `url(${final})`, backgroundSize: 'cover', height: 1000, objectFit: 'fit', width: '100%'}} id="anfitrion">
        <div style={{ height: '100%', paddingRight: '20%', paddingLeft: '20%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h1 style={{color: 'white', textShadow: 'rgb(143 143 143) 2px 2px 4px', textAlign: 'center', marginBottom: 20}}>Our hosts will be your friends helping you enjoy your trip like a local</h1>
        <div ref={toFormRef} style={{ background: 'rgba(0, 0, 0, 0.7)', borderRadius: 6, paddingBottom: 20, paddingLeft: 20, paddingRight: 20, maxWidth: 600, minWidth: 300, width: '100%', paddingTop: 10}}>
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
            <Input required minLength={5} width={'100%'} placeholder="Jhoe Donald"/>
          </Form.Item>
          <Form.Item
            style={{marginTop: -20}}
            name='email'
            label={<h3 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white', fontSize: 18, marginBottom: -10}}
            rules={[
              {
                required: true,
                type: 'email',
              }
            ]}
            >Email</h3>}>
            <Input required type="email" placeholder="jhoe@gmail.com"/>
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
            name="startDate"
            label={<h3 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white', fontSize: 18, marginBottom: -10}}
            >Fecha Inicio</h3>}>
            <DatePicker disabledDate={disabledDate} value={moment()} required style={{maxWidth: 250, width: '100%'}} placeholder="Selecciona fecha inicial" />
          </Form.Item>
          <Form.Item
            style={{marginTop: -20}}
            name="endDate"
            label={<h3 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white', fontSize: 18, marginBottom: -10}}
            >Fecha Fin</h3>}>
            <DatePicker disabledDate={disabledDate} value={moment().add(3, 'days')} required style={{maxWidth: 250, width: '100%'}} placeholder="Selecciona fecha final" />
          </Form.Item>
          <Form.Item
            name="tripType"
            style={{marginTop: -20}}
            label={<h3 style={{textShadow: 'rgb(143 143 143) 2px 2px 4px', color: 'white', fontSize: 18, marginBottom: -10}}
            >Tipo de viaje</h3>}>
            <Select required placeholder="Selecciona el tipo de viaje">
              {
                  tripTypes?.map(trip =>{
                    return (
                    <Select.Option key={trip.id} value={trip.id}>{trip.name}</Select.Option>
                    )
                  })
              }
            </Select>
          </Form.Item>
          {checkFields && <Alert message="Hay campos sin completar" type="error" showIcon style={{marginBottom: 20}} />}
          {badDate &&<Alert message="La fecha de inicio no puede ser mayor a la fecha final" type="warning" showIcon style={{marginBottom: 20}} />}
          <Form.Item style={{textAlign: 'center', width: '100%'}}>
            <Button htmlType="submit" /* onClick={() => props.history.push('/payment')} */ style={{backgroundColor: '#f23e3e', fontSize: 14, height: 50, borderColor: '#f23e3e', color: 'white', fontWeight: '500', paddingTop: 5, width: 200, alignSelf: 'center'}} shape="round" size={'large'}>
              REQUEST A HOST
            </Button>
          </Form.Item>
        </Form>}

        </div>
        </div>
      </Col>
    

      <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="primary-button">
                        <a href="#home">Ir Arriba</a>
                    </div>
                    <ul>
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i class="fa fa-google"></i></a></li>
                        <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                    </ul>
                    <p>Copyright &copy; 2020 Travel Tech</p>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default Main;
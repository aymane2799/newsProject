import React, { useState, Fragment } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import PosFeelingCard from '../components/PosFeelingCard';
import NegFeelingCard from '../components/NegFeelingCard';

const ChackFeeling = () => {
    
    const [news, setNews] = useState([]);
    const [result, setResult] = useState([]);
    
    
    const check_feeling = () => {
        axios.post('http://127.0.0.1:8000/feeling/', {
            content: news
        })
        .then(function(response){
            
            console.log('Result : ', response.data);
            setResult(response.data);
        })
        .catch(function(err){
            console.log('error here');
        });
    }


    
    return (


        <Fragment>
            <div className="row justify-content-center mt-5" >
                <Card
                    border={ 'secondary'}
                    style={{ width: '700px', margin: "10px" }}
                    className="mb-2 mt-3"
                >
                    <Card.Body>
                        <Card.Text>
                            <div className="container-sm mt-2 mb-4" style={{ width: '600px' }}>
                                <Form className='mb5'>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <h5>Check a Feeling</h5>
                                        <Form.Control name='article' value={news} onChange={e => {setResult(''); setNews(e.target.value)}} as="textarea" rows={3} />
                                    </Form.Group>
                                    <Button type="button" variant="secondary" onClick={() => check_feeling()}>
                                        Check Article
                                    </Button>
                                </Form>
                                <div style={{ margin: '20px' }}>
                                    {
                                        news && (
                                            result === '+' ?
                                                <PosFeelingCard/>
                                                : (
                                                    result ==='-' ?
                                                        <NegFeelingCard/>
                                                        : <></>
                                                )
                                        )
                                    }
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

        </Fragment>
    );

};

export default ChackFeeling;
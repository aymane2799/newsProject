import React from 'react'
import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function NewsCard(props) {
    const {id: _id, title: title, body:body} = props;
    
    return (
        <>
             <Card border="secondary"
                 className="my-2 me-1 col-md-3 p-0"
                 style={{height:"auto", textWrap:"wrap"}}>
                {  
                    <Card.Header className="overflow-auto bg-dark text-white " style={{ fontWeight:"bold" }}>
                        {`${title}`}
                    </Card.Header>
                }
                {
                    <Card.Body className="overflow-auto" style={{height: "200px"}}>
                        <Card.Text>
                            {`${body}`}
                        </Card.Text>
                    </Card.Body>
                }
            </Card>  
        </>
    )
}

export default NewsCard
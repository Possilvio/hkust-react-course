import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

class Contact extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            agree: false,
            message: '',
            contactType: 'Phone',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert("Current state is: " + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Contact</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            Hong Kong<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:contact@restaurant.com">contact@restaurant.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-success" href="mailto:contact@restaurant.com"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your feedback</h3>
                    </div>
                    <div className="col-12 col-md-9 mt-4">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={3}>First name</Label>
                                <Col md={9}>
                                    <Input type="text" id="firstname" name="firstname" placeholder="First name" value={this.state.firstname} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={3}>Last name</Label>
                                <Col md={9}>
                                    <Input type="text" id="lastname" name="lastname" placeholder="Last name" value={this.state.lastname} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="phone" md={3}>Phone</Label>
                                <Col md={9}>
                                    <Input type="tel" id="phone" name="phone" placeholder="Phone number" value={this.state.phone} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={3}>Email</Label>
                                <Col md={9}>
                                    <Input type="email" id="email" name="email" placeholder="Email address" value={this.state.email} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 4, offset: 3}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree" checked={this.state.agree} onChange={this.handleInputChange} /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={5}>
                                    <Input type="select" name="contactType" value={this.state.contactType} onChange={this.handleInputChange} >
                                        <option>Phone</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={3}>Your feedback</Label>
                                <Col md={9}>
                                    <Input rows="6" type="textarea" id="message" name="message" placeholder="Your feedback" value={this.state.message} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 9, offset: 3}}>
                                    <Button type="submit" color="primary">Send feedback</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
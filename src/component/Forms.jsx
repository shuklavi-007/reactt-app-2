import React, { Component } from "react";


class Forms extends Component {
    constructor() {
        super();
        this.state = {
            input: {},
            errors: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;

        this.setState({
            input
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.validate()) {
            console.log(this.state);

            let input = {};
            input["name"] = "";
            input["email"] = "";
            input["phone"] = "";
            input["Zipcode"] = "";
            this.setState({ input: input });

            alert('Form is submited');
        }
    }
    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["name"]) {
            isValid = false;
            errors["name"] = "Please enter your name.";
        }

        if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email Address.";
        }

        if (typeof input["email"] !== "undefined") {

            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
                isValid = false;
                errors["email"] = "Please enter valid email address.";
            }
        }

        if (!input["phone"]) {
            isValid = false;
            errors["phone"] = "Please enter your phone number.";
        }


        if (typeof input["phone"] !== "undefined") {

            var pattern = new RegExp(/^[0-9\b]+$/);
            if (!pattern.test(input["phone"])) {
                isValid = false;
                errors["phone"] = "Please enter only number.";
            } else if (input["phone"].length != 10) {
                isValid = false;
                errors["phone"] = "Please enter valid phone number.";
            }
        }
        this.setState({
            errors: errors
        });

        return isValid;
    }

    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>

                    <div class="form-group">
                        <p>Full Name:</p>
                        <input type="text" name="name" value={this.state.input.name} onChange={this.handleChange} placeholder="Enter name" id="name" />
                        <div className="text-danger">{this.state.errors.name}</div>
                    </div>
                    <br />
                    <br />

                    <div class="form-group">
                        <p>Email Address:</p>
                        <input type="text" name="email" value={this.state.input.email} onChange={this.handleChange} placeholder="Enter email" id="email" />
                        <div className="text-danger">{this.state.errors.email}</div>
                    </div>
                    <br />

                    <div class="form-group">
                        <p>Phone:</p>
                        <input type="text" name="phone" value={this.state.input.phone} onChange={this.handleChange} placeholder="Enter phone" id="email" />
                        <br />
                        <br />

                        <div className="text-danger">{this.state.errors.phone}</div>
                    </div>
                    <br />
                    <div>
                        <p>Zip code: </p>
                        <input type="text" name="Zipcode" pattern="[1-9][0-9]{5}" placeholder="Enter 6 digits number" value={this.state.input.Zipcode} />
                    </div>
                    <br />

                    <div className="text-center">
                        <input type="submit" value="Submit" class="btn btn-success" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Forms;
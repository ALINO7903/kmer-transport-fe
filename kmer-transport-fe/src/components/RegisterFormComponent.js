import React from "react";

export default class RegisterFormComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            usermame: null,
            password: null,
            passwordRepeat: null
        };
    }



    render() {
        const fsLink = { fontSize: '0.85em' };

        return (
            <>
                <form>
                    <div class="container w-75 fs-auto bg-light shadow-lg p-5 mt-5 mb-5">
                        <div class="row mb-3 form-floating">
                            <input type="text" id="username" class="form-control col-6" value={this.state.usermame} onChange={(e) => this.setState({ username: e.target.value })} required />
                            <label for="username">Email address</label>
                        </div>
                        <div class="row form-floating mb-3">
                            <input type="password" class="form-control" id="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} required />
                            <label for="password">Password</label>
                        </div>
                        <div class="row form-floating mb-3">
                            <input type="password" class="form-control" id="repeat-password" value={this.state.passwordRepeat} onChange={(e) => this.setState({ passwordRepeat: e.target.value })} required />
                            <label for="repeat-password">Repeat Password</label>
                        </div>
                        <div class="row form-floating mt-3 justify-content-center">
                            <input type="submit" class="btn btn-secondary col-4 col-md-2 p-2" value="Submit" />
                        </div>
                        <div class="row mt-5">
                            <div class="col-6" style={fsLink}>
                                <a href="#">Forgot your password?</a>
                            </div>
                            <div class="col-6 text-end" style={fsLink}>
                                <a href="/login">Login</a>
                            </div>
                        </div>
                    </div>
                </form>
            </>
        );
    }
}
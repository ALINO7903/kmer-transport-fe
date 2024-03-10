import React from "react";

export default class UpdateSearchComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            from: "YAOUNDE",
            to: "DSCHANG",
            departure: null,
            return: null,
            passengers: 1

        }
    }

    interchange() {
        const temp = this.state.from;
        this.setState({ from: this.state.to });
        this.setState({ to: temp });
    }

    render() {
        return (
            <>
                <div class="container-fluid bg-secondary  p-3">
                    <div class="row form-floating justify-content-center">
                        <div class="col-sm-7 col-lg-2 mb-1">
                            <input type="text" class="form-control" value={this.state.from} />
                        </div>
                        <div class="col-sm-7 col-lg-1 mb-1 d-none d-lg-flex justify-content-center">
                            <button onClick={() => this.interchange()}><i class="bi bi-arrow-left-right"></i></button>
                        </div>
                        <div class="col-sm-7 col-lg-2 mb-1">
                            <input type="text" class="form-control" value={this.state.to} />
                        </div>
                        <div class="col-sm-7 col-lg-2 mb-1">
                            <input type="date" class="form-control"></input>
                        </div>
                        <div class="col-sm-7 col-lg-2 mb-1">
                            <input type="date" class="form-control"></input>
                        </div>
                        <div class="col-sm-7 col-lg-1 mb-1">
                            <input type="number" min="1" class="form-control" placeholder="1"></input>
                        </div>
                        <div class="col-sm-7 col-lg-1 d-flex justify-content-center" >
                            <button class="btn btn-dark btn-lg"><i class="bi bi-search"></i></button>
                        </div>
                    </div>
                </div>
            </>
        );

    }


}
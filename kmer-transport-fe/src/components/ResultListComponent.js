import React from "react";


export default class ResultListComponent extends React.Component {


    constructor(props) {
        super(props);
        this.state = { item: -1 };
    }

    changeBg(i) {
        if (window.innerWidth > 760) {
            if (this.state.item >= 0)
                document.getElementById(this.state.item).style.backgroundColor = 'white';
            document.getElementById(i).style.backgroundColor = 'lightgrey';
            this.setState({ item: i });
        }

    }

    over(i, index) {
        if (window.innerWidth > 760) {
            if (i === 1)
                document.getElementById(index).style.fontWeight = 'bold';
            else if (i === 2)
                document.getElementById(index).style.fontWeight = 'normal';
        }

    }

    render() {

        const results = [
            { departure: '10:00', arrival: '15:00', price: '5.000' },
            { departure: '12:00', arrival: '17:00', price: '6.000' },
            { departure: '14:00', arrival: '18:00', price: '8.000' },
            { departure: '15:00', arrival: '20:00', price: '15.000' }
        ]

        const currentDate = new Date().toDateString();

        return (
            <div class="container-fluid m-5 min-vh-100">
                <div class="row">
                    <div class="col-9 col-lg-6">
                        <div class="container bg-light shadow-lg rounded-end " style={{ minHeight: '60vh' }}>
                            <div class="row bg-dark text-center d-flex p-2 mb-5 text-white"><span class>DSCHANG</span> <span>{currentDate}</span></div>
                            {results.map((result, index) => (
                                <div class="row border-top border-bottom justify-content-center p-2 mb-3" id={index} onClick={() => this.changeBg(index)} onMouseOver={() => this.over(1, index)} onMouseOut={() => this.over(2, index)}>
                                    <div class="col-5">{result.departure} <i class="bi bi-arrow-right"></i> {result.arrival}</div>
                                    <div class="col-3">{result.price} XAF</div>
                                    <button class="d d-lg-none btn btn-dark">Buy</button>
                                </div>
                            ))}
                            <p class="text-center fw-bold mt-5 p-5">Good Journey!</p>
                        </div>
                    </div>
                    <div class="col-9 col-lg-5">
                        <div class="container shadow-lg ">
                            <div class="row bg-light">
                                <h3>Book you ticket now</h3>
                                <p class="lead">Refund garanteed 48 hours before the departure</p>
                            </div>
                            {this.state.item >= 0 &&
                                <>
                                    <div class="row bg-secondary d-none d-lg-flex">
                                        <div class="col-6">
                                            <p></p>
                                            <h3>{results[this.state.item].price} XAF</h3>
                                            <p class="lead text-muted">1 person</p>
                                        </div>
                                        <div class="col-5 d-flex align-items-center">
                                            <button class="btn btn-dark w-100">BUY</button>
                                        </div>
                                    </div>
                                    <div class="row bg-light d-flex justify-content-center mt-2 d-none d-lg-flex">
                                        <div class="col-3">
                                            <p>YAOUNDE</p>
                                            <div class="d-flex"> <i class="bi bi-arrow-down"></i> 4hours30min</div><br />
                                            <p>DSCHANG</p>
                                        </div>
                                    </div>

                                </>

                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    };

}
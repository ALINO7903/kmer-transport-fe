import React from "react";

export default class MyTicketsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: 0
        };
    }

    switch(i) {
        if (i === 0) {
            document.getElementById("next").style.color = 'blue';
            document.getElementById("past").style.color = 'black';
            this.setState({ active: 0 });
        }
        else {
            document.getElementById("past").style.color = 'blue';
            document.getElementById("next").style.color = 'black';
            this.setState({ active: 1 });
        }

    }

    render() {
        const aStyle = { textDecoration: 'none', color: 'black' };
        const abStyle = { textDecoration: 'none', color: 'blue' };

        const next = [
            { from: 'YAOUNDE', to: 'DSCHANG', departure: '10:00', arrival: '15:00', price: '5.000', price: '5000', duration: '5h00min', passengers: '1', code: 'AER34314XS2' },
            { from: 'DSCHANG', to: 'YAOUNDE', departure: '12:40', arrival: '17:00', price: '6.000', price: '4500', duration: '4h40min', passengers: '2', code: 'BRE634314XS' }
        ];
        const past = [
            { from: 'DOUALA', to: 'DSCHANG', departure: '10:00', arrival: '15:30', price: '5.000', price: '3000', duration: '5h30min', passengers: '1', code: 'CDARF4314XS2' }
        ];

        const currentDate = new Date().toDateString();

        return (
            <div class="min-vh-100">
                <div class="container">
                    <h1 class="display-5 fw-bold">My Travel Tickets</h1>
                    <a class="fs-5 me-5 mt-3 lead" id="next" style={abStyle} onClick={() => { this.switch(0) }} href="javascript:void(0)">Next Journeys</a>
                    <a class="fs-5 mt-3 lead" id="past" style={aStyle} onClick={() => { this.switch(1) }} href="javascript:void(0)">Past Journeys</a>

                    <div class="container mt-2">
                        {this.state.active === 0 &&

                            next.map((result, index) => (
                                <div class="row mt-5 d-flex justify-content-center">
                                    <div class="col-10 col-md-6 d-flex shadow-lg">
                                        <div class="container ">
                                            <div class="row p-2">
                                                <div class="col-8 bg-secondary"><h5 class="fw-bold">From {result.from} to {result.to} </h5></div>
                                                <div class="col-4 fw-bold text-end text-white bg-dark"><h5>{result.price} XAF </h5></div>
                                            </div>
                                            <div class="row p-2">
                                                <div class="d-flex justify-content-center">
                                                    <i class="bi bi-person-x-fill"></i>{result.passengers}
                                                </div>
                                                <p class="text-center fw-bold d-block d-md-none">Booking code: {result.code}</p>
                                            </div>
                                            <div class="row p-2" style={{ backgroundColor: 'lightgrey' }}>
                                                <div class="col-12 col-md-4 text-center">{currentDate}</div>
                                                <div class="col-12 col-md-4 text-center">
                                                    {result.departure} <i class="bi bi-arrow-right"></i> {result.arrival}
                                                </div>
                                                <div class="col-12 col-md-4 text-center">{result.duration}</div>
                                            </div>
                                            <div class="row justify-content-center mt-3 mb-3">
                                                <button class="w-50 bg-secondary" style={{ minWidth: '200px', minHeight: '40px' }}>
                                                    <i class="bi bi-download"></i> Download ticket
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-4 d-none d-md-block">
                                        <div class="d-flex mt-4" style={{ maxHeight: "250px" }}>
                                            <div class="display-5">&#128896;</div>
                                            <div class="bg-dark text-white p-4 w-100" style={{ marginLeft: "-10px" }}>
                                                <h4>Booking code</h4>
                                                <p class="fw-bold">{result.code}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))

                        }
                        {this.state.active === 0 && next.length === 0 &&
                            <div class="container mt-5 p-5 text-center">
                                <p class="display-3"><i class="bi bi-x-circle"></i> No Tickets booked</p>
                            </div>
                        }


                        {this.state.active === 1 &&

                            past.map((result, index) => (
                                <div class="row mt-5 d-flex justify-content-center">
                                    <div class="col-10 col-md-6 d-flex shadow-lg">
                                        <div class="container ">
                                            <div class="row p-2">
                                                <div class="col-8 bg-secondary"><h5 class="fw-bold">From {result.from} to {result.to} </h5></div>
                                                <div class="col-4 fw-bold text-end text-white bg-dark"><h5>{result.price} XAF </h5></div>
                                            </div>
                                            <div class="row p-2">
                                                <div class="d-flex justify-content-center">
                                                    <i class="bi bi-person-x-fill"></i>{result.passengers}
                                                </div>
                                                <p class="text-center fw-bold d-block d-md-none">Booking code: {result.code}</p>
                                            </div>
                                            <div class="row p-2" style={{ backgroundColor: 'lightgrey' }}>
                                                <div class="col-12 col-md-4 text-center">{currentDate}</div>
                                                <div class="col-12 col-md-4 text-center">
                                                    {result.departure} <i class="bi bi-arrow-right"></i> {result.arrival}
                                                </div>
                                                <div class="col-12 col-md-4 text-center">{result.duration}</div>
                                            </div>
                                            <div class="row justify-content-center mt-3 mb-3">
                                                <button class="w-50 bg-secondary" style={{ minWidth: '200px', minHeight: '40px' }}>
                                                    <i class="bi bi-download"></i> Download ticket
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-4 d-none d-md-block">
                                        <div class="d-flex mt-4" style={{ maxHeight: "250px" }}>
                                            <div class="display-5">&#128896;</div>
                                            <div class="bg-dark text-white p-4 w-100" style={{ marginLeft: "-10px" }}>
                                                <h4>Booking code</h4>
                                                <p class="fw-bold">{result.code}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))

                        }
                        {this.state.active === 1 && past.length === 0 &&
                            <div class="container mt-5 p-auto p-md-5 text-center">
                                <p class="display-3"><i class="bi bi-x-circle"></i> No Past Tickets booked</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}
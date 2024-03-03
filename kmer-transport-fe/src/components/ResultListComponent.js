import React from "react";


export default class ResultListComponent extends React.Component {


    render() {

        const results = [
            { departure: '10:00', arrival: '15:00', price: '5000' },
            { departure: '12:00', arrival: '17:00', price: '6000' },
            { departure: '14:00', arrival: '18:00', price: '8000' },
            { departure: '15:00', arrival: '20:00', price: '15000' }
        ]

        const currentDate = new Date().toDateString();

        return (
            <div class="container-fluid m-5">
                <div class="col-9 col-lg-6">
                    <div class="container bg-light shadow-lg">
                        <div class="row bg-dark text-center p-2 text-white">{currentDate}</div>
                        {results.map((result, index) => (
                            <div class="row border-bottom justify-content-center p-2 mb-2" key={index}>
                                <div class="col-5">{result.departure} <i class="bi bi-arrow-right"></i> {result.arrival}</div>
                                <div class="col-4">{result.price} XAF</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div class="col-9 col-lg-4">
                    <div class="container">

                    </div>
                </div>

            </div>
        );
    };

}
import React from "react"


class SearchComponent extends React.Component {

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

    render() {
        const currentDate = new Date().toISOString().split('T')[0];
        return (
            <form>
                <div class="container bg-light p-5 shadow-lg  mb-5 rounded">
                    <div class="row mb-2 form-floating">
                        <input type="text" id="from" class="form-control" value={this.state.from} onChange={(e) => this.setState({ from: e.target.value })} />
                        <label for="from">From</label>
                    </div>
                    <div class="row form-floating mb-3">
                        <input type="text" class="form-control" id="to" value={this.state.to} onChange={(e) => this.setState({ to: e.target.value })} />
                        <label for="to">To</label>
                    </div>
                    <div class="row mb-2 justify-content-center">
                        <div class="col-12 col-lg-5 form-floating p-2">
                            <input type="date" class="form-control" id="departure" min={currentDate} onChange={(e) => this.setState({ departure: e.target.value, return: null })} />
                            <label for="departure">Departure</label>
                        </div>
                        <div class="col-12 col-lg-5 form-floating p-2">
                            <input type="date" class="form-control" id="return" min={this.state.departure} onChange={(e) => this.setState({ return: e.target.value })} />
                            <label for="return" class="text-muted">Return</label><br />
                        </div>
                    </div>
                    <div class="row form-floating mb-5 justify-content-center">
                        <div class="input-group flex-nowrap" style={{ width: '50%', minWidth: '200px' }}>
                            <span class="input-group-text" id="addon-wrapping"><i class="bi bi-person-plus-fill"></i></span>
                            <input type="number" min="1" class="form-control" placeholder="#passengers" aria-label="passengers" aria-describedby="addon-wrapping" onChange={(e) => this.setState({ passengers: e.target.value })} />
                        </div>
                    </div>
                    <div class="row form-floating mt-3 justify-content-center">
                        <a class="btn btn-secondary btn-lg" href="/results">get your tickets</a>
                    </div>
                </div>
            </form>

        );

    }




}

export default SearchComponent;
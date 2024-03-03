import React from "react";


function Contacts() {

    return (
        <section id="contacts">
            <div class="container-fluid bg-dark text-white pb-1" style={{ marginTop: '100px' }}>
                <div class="row justify-content-center pt-3 text-center">
                    <div class="col-9 col-md-5">
                        <h4>Email</h4>
                        <p><i class="bi bi-envelope-at"></i> kmer@gmail.com</p>
                    </div>
                    <div class="col-9 col-md-5">
                        <h4>Phone</h4>
                        <p><i class="bi bi-telephone-outbound"></i> +237 65342763</p>
                    </div>
                </div>
                <p class="lead text-center">&copy;copyright <strong> Laurence&Alino</strong></p>
            </div >
        </section>

    );

}

export default Contacts;



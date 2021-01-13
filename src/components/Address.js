import React from 'react'

export default function Address() {
    return (
        <div className="address my-5">
            <h4>Your Address</h4>
            <form>
                <div className="form-group">
                    <label for="address">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Alamat lengkap" />
                </div>
                <div className="form-group">
                    <label for="address2">Address II</label>
                    <input type="text" className="form-control" id="address2" placeholder="Alamat tambahan" />
                </div>
                <div className="form-group">
                    <label for="city">City</label>
                    <select className="custom-select">
                        <option selected>Select city</option>
                        <option value="1">Jakarta</option>
                        <option value="2">Bandung</option>
                        <option value="3">Surabaya</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="country">Country</label>
                    <select className="custom-select">
                        <option selected>Select country</option>
                        <option value="1">Malaysia</option>
                        <option value="2">Indonesia</option>
                        <option value="3">Singapura</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

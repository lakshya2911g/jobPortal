import React from "react";

const Delete = ()=>{

    return(

        <>
            <h2>Are you sure?</h2>
            <p>
                Are you sure to delete your account? All data will be lost.
            </p>
            <div className="button-group d-inline-flex justify-content-center align-items-center pt-15">
                <a href="#" className="confirm-btn fw-500 tran3s me-3">
                Yes
                </a>
                <button
                type="button"
                className="btn-close fw-500 ms-3"
                data-bs-dismiss="modal"
                aria-label="Close"
                >
                Cancel
                </button>
            </div>
        </>

    );

};

export default Delete;
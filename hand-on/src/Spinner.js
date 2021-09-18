import * as React from 'react';
import { FaSpinner } from 'react-icons/fa';
import './App.css';

export function SpinnerBig () {

    return (
        <div className="mt-5 d-flex justify-content-center">
            <div className="text-center display-4">
                <FaSpinner icon="spinner" className="spinner App-logo-spin mr-2" />
                <span className="margin-left-10 font-xx-large">Loading...</span>
            </div>
        </div>
    );
}

export function Spinner () {

    return (
        <div>
            <i className="fa fa-refresh fa-spin"></i>
            <span className="margin-left-10">Loading...</span>
        </div>
    );
}
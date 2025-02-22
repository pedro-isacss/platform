import React from "react";
import ReactDOM from "react-dom";

import _service from '@netuno/service-client';

import App from "./App.jsx";

_service.config({
    prefix: netuno.config.urlServices
});

const dashboardDiv = document.getElementById("app-dashboard");

const app = dashboardDiv && ReactDOM.render(
    <App />
    , dashboardDiv
);

netuno.addNavigationLoad(() => {
    $('[netuno-navigation]').find('a').on('netuno:click', (e) => {
        const link = $(e.target);
        if (link.is('[netuno-navigation-dashboard]')) {
            // Memu > Dashboard > Clicked!
        }
    });
});

netuno.addContentLoad((container) => {
    // When any content is loaded dinamically this is executed...
    if (container.is('[netuno-form-search="YOUR_FORM_NAME"]')) {
        // When search page is loaded...
    } else if (container.is('[netuno-form-edit="YOUR_FORM_NAME"]')) {
        // When form edit is loaded...
    }
});

netuno.addPageLoad(() => {
    // When page is loaded...
    let modal = $('#app-dashboard-modal-form');
    modal.on('hidden.bs.modal', () => {
        modal.find('[netuno-form-edit]').empty();
    });
    $('#app-dashboard-modal-form-button').on('click', () => {
        modal.modal('show');
        netuno.loadFormEdit(modal.find('[netuno-form]'));
    });
    modal.find('[netuno-form]').on('netuno:save', () => {
        modal.modal('hide');
    });
});

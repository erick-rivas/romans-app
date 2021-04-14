import React from "react";
import PropTypes from "prop-types";

const Romans = (props) =>
  <BrowserRouter basename="/examples/processes">
  <div class="content container-fluid">

  {/* Header */}
  <div class="page-header">
    <div class="row align-items-end">

      <div class="col-sm">
        <h1 class="page-header-title">Processes</h1>
      </div>

      <div class="col-sm-auto">
        <div class="btn-group" role="group">
          <Link to="/create" className="btn btn-primary">
            <i class="tio-add mr-1"></i>Create
          </Link>
        </div>
      </div>

    </div>
  </div>

  {/* List */}
  <ProcessList />

  {/* Modals */}
  <ModalRoute
      path="/:processId(\d+)"
      component={ProcessDetails} />
  <ModalRoute
    path="/create"
    component={ProcessFormSave} />
  <ModalRoute
    path="/:processId(\d+)/edit"
    component={ProcessFormSet} />

  </div>
  </BrowserRouter>;

Romans.propTypes = {};

export default Romans;
import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

import Details from "components/romans/Details";
import List from "components/romans/List";
import Execute from "components/romans/Execute";
import { ModalRoute } from "seed/helpers";


const Romans = (props) =>
  <BrowserRouter basename="/romans">
  <div class="content container-fluid">

  {/* Header */}
  <div class="page-header">
    <div class="row align-items-end">

      <div class="col-sm">
        <h1 class="page-header-title">Processes</h1>
      </div>

      <div class="col-sm-auto">
        <div class="btn-group" role="group">
          <Link to="/new" className="btn btn-primary">
            <i class="tio-add mr-1"></i>Create
          </Link>
        </div>
      </div>

    </div>
  </div>

  {/* List */}
  <List />

  {/* Modals */}
  <ModalRoute
      path="/:processId(\d+)/characteres"
      component={Details} />
  <ModalRoute
    path="/new"
    component={Execute} />

  </div>
  </BrowserRouter>;

Romans.propTypes = {};

export default Romans;
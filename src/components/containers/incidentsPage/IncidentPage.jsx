import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toast } from 'react-toastify';
import * as redflagActions from '../../../actions/incidents/redflagActions';
import Authenticated from '../../../routes/Authenticated';
import Spinner from '../../views/commons/Spinner';
import Redflag from '../../views/incidents/Redflag';

export class Incident extends Component {
  state = {
    redFlags: [],
    errors: false
  };

  componentWillMount() {
    const { actions, history } = this.props;
    actions
      .getAllRedFlags()
      .then(data => {
        const newState = {
          redFlags: data,
          errors: false
        };
        this.setState({
          ...newState
        });
      })
      .catch(error => {
        if (error.status === 404) {
          const errorMessage = 'There are currenly no Redflag incidents reported.';
          const newState = {
            redFlags: [errorMessage],
            errors: true
          };
          this.setState({
            ...newState
          });
        } else {
          toast.error(`${error.error}`);
          sessionStorage.clear();
          history.push('/login');
        }
      });
  }

  render() {
    const { redFlags, errors } = this.state;
    const { loading } = this.props;
    return loading ? (
      <Spinner />
    ) : (
      <div className="container wrapper">
        <div className="row">
          <div className="col-lg-10 col-md-12" id="recent-redflags">
            <h2> Recent Redflags</h2>
          </div>
        </div>
        <div className="row">
          <div />
          <div className="col-lg-10 col-md-12">
            <Redflag redFlags={redFlags} errors={errors} />
          </div>
        </div>
      </div>
    );
  }
}

Incident.propTypes = {
  actions: PropTypes.shape().isRequired,
  loading: PropTypes.func.isRequired,
  history: PropTypes.shape()
};

Incident.defaultProps = {
  history: {}
};

export function mapStateToProps(state) {
  return {
    loading: state.apiCallsInProgress > 0
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(redflagActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Authenticated(Incident));

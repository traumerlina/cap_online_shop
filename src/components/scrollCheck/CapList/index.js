import React, { useContext, useEffect } from 'react';
import {connect} from 'react-redux';
import CapsContext from '../context';
import { fetchCaps } from '../../redux';
import classes from './style.module.scss';
import ScrollCheck from '..';

const ScrollList = ({caps}) => {

  return(
    {}
  )
};

const CapListContainer = ({caps, loading, error, fetchCaps}) => {
const service = useContext(CapsContext);

useEffect(() => {
    fetchCaps(service.getCaps)
}, [fetchCaps, service.getCaps]);



return <ScrollList caps={caps} />
};

  const mapStateToProps = ({caps, error, loading}) => {
      return {
          caps,
          error,
          loading
      };
  };

  const mapDispatchToProps = (dispatch) => {
    return{
      fetchCaps: (service) => fetchCaps(dispatch, service)
    }
  };

export default connect(mapStateToProps,mapDispatchToProps) (CapListContainer)
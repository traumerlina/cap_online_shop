import React, { useContext, useEffect } from 'react';
import {connect} from 'react-redux';
import classes from "./styles.module.scss";
import CapsContext from '../context';
import { fetchCaps } from '../../redux';
import AllCaps from '../all-caps';

const Caplist = ({caps}) => {
  
    return (
      <div className={classes.cap_list}>
        {caps.map((cap) => {
            return <AllCaps cap={cap}/>
        })}
      </div> 
    )
  };
  
const CapListContainer = ({caps, loading, error, fetchCaps}) => {
const service = useContext(CapsContext);

useEffect(() => {
    fetchCaps(service.getCaps)
}, [fetchCaps, service.getCaps]);

// if(loading) {
//     return <Spinner/>
// }

// if (error) {
//     return <ErrorIndicator/>
// }

return <Caplist caps={caps} />
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
  
  
  export default connect(mapStateToProps, mapDispatchToProps) (CapListContainer);
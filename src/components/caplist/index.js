import React, { useContext, useEffect } from "react";
import { connect } from "react-redux";
import classes from "./styles.module.scss";
import CapsContext from "../context";
import { fetchCaps } from "../../redux";
import AllCaps from "../all-caps";
import LoaderIndicator from "../loaderIndicator";
import ErrorIndicator from "../errorIndicator";

const Caplist = ({ caps }) => {
  return (
    <ul className={classes.cap_list}>
      {caps.map((cap) => {
        return (
          <li key={`caps-${cap.id}}`}>
            <AllCaps cap={cap} />{" "}
          </li>
        );
      })}
    </ul>
  );
};

const CapListContainer = ({ caps, loading, error, fetchCaps }) => {
  const service = useContext(CapsContext);

  useEffect(() => {
    fetchCaps(service.getCaps);
  }, [fetchCaps, service.getCaps]);


  return (
    <ul>
      {loading ? (
        <LoaderIndicator />
      ) : error ? (
        <ErrorIndicator/>
      ) : (
        <Caplist caps={caps} />
      )}
    </ul>
  );
};


const mapStateToProps = ({ caps, error, loading }) => {
  return {
    caps,
    error,
    loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCaps: (service) => fetchCaps(dispatch, service),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CapListContainer);

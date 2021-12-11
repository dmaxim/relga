import React from 'react';
import PropTypes from 'prop-types';

const ApplicationTypeList = ({ applicationTypes }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      {applicationTypes.map((applicationType) => {
        return (
          <tr key={applicationType.applicationTypeId}>
            <td>{applicationType.applicationTypeId}</td>
            <td>{applicationType.name}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

ApplicationTypeList.propTypes = {
  applicationTypes: PropTypes.array.isRequired,
};

export default ApplicationTypeList;

import React from 'react';
import PropTypes from 'prop-types';

const ApplicationList = ({ applications }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Application</th>
        <th>Application Type</th>
      </tr>
    </thead>
    <tbody>
      {applications.map((application) => {
        return (
          <tr key={application.applicationId}>
            <td>{application.name}</td>
            <td>{application.applicationTypeId}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

ApplicationList.propTypes = {
  applications: PropTypes.array.isRequired,
};

export default ApplicationList;

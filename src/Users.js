import React, { useEffect } from 'react';
import { connect } from 'react-redux';
//import { Table } from 'antd';
import { fetchUsers } from './fetch/action';

function Users({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // const columns = [
  //   {
  //     title: 'userId',
  //     dataIndex: 'userId',
  //     key: 'userId',
  //     sorter: (a, b) => a.userId.length - b.userId.length,
  //     ellipsis: true,
  //   },
  //   {
  //     title: 'id',
  //     dataIndex: 'id',
  //     key: 'id',
  //     sorter: (a, b) => a.id.length - b.id.length,
  //     ellipsis: true,
  //   },
  //   {
  //     title: 'title',
  //     dataIndex: 'title',
  //     key: 'title',
  //     sorter: (a, b) => a.title.length - b.title.length,
  //     ellipsis: true,
  //   },
  //   {
  //     title: 'completed',
  //     dataIndex: 'completed',
  //     key: 'completed',
  //     filters: [
  //       { text: 'false', value: 'false' },
  //       { text: 'true', value: 'true' },
  //     ],
  //     width: '15%',

  //     onFilter: (value, record) => record.completed.includes(value),
  //     sorter: (a, b) => a.completed.length - b.completed.length,
  //     ellipsis: true,
  //   },
  // ];
  return (
    <div>
      <h2> FDA_API</h2>
      <ul>
        {userData &&
          userData.results &&
          userData.products.results.map((result) => <p> {result.meta}</p>)}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.result,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);

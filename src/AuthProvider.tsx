import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { isNull } from 'lodash';
import { API_TOKEN_KEY } from './constants';
import { getUser } from './slices/user';

interface Props {
  children: any; // eslint-disable-line
}

const AuthProvider = ({ children }: Props) => {
  const [isLoading, changeLoading] = useState(true);
  const token = window.localStorage.getItem(API_TOKEN_KEY);

  useEffect(() => {
    const init = async () => {
      if (isNull(token)) {
        changeLoading(false);
        return;
      }
      try {
        await getUser();
      } catch (e) {
        console.log(e);
      }
      changeLoading(false);
    };
    init();
  }, []);

  if (isLoading) {
    return <div>loading</div>;
  }

  return children;
};
const mapDispatchToProps = {};

export default connect(null, mapDispatchToProps)(AuthProvider);

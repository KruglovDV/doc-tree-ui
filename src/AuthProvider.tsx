import { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { API_TOKEN_KEY } from "./constants";
import { isNull, identity } from 'lodash';
import { getUser } from './slices/user';

interface Props {
  children: any;
}

const AuthProvider: FC<Props> = ({ children }) => {
  const [isLoading, changeLoading] = useState(true);
  const token = window.localStorage.getItem(API_TOKEN_KEY);

  useEffect(() => {
    const init = async () =>{
      if (isNull(token)) {
        changeLoading(false);
        return;
      }
      try {
        await getUser();
      } catch (e) {}
      changeLoading(false);
    };
    init();
  }, []);

  if (isLoading) {
    return 'loading';
  }

  return (
    children
  )
};
const mapDispatchToProps = {

};

export default  connect(null, mapDispatchToProps)(AuthProvider);

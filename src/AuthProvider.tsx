import { FC, useEffect, useState } from 'react';
import { API_TOKEN_KEY } from "./constants";
import _ from 'lodash';

interface Props {
  children: any;
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const token = window.localStorage.getItem(API_TOKEN_KEY);

  useEffect(() => {
    if (_.isNull(token)) return;

  }, []);

  return (
    children
  )
};

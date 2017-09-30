// @flow
import React from 'react';
import style from './header.style.css';

export default ({title}: { title: string }) => {
  return (
    <div className={style.header}>{title}</div>
  );
};

import React from 'react';

export type Navigation = {
  link: string;
  text: string;
  icon: React.ReactNode;
};

export enum ERole {
  OPERATOR = 'operator',
}

import React, { ReactNode } from 'react';

/*
    Switch and Case
*/
interface SwitchProps {
  fallback?: ReactNode;
  children: ReactNode[];
}

const Switch: React.FC<SwitchProps> = ({ fallback, children }) => {
  let match: ReactNode = null;

  React.Children.forEach(children, child => {
    if (React.isValidElement(child) && (child.props as any).when) {
      match = child;
    }
  });

  return <>{match || fallback || null}</>;
};

interface CaseProps {
  when: boolean;
  children: ReactNode;
}

const Case: React.FC<CaseProps> = ({ when, children }) => <>{when ? children : null}</>;

/*
    ID 
*/
interface IDProps {
  children: ReactNode;
  tid: string;
}

const ID: React.FC<IDProps> = ({ children, tid: testId }) => {
  if (!React.isValidElement(children)) {
    console.error("ID component expects a single valid React element as its child.");
    return null;
  }
  return React.cloneElement(children, { 'data-test-id': testId });
};




export { Switch, Case, ID };

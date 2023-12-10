import { ReactNode } from 'react';

const MarketingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1>Marketing</h1>
      <div>{children}</div>
    </div>
  );
};

export default MarketingLayout;

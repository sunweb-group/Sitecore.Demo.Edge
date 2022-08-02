import { Field, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

export type bannerProps = ComponentProps & {
  fields: {
    data: {
      source: {
        text: Field<string>;
      };
    };
  };
};

const ChildComponent = (props) => {
  return (
    <div>
      <p>Hello from child</p>
    </div>
  );
};

export default ChildComponent;

import { Field, Text, Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
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

const Banner = (props) => {
  return (
    <div>
      <h1>
        <p>
          <i>{props.fields.Text.value}</i>
          <a href={props.fields.CallToAction.value.href}>{props.fields.CallToAction.value.text}</a>
        </p>
      </h1>
      <div>
        <Placeholder name="jss-test-banner-content" rendering={props.rendering} />
      </div>
    </div>
  );
};

export default Banner;

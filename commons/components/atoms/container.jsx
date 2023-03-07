import classNames from 'classnames';

const Container = ({ children = null, className = '' }) => {
  return (
    <div className={classNames(className, 'mx-auto w-full max-w-screen-xl')}>
      {children}
    </div>
  );
};

export default Container;

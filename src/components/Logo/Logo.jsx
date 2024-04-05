export const Logo = (props) => {
  return (
    <>
      <div className="logo">
        <div className={`logo__rhombus ${props.myProp ? '': 'logo__footer-rhombus'}`}></div>
        <div className={`logo__txt ${props.myProp ? '': 'logo__footer-txt'}`}>Skilline</div>
      </div>
    </>
  );
};

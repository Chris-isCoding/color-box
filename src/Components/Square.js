const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <section
      className='square'
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? '#001' : '#FFF',
      }}
    >
      <p>{colorValue ? colorValue : 'Empty value'}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};

Square.defaultProps = {
  colorValue: 'Empty Color Value',
};

export default Square;

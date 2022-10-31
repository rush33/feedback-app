import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyles}>
      <h2>{text}</h2>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback App",
  bgColor: "rgb(12,16,22)",
  textColor: "rgb(188, 226, 158)",
};

Header.propTypes = {
    text: PropTypes.string
}
export default Header
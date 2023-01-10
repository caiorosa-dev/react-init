import styled from 'styled-components';

const BasicContainer = styled.div`
	padding: 16px;
	background: ${ (props) => props.theme.background.extraDark };
	border-radius: 8px;
`;

export default BasicContainer;

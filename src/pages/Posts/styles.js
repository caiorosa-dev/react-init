import styled from 'styled-components';
import BasicContainer from '../../components/BasicContainer';

export const Container = styled(BasicContainer)`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

export const NavBar = styled(BasicContainer)`
	display: flex;
	justify-content: space-between;
`;

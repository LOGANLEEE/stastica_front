import styled from 'styled-components';

export const Wrapper = styled.div`
	font-size: 1rem;
	height: 100%;

	.nav_group {
		height: 100%;
		.btn {
			width: 25%;
			background-color: #527b5b;
			border-radius: 7px;
			cursor: pointer;
			display: flex;
			align-items: center;
		}
		.btn:hover {
			background-color: #384e8a;
		}
	}
`;

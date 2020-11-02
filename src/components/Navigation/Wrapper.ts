import styled from 'styled-components';

export const Wrapper = styled.div`
	font-size: 1rem;
	height: 100%;

	.nav_group {
		height: 100%;
		display: flex;
		.btn {
			width: 25%;
			background-color: #527b5b;
			border-radius: 7px;
			cursor: pointer;
			display: flex;
			align-items: center;
			outline: none;
		}
		/* .btn:hover {
			background-color: #384e8a;
		} */
		.btn:active {
			background-color: #384e8a;
		}

		.activated {
			background-color: #384e8a;
		}
	}
`;

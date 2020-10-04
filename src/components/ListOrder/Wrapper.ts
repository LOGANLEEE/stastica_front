import styled from 'styled-components';

export const Wrapper = styled.div`
	.main {
		display: flex;
		flex-wrap: wrap;

		.btn {
			background-color: #527b5b;
			width: 44%;
		}

		.active {
			background-color: greenyellow;
		}

		.inactive {
			background-color: #527b5b;
		}
	}
`;

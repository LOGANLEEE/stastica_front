import styled from 'styled-components';

export const Wrapper = styled.div`
	height: 100%;

	.container {
		height: 100%;

		.left {
			background-color: #2b2b2b;
			width: 10%;
		}
		.middle {
			background-color: #1b1b1b;
			width: 80%;
		}

		.right {
			background-color: #2b2b2b;
			width: 10%;

			.item {
				width: 100%;
			}
		}
	}
`;

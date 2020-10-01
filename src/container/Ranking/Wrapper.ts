import styled from 'styled-components';

export const Wrapper = styled.div`
	height: 100%;

	.container {
		height: 100%;

		.left {
			background-color: #2b2b2b;
			width: 10%;
			.item {
				width: 100%;
			}
		}
		.middle {
			background-color: #1b1b1b;
			@media only screen and (max-width: 600px) {
				width: 100%;
			}
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

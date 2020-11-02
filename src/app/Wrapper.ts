import styled from 'styled-components';
import { Style } from './index';

export const Wrapper = styled.div<Style>`
	@media only screen and (max-width: 600px) {
		font-size: 12px;
	}

	font-size: 16px;
	background-color: #2b2b2b;
	color: #e6e6e6;
	width: 100vw;
	height: 100vh;

	.head {
		background-color: #2b2b2b;
		height: ${(props) => props.head.container_height}%;
		border-bottom: #527b5b 0.1rem solid;
		padding: 0.4%;
		margin-bottom: 0.4%;

		.item {
			height: 100%;
		}

		.head_item_0 {
			width: 7%;
			@media only screen and (max-width: 600px) {
				width: 24%;
			}
		}

		.head_item_1 {
			width: 20%;
			@media only screen and (max-width: 600px) {
				width: 40%;
			}
		}

		.brick {
			@media only screen and (max-width: 600px) {
				width: 5%;
			}
			@media only screen and (min-width: 601px) {
				width: 63%;
			}
		}

		.head_item_2 {
			display: flex;
			@media only screen and (max-width: 600px) {
				width: 20%;
			}
		}
	}

	.body {
		height: ${(props) => props.body.container_height}%;
	}

	.foot {
		background-color: #2b2b2b;
		height: ${(props) => props.foot.container_height}%;
	}
`;

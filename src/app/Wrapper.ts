import styled from 'styled-components';
import { Style } from './index';

export const Wrapper = styled.div<Style>`

:root

	background-color: #1b1b1b;
	font-size: 16px;

	 /* @media only screen and (max-width: 600px) {
		font-size: 12px;
		} */

	color: white;
	width: 100vw;

	.head {
		height: ${(props) => props.head.container_height}vh;
		padding-top: 0.2%;

		.head_item_1 {
			width:50%;

		}
		.head_item_2 {
			width:5%;
		}
		.head_item_3 {
			width:5%;

		}
	}

	.body {
		height: ${(props) => props.body.container_height}vh;

		.left {
			width: 15%;
		}
		.middle {
			width: 70%;
		}

		.right {
			width: 15%;

			.item{
				width:100%;
			}
		}
	}

	/* @media only screen and (max-width: 600px) {
		.body {
			height: ${(props) => props.body.container_height}vh;

			.left {
				width: 10%;
			}
			.middle {
				width: 10%;
			}

			.right {
				width: 100%;
			}
		}
	} */

	.foot {
		height: ${(props) => props.foot.container_height}vh;
	}
`;

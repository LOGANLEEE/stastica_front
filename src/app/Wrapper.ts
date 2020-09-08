import styled from 'styled-components';
import { Style } from './index';

export const Wrapper = styled.div<Style>`
	background-color: #1b1b1b;

	color: white;
	width: 100vw;

	.head {
		width: 100%;
		height: ${(props) => props.head.container_height}vh;
		padding-top: 0.1%;
	}

	.body {
		width: 100%;
		height: ${(props) => props.body.container_height}vh;

		.left {
			width: 15%;
		}
		.middle {
			width: 70%;
		}

		.right {
			width: 15%;
		}
	}

	.foot {
		width: 100%;
		height: ${(props) => props.foot.container_height}vh;
	}
`;

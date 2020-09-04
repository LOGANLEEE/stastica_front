import styled from 'styled-components';
import { Style } from './index';

export const Wrapper = styled.div<Style>`
	background-color: #1b1b1b;
	color: white;

	.head {
		height: ${(props) => props.head.container_height}vh;
		padding-top: 0.1%;
}
	}

	.body {
		height: ${(props) => props.body.container_height}vh;
		.left {
			width: 15vw;
		}
		.middle {
			width: 70vw;
		}

		.right {
			width: 15vw;
		}
	}

	.foot {
		height: ${(props) => props.foot.container_height}vh;
	}
`;

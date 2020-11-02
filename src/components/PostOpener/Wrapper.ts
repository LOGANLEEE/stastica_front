import styled from 'styled-components';

export const Wrapper = styled.div`
	.cnt_handelr {
		.desc {
			font-size: 0.9rem;
			height: 1rem;
		}
		.cnt_input {
			width: 100%;
		}
	}
	.btn_group {
		display: flex;
		flex-wrap: wrap;

		.btn {
			font-size: 1rem;
			width: 33%;
			background-color: #527b5b;
			border-radius: 7px;
			cursor: pointer;
			display: flex;
			align-items: center;
		}

		.btn:focus {
			background-color: #384e8a;
		}

		.btn:hover {
			opacity: 90%;
		}
		/* .clicked {
			background-color: #384e8a;
		} */
	}
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
	.btn {
		.MuiButton-label {
			font-size: 1rem;
		}

		width: 100%;

		.MuiButton-containedPrimary {
			background-color: green;
		}
	}
`;

export const PopperWrapper = styled.div`
	padding-right: 2rem;
	border: 1px #d6dada solid;
	padding: 1px;
	background-color: #d6dada;
	border-radius: 7px;

	.MuiSwitch-colorSecondary.Mui-checked {
		color: #3f50b6;
	}

	.MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track {
		background-color: #3f50b6;
	}
`;

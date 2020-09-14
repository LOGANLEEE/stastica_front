import styled from 'styled-components';

export const Wrapper = styled.div`
	font-size: 1rem;

	.btn {
		width: 100%;
		background-color: #527b5b;
		border-radius: 7px;
		cursor: pointer;
		justify-content: center;
		display: flex;
		align-items: center;
	}

	.btn:hover {
		background-color: #384e8a;
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

import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;

	.btn {
		width: 33%;
		background-color: #527b5b;
		border-radius: 7px;
		cursor: pointer;
		display: flex;
		align-items: center;
	}

	.btn:hover {
		background-color: #384e8a;
	}
`;

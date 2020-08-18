import styled from 'styled-components';

export const Wrapper = styled.div`
	height: 100vh;
	font-size: 1rem;

	.Row {
		height: 0.2%;
	}

	.from {
		/* mix-blend-mode: difference; */
	}
	.title {
		cursor: pointer;
		margin-top: 0.4%;
		margin-bottom: 0.3%;
	}
	.author {
		font-size: 0.8rem;
	}

	.hit {
		font-size: 0.8rem;
	}

	.upload_date {
		font-size: 0.8rem;
	}

	.item1 {
		width: ${(props) => props.style.item1.width};
		padding-left: 2%;
	}
	.item2 {
		width: 15%;
	}
	.item3 {
		width: 15%;
	}

	.item3 {
		width: 15%;
	}

	.Etoland {
		background-color: #499a22;
	}
	.Ilbe {
		background-color: red;
	}
	.Bobae {
		background-color: #0070bc;
	}
	.82cook {
		background-color: #cdf6cf;
	}
	.DogDrip {
		background-color: #2e4361;
	}
	.FmKorea {
		background-color: #4d78d1;
	}
	.TodayHumor {
		background-color: #009dbd;
	}
	.MLBPark {
		background-color: #5181e3;
	}
	.HumorUniv {
		background-color: #ee4e72;
	}
	.Ppomppu {
		background-color: #ee5aff;
	}
	.RuliWeb {
		background-color: #1a6fdc;
	}
	.SLR {
		background-color: #53a7ec;
	}
	.TheQoo {
		background-color: #375472;
	}
	.YGosu {
		background-color: #353c3f;
	}
	.Clien {
		background-color: #23303e;
	}
	.DDanzi {
		background-color: #222323;
	}
	.Gasengi {
		background-color: #536274;
	}
	.OPGG {
		background-color: black;
	}
`;
